import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import CalendarHeader from "./components/calendar-header/calendar-header";
import Month from "./components/big-calendar/big-calendar";
import Sidebar from "./components/sidebar/sidebar";
import { getMonth } from "./util";
import GlobalContext from "./context/global-context";
import EventModal from "./components/event-modal/event-modal";
import HomeLayout from "./components/layout/home-layout";

function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  // console.log(currentMonth);

  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    // <React.Fragment>
    //   {showEventModal && <EventModal />}
    //   <div className="h-screen flex flex-col">
    //     <CalendarHeader />
    //     <div className="flex flex-1 h-full">
    //       <Sidebar />
    //       <Month month={currentMonth} />
    //     </div>
    //   </div>
    //   <HomeLayout />
    // </React.Fragment>
    <HomeLayout />
  );
}

export default App;
