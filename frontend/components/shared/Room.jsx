import Link from 'next/link';

function Room({ room }) {
  const idrPrice = typeof room.room_price_idr === 'number' ? (room.room_price_idr > 3000000 ? 3000000 : room.room_price_idr) : Math.min(room.room_price * 15000, 3000000) || 0;
  return (
    <article className='room'>
      <div className='img-container'>
        <img
          src={room?.room_images[0]?.url || '/img/jpeg/room-1.jpeg'}
          alt='single room'
        />

        <div className='price-top'>
          <h6>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              minimumFractionDigits: 0
            }).format(idrPrice)}
          </h6>
          <p>per night</p>
        </div>

        <Link
          className='btn-primary room-link'
          href={`/rooms/${room?.room_slug}`}
        >
          Feature
        </Link>
      </div>

      <p className='room-info'>
        {room?.room_name}
      </p>
    </article>
  );
}

export default Room;
