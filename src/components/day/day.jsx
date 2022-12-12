import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/global-context";

export default function Day({ day, rowIdx }) {
  // console.log(day.format("DD-MM-YY"));

  const [dayEvents, setDayEvents] = useState([]);

  const {
    setSelectedDay,
    setShowEventModal,
    savedEvents,
    selectedEvent,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (ele) => dayjs(ele.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  };

  return (
    <div
      onClick={() => {
        setSelectedDay(day);
        setShowEventModal(true);
      }}
      className="border border-gray-200 flex flex-col overflow-hidden cursor-pointer hover:bg-[#e3f5ec]"
      style={{ height: "100px" }}
    >
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 font-bold">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        // onClick={() => {
        //   setSelectedDay(day);
        //   setShowEventModal(true);
        // }}
      >
        {dayEvents.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={`p-1 mr-3 text-white text-sm rounded mb-1 truncate`}
              style={{ background: ele.label }}
              onClick={() => {
                setSelectedEvent(ele);
              }}
            >
              {ele.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
