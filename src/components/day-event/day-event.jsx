import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../../context/global-context";

import "./day-event.scss";

export default function DayEvent() {
  const { selectedDay, setSelectedDay, savedEvents } =
    useContext(GlobalContext);

  console.log(selectedDay.format("DD"));

  const dayEvent = savedEvents.filter(
    (ele) =>
      dayjs(ele.day).format("DD-MM-YY") === selectedDay.format("DD-MM-YY")
  );

  console.log(dayEvent);

  return (
    <div className="border pt-10 pb-10 px-5 bg-white">
      <h1 className="font-extrabold text-2xl text-[#0F4C81]">
        Upcoming Events
      </h1>
      {selectedDay.format("DD-MM-YYYY") === dayjs().format("DD-MM-YYYY") ? (
        <p className="mt-3 mb-3 text-gray-500 font-extrabold">
          Today, {selectedDay.format("DD MMM")}
        </p>
      ) : (
        <p className="mt-3 mb-3">{selectedDay.format("DD/MMM/YYYY")}</p>
      )}

      {dayEvent.length === 0 ? (
        <p>No event has been scheduled.</p>
      ) : (
        <div>
          {dayEvent.map((ele, idx) => {
            return (
              <div
                key={idx}
                className={`dayEvent mt-3 mb-3 rounded-xl px-5 py-3 text-white after:rounded-l-xl`}
                style={{
                  background: ele.label,
                  // border: ele.label,
                  // borderWidth: "5px",
                  // borderStyle: "solid",
                }}
              >
                {/* <div className="dayEventBg">

              </div> */}
                <h3 className="font-bold">{ele.title}</h3>
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
      )}
      {/* <div>
        {dayEvent.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={`mt-3 mb-3 rounded-lg border px-4 py-3 text-white`}
              style={{ background: ele.label }}
            >
              <h3 className="font-bold">{ele.title}</h3>
              <p>{ele.description}</p>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
