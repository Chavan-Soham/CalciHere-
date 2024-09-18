import React from "react";

export function Numbers({ number, handleClick}) {
  return (
    <div>
      <button onClick={()=> handleClick(number)}>{number}</button>
    </div>
  );
}
