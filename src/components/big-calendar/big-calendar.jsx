import React from "react";
import CalendarHeader from "../calendar-header/calendar-header";
import Day from "../day/day";
import Month from "../month/month";

export default function BigCalendar({ month }) {
  console.log(month);
  return (
    <div className="bg-white h-fit w-2/3">
      <CalendarHeader />
      <div className="flex-1 grid grid-cols-7 grid-rows-6 h-fit">
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
      {/* <Month month={month} /> */}
    </div>
  );
}
