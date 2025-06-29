import { useState, useEffect } from 'react';
import Title from '../home/Title';

export default function RoomFilter({ ourRooms, setOurFilteredRooms }) {
  const [priceValue, setPriceValue] = useState(3000000);
  const [roomType, setRoomType] = useState('all');
  const [roomsCapped, setRoomsCapped] = useState([]);

  useEffect(() => {
    if (ourRooms.length > 0) {
      const cappedRooms = ourRooms.map((room) => {
        // console.log('Room price (raw USD):', room.room_price);
        const idr = room.room_price * 15000;
        // console.log('Converted IDR before cap:', idr);
        const capped = Math.min(idr, 3000000);
        // console.log('Converted IDR after cap:', capped);
        return {
          ...room,
          room_price_idr: capped
        };
      });
      setRoomsCapped(cappedRooms);
      setOurFilteredRooms(cappedRooms);
    }
  }, [ourRooms]);

  const applyFilters = (selectedType, selectedPrice) => {
    if (roomsCapped.length === 0) return;

    const filtered = roomsCapped.filter((room) => {
      const matchType = selectedType === 'all' || room.room_type === selectedType;
      const matchPrice = room.room_price_idr <= selectedPrice;
      return matchType && matchPrice;
    });

    setOurFilteredRooms(filtered);
  };

  const handleRoomTypeChange = (value) => {
    setRoomType(value);
    applyFilters(value, priceValue);
  };

  const handlePriceChange = (value) => {
    setPriceValue(value);
    applyFilters(roomType, value);
  };

  return (
    <section className='filter-container'>
      <Title title='search rooms' />

      <form className='filter-form'>
        {/* Room type */}
        <div className='form-group'>
          <label htmlFor='type'>Room Type</label>
          <select
            className='form-control'
            name='type'
            id='type'
            value={roomType}
            onChange={(e) => handleRoomTypeChange(e.target.value)}
          >
            <option value='all'>Semua</option>
            <option value='single'>Single</option>
            <option value='couple'>Couple</option>
            <option value='family'>Family</option>
            <option value='presidential'>Presidential</option>
          </select>
        </div>

        {/* Price range */}
        <div className='form-group'>
          <label htmlFor='price'>
            Price to be chosen:
            <br />
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0
            }).format(priceValue)}
          </label>
          <input
            className='form-control'
            type='range'
            name='price'
            id='price'
            min={0}
            max={3000000}
            step={50000}
            value={priceValue}
            onChange={(e) => handlePriceChange(parseInt(e.target.value, 10))}
          />
        </div>
      </form>
    </section>
  );
}
