import React, { useState } from 'react';

const CustomInputNumber = ({
  min = 0,
  max = 0,
  step = 1,
  name = '',
  value = 0,
  disabled = false,
  onChange = () => {},
  onBlur = () => {},
}) => {
  const handleAddition = e => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    handleChange(value + step);
  }
  const handleSubtraction = e => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    handleChange(value - step);
  }
  const handleInputChange = e => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    const { value } =  e.target;
    handleChange(value);
  }
  const handleChange = (num) => {
    if (num <= max && num >= min) {
      onChange(num);
    } else if (num < min) {
      onChange(min);
    } else if (num > max) {
      onChange(max);
    }
  }
  const handleBlur = (e) => {
    onBlur(e);
  }
  const getDisabledClass = () => disabled ? 'disabled' : '';

  return (
    <div>
      <button className={`ay-button ${getDisabledClass()}`} onClick={handleSubtraction}>-</button>
      <input
        type="number"
        name={name}
        className={`ay-number-input ${getDisabledClass()}`}
        onChange={handleInputChange}
        value={value}
        step={step}
        disabled={disabled}
        onBlur={handleBlur}
      />
      <button className={`ay-button ${getDisabledClass()}`} onClick={handleAddition}>+</button>
    </div>
  );
}

export default CustomInputNumber;
