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
      <div className="app">
        <Nav />
        <div className="app__wrapper">
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
