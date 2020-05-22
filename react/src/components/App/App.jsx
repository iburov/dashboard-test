import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "./App.scss";
import Nav from "./../Nav/Nav.jsx";
import Schedule from "./../Schedule/Schedule.jsx";
import Staff from "./../Staff/Staff.jsx";
import PageNotFound from "./../PageNotFound/PageNotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="dashboard-app row">
        <Nav />
        <div className="dashboard-app__wrapper col-10">
          <Switch>
            <Redirect exact from="/" to="/schedule" />
            <Route path="/schedule" render={() => <Schedule />} />
            <Route path="/staff" render={() => <Staff />} />
            <Route render={() => <PageNotFound />} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
