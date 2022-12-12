import React, { useContext, useState } from "react";
import GlobalContext from "../../context/global-context";

export default function EventModal() {
  const { setShowEventModal, selectedDay, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const labelledClasses = ["#b91c1c", "#fbbf24", "#34d399", "#4c1d95"];

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");

  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );

  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelledClasses.find((ele) => ele === selectedEvent.label)
      : labelledClasses[0]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: selectedDay.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };

  return (
    <div
      className="h-screen w-full fixed left-0 top-0 flex justify-center items-center"
      style={{ zIndex: 2 }}
    >
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                className="material-icons-outlined text-gray-400 cursor: cursor-pointer"
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                delete
              </span>
            )}

            <span
              className="material-icons-outlined text-gray-400 cursor: cursor-pointer"
              onClick={() => {
                setShowEventModal(false);
              }}
            >
              close
            </span>
          </div>
        </header>

        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>

            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400 cursor: cursor-default">
              schedule
            </span>
            <p>{selectedDay.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400 cursor-default">
              segment
            </span>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400 cursor-default">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelledClasses.map((ele, idx) => {
                return (
                  <span
                    key={idx}
                    style={{ background: ele }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                    onClick={() => {
                      setSelectedLabel(ele);
                    }}
                  >
                    {selectedLabel === ele && (
                      <span className="material-icons-outlined text-white text-sm">
                        check
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
