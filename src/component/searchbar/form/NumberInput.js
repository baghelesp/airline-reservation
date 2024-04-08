import React, { useState } from 'react';

function NumberInput() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div style={{padding:"5px", display:"flex"}}>
      <button style={{padding:"3px 5px 3px 5px", margin:"auto"}} onClick={decrement}>-</button>
      <input style={{width:"30px",border:"none", outline:"none", margin:"0px 10px 0px 25px"}} type="number" value={value} readOnly />
      <button style={{padding:"3px 5px 3px 5px", margin:"auto"}}onClick={increment}>+</button>
    </div>
  );
}

export default NumberInput;