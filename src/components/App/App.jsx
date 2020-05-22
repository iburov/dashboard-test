import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./../Nav/Nav.jsx";
import Schedule from "./../Schedule/Schedule.jsx";
import Staff from "./../Staff/Staff.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard-app row">
        <Nav />
        <div className="dashboard-app__wrapper col-10">
          <Route path="/schedule" render={() => <Schedule />} />
          <Route path="/staff" render={() => <Staff />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
