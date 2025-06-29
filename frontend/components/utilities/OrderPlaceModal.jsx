import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, message } from 'antd';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
// import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import DatePickerHeader from 'react-multi-date-picker/plugins/date_picker_header';
import Toolbar from 'react-multi-date-picker/plugins/toolbar';
import ApiService from '../../utils/apiService';
import notificationWithIcon from '../../utils/notification';

const { confirm } = Modal;

function OrderPlaceModal({ bookingModal, setBookingModal }) {
  // Format range for display and show total days
  const getRangeDisplay = (range) => {
    if (Array.isArray(range) && range.length === 2 && range[0] && range[1]) {
      const startDayjs = dayjs(range[0]);
      const endDayjs = dayjs(range[1]);
      const start = startDayjs.format('DD/MMMM/YYYY');
      const end = endDayjs.format('DD/MMMM/YYYY');
      const totalDays = endDayjs.diff(startDayjs, 'day') + 1;
      return `${start} - ${end} (${totalDays} hari)`;
    }
    return '';
  };
  const [selectedDates, setSelectedDates] = useState([]);
  const [rangeValue, setRangeValue] = useState(null);
  const router = useRouter();

  // handle date change on date picker
  // handle date change for range selection
  const handleDateChange = (dates) => {
    if (Array.isArray(dates) && dates.length === 2) {
      setRangeValue(dates);
      // Generate all dates in the range
      const start = dayjs(dates[0]);
      const end = dayjs(dates[1]);
      const range = [];
      let current = start.clone();
      while (current.isBefore(end, 'day') || current.isSame(end, 'day')) {
        range.push(current.format('YYYY-MM-DD'));
        current = current.add(1, 'day');
      }
      setSelectedDates(range);
    } else {
      setRangeValue(dates);
      setSelectedDates([]);
    }
  };

  // function to handle placed room booking order
  const handlePlacedOrder = () => {
    if (selectedDates.length === 0) {
      notificationWithIcon('error', 'ERROR', 'Minimum 1 date selection is required to placed an room booking order.');
    } else {
      confirm({
        title: 'Are your selected dates booked this Room?',
        icon: <ExclamationCircleOutlined />,
        okText: 'Ok',
        cancelText: 'Cancel',
        onOk() {
          return new Promise((resolve, reject) => {
            ApiService.post(`/api/v1/placed-booking-order/${bookingModal?.roomId}`, {
              booking_dates: selectedDates
            })
              .then((res) => {
                resolve();
                if (res?.result_code === 0) {
                  notificationWithIcon('success', 'SUCCESS', (res?.result?.message || 'Your room booking order placed successful'));
                  setBookingModal((prevState) => ({ ...prevState, open: false, roomId: null }));
                  router.push('/profile?tab=booking-history');
                  setSelectedDates([]);
                } else {
                  notificationWithIcon('error', 'ERROR', 'Sorry! Something went wrong. App server error');
                }
              })
              .catch((err) => {
                notificationWithIcon('error', 'ERROR', (err?.response?.data?.result?.error?.message || err?.message || 'Sorry! Something went wrong. App server error'));
                reject();
              });
          }).catch((err) => message.error(err?.message || 'Oops errors!'));
        }
      });
    }
  };

  return (
    <Modal
      title='Select range of dates you want to book:'
      open={bookingModal.open}
      onOk={() => setBookingModal((prevState) => (
        { ...prevState, open: false, roomId: null }
      ))}
      onCancel={() => setBookingModal((prevState) => (
        { ...prevState, open: false, roomId: null }
      ))}
      closable={false}
      centered
      footer={[
        <div key='custom-footer'>
          {/* button closed/hide modal */}
          <Button
            onClick={() => setBookingModal((prevState) => (
              { ...prevState, open: false, roomId: null }
            ))}
            type='default'
            size='middle'
          >
            Cancel
          </Button>

          {/* button to handle placed order */}
          <Button
            onClick={handlePlacedOrder}
            type='primary'
            size='middle'
          >
            Placed Order
          </Button>
        </div>
      ]}
    >
      {/* Display selected range in desired format */}
      {getRangeDisplay(rangeValue) && (
        <div
          style={{
            marginBottom: 16,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#1677ff' // Ant Design blue (same as calendar highlight)
          }}
        >
          {getRangeDisplay(rangeValue)}
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Calendar
          style={{ width: '100%' }}
          plugins={[
            <DatePickerHeader
              key='date-picker-header'
              position='top'
              size='medium'
            />,
            <Toolbar
              key='toolbar'
              position='bottom'
            />
          ]}
          minDate={new Date(new Date()).setDate(new Date().getDate() + 1)}
          onChange={handleDateChange}
          value={rangeValue}
          format='DD/MM/YYYY'
          highlightToday
          range
        />
      </div>
    </Modal>
  );
}

OrderPlaceModal.defaultProps = {
  bookingModal: { open: false, roomId: null }
};

OrderPlaceModal.propTypes = {
  bookingModal: PropTypes.object
};

export default OrderPlaceModal;
