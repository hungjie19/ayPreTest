import React, { useState } from 'react';
const style = {
  button: {
    width: '48px',
    height: '48px',
    fontSize: '16px',
    marginRight: '16px',
    border: '1px solid deepskyblue',
    background: 'white',
    color: 'deepskyblue',
    cursor: 'pointer',
  },
  buttonDisabled: {
    cursor: 'not-allowed',
    opacity: '0.4',
  },
  input: {
    width: '48px',
    height: '48px',
    border: '1px solid grey',
    marginRight: '16px',
    background: 'white',
    color: 'grey',
    textAlign: 'center',
  }
}
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
  const getStyle = sty => disabled ? {...sty, ...style.buttonDisabled} : sty;

  return (
    <div>
      <button style={getStyle(style.button)} onClick={handleSubtraction}>-</button>
      <input
        type="number"
        name={name}
        style={getStyle(style.input)}
        onChange={handleInputChange}
        value={value}
        step={step}
        disabled={disabled}
        onBlur={handleBlur}
      />
      <button style={getStyle(style.button)} onClick={handleAddition}>+</button>
    </div>
  );
}

export default CustomInputNumber;
