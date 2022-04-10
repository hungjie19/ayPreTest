import React, { useState } from 'react';
import CustomInputNumber from '../components/CustomInputNumber.jsx';

const Demo = () => {
  const [count, setCount] = useState(0);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);
  const [step, setStep] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const handleChange = value => {
    setCount(value);
  }

  return (
    <div style={{margin: '0 auto', width: '200px'}}>
      <h1>Demo CustomInputNumber</h1>
      <CustomInputNumber
        min={min}
        max={max}
        step={step}
        name={'demo'}
        value={count}
        disabled={disabled}
        onChange={handleChange}
        onBlur={e => {console.log('Blur', e.target.name, e.target.value)}}
      />
      <br />
      <h4>Config:</h4>
      min: <input type="number" name="min" value={min} onChange={e => setMin(+e.target.value)} />
      <br />
      max: <input type="number" name="max" value={max} onChange={e => setMax(+e.target.value)} />
      <br />
      step: <input type="number" name="step" value={step} onChange={e => setStep(+e.target.value)} />
      <br />
      disabled: <input type="checkbox" name="disabled" defaultChecked={disabled} onChange={e => setDisabled(e.target.checked)} />
    </div>
  );
}

export default Demo;
