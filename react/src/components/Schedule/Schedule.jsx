import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./Schedule.scss";

function Schedule() {
  return (
    <div className="app-schedule">
      <Calendar />
    </div>
  );
}

export default Schedule;
