import React from "react";
import Day from "../day/day";

export default function Month({month}) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-6 h-full">
      {month.map((row, index) => {
        return (
          <React.Fragment key={index}>
            {row.map((day, idx) => {
              return <Day day={day} key={idx} rowIdx={index} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
