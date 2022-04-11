import React, { useState } from 'react';
import CustomInputNumber from './CustomInputNumber.jsx';

const QuadrupleRoom = ({
  roomData = { adult: 1, child: 0 },
  roomIndex,  
  adult = 1,
  child = 0,
  disabled = false,
  onChange = () => {},
}) => {
  // const [adultCount, setAldultCount] = useState(adult);
  // const [childCount, setChildCount] = useState(roomData.child);
  const handleAldultCount = num => {
    console.log('handleAldultCount', num);
    if (num >= 1 && num + child <= 4) {
      onChange({ roomIndex, adult: num, child });
    }
  }
  const handleChildChange = num => {
    console.log('handleChildChange', num);
    if (adult + num <= 4) {
      onChange({ roomIndex, adult, child: num });
    }
  }

  return (
    <div>
      <b>房間 {adult + child} 人</b>
      <div>
        大人：
        年齡 20+
        <CustomInputNumber 
          min={1}
          max={4 - child}
          step={1}
          name={'adult'}
          value={adult}
          disabled={disabled}
          onChange={handleAldultCount}
          onBlur={e => {console.log('Blur', e.target.name, e.target.value)}}
        />
      </div>
      <div>
        小孩：
        <CustomInputNumber 
          min={0}
          max={4 - adult}
          step={1}
          name={'child'}
          value={child}
          disabled={disabled}
          onChange={handleChildChange}
          onBlur={e => {console.log('Blur', e.target.name, e.target.value)}}
        />
      </div>
    </div>
  )
}

export default QuadrupleRoom;
