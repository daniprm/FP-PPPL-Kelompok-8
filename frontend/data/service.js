import {
  FaWifi
} from 'react-icons/fa';
import { MdOutlineSecurity, MdOutlineCleaningServices, MdSupportAgent } from 'react-icons/md';

const services = [
  {
    icon: <FaWifi />,
    title: 'Paket Konektivitas Super Cepat & Stabil',
    info: 'Lupakan sinyal Wi-Fi yang putus-nyambung! Kami menyediakan koneksi internet berkecepatan tinggi yang stabil 24 jam di seluruh area kos.'
  },
  {
    icon: <MdOutlineSecurity />,
    title: 'Keamanan Terpadu 24/7',
    info: 'Ketenangan Anda adalah prioritas kami. Kami menerapkan sistem keamanan berlapis untuk memastikan Anda dan barang-barang Anda selalu aman.'
  },
  {
    icon: <MdOutlineCleaningServices />,
    title: 'Kebersihan Area Bersama Terjaga Setiap Hari',
    info: 'Kos yang bersih membuat pikiran lebih jernih dan badan lebih sehat. Tim kebersihan kami secara rutin membersihkan area umum setiap hari.'
  },
  {
    icon: <MdSupportAgent />,
    title: 'Layanan Cepat Tanggap',
    info: 'Ada masalah di kamar atau fasilitas kos? Jangan ragu untuk melapor. Tim pengelola kami siap sedia memberikan bantuan dengan cepat.'
  }
];

export default services;
