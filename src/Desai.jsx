import React, { useState } from "react";

const Desai = () => {
  const [divs, setDivs] = useState([]);

  const addDiv = () => {
    setDivs([
      ...divs,
      <div key={divs.length}>
        Static Value
        <button onClick={() => removeDiv(divs.length)}>Remove</button>
      </div>,
    ]);
  };

  const removeDiv = (index) => {
    const updatedDivs = divs.filter((_, i) => i !== index);
    setDivs(updatedDivs);
  };

  return (
    <div>
      <button onClick={addDiv}>Add Div</button>
      {divs.map((div, index) => (
        <div key={index}>{div}</div>
      ))}
    </div>
  );
};

export default Desai;
