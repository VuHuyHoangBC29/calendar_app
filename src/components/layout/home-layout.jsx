import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/global-context";
import { getMonth } from "../../util";
import BigCalendar from "../big-calendar/big-calendar";
import EventModal from "../event-modal/event-modal";
import Sidebar from "../sidebar/sidebar";

import "./home-layout.scss";

export default function HomeLayout() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div id="homeLayout" className="h-screen">
      {showEventModal && <EventModal />}

      <div className="homeLayoutBG"></div>
      <div className="container mx-auto pt-2 flex flex-1 h-full homeLayoutContent">
        <Sidebar />
        <BigCalendar month={currentMonth} />
      </div>
    </div>
  );
}
