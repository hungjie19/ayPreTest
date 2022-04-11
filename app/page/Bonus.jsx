import React, { useState } from 'react';
import QuadrupleRoom from '../components/QuadrupleRoom.jsx';

const Bonus = () => {
  const [bookingList, setBookingList] = useState([
    { roomIndex: 1, adult: 1, child: 0 }, 
    { roomIndex: 2, adult: 1, child: 0 }, 
    { roomIndex: 3, adult: 1, child: 0 }
  ]);
  const handleChange = value => {
    setCount(value);
  }
  const allRoomCount = () => bookingList.map(r => r.adult + r.child).reduce((a, b) => a + b, 0);
  const isDisabled = value => {
    return allRoomCount() >= 10;
  }
  const handleUpdateRoom = room => {
    const newList = bookingList.map(r => r.roomIndex == room.roomIndex ? room : r);
    console.log('handleUpdateRoom', newList);
    setBookingList([...newList]);
  }

  return (
    <div>
      <h3>Demo Bonus:</h3>
      <b>住客人數 10 人 / 3 房</b> 
      尚未分配人數：{10 - allRoomCount()}
      {bookingList.map(({roomIndex, adult, child}) => (
        <QuadrupleRoom
          key={`room_${roomIndex}`}
          // roomData={room}
          roomIndex={roomIndex}
          adult={adult}
          child={child}
          disabled={isDisabled()}
          onChange={handleUpdateRoom}
        />
      ))}
    </div>
  );
}

export default Bonus;
