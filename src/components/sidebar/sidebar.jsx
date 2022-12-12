import React from "react";
import CreateEventButton from "../../modules/create-event-button";
import DayEvent from "../day-event/day-event";
import SmallCalendar from "../small-calendar/small-calendar";

export default function Sidebar() {
  return (
    <aside className="w-1/3 mr-3 h-full">
      <CreateEventButton />
      <SmallCalendar />
      <DayEvent />
    </aside>
  );
}
