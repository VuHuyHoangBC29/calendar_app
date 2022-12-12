import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/global-context";
import { getMonth } from "../../util";

export default function SmallCalendar() {
  const { monthIndex, setSmallCalendarMonth, selectedDay, setSelectedDay } =
    useContext(GlobalContext);

  const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());

  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonthIndex(monthIndex);
  }, [monthIndex]);

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  const handlePrevMonth = () => {
    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const getDayClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const selDay = selectedDay && selectedDay.format(format);

    if (currDay === nowDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (selDay === currDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else {
      return "";
    }

    // return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    //   ? "bg-blue-500 rounded-full text-white"
    //   : "";
  };

  return (
    <div className="mt-9 p-10 border bg-white">
      <header className="flex justify-between">
        {/* <div> */}
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-[#5684AE] mx-2">
            chevron_left
          </span>
        </button>

        <p className="text-[#0F4C81] font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>

        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-[#5684AE] mx-2">
            chevron_right
          </span>
        </button>
        {/* </div> */}
      </header>

      <div className="grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, index) => {
          return (
            <span key={index} className="text-sm py-1 text-center">
              {day.format("dd").charAt(0)}
            </span>
          );
        })}
        {currentMonth.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.map((day, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSmallCalendarMonth(currentMonthIndex);
                      setSelectedDay(day);
                    }}
                    className={`py-1 w-full ${getDayClass(day)}`}
                  >
                    <span className="text-sm">{day.format("D")}</span>
                  </button>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
