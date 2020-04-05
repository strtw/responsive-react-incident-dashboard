import React from "react";
import "./global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Dashboard filter={"All Incidents"} />}
          />
          <Route path="/open" component={() => <Dashboard filter={"Open"} />} />
          <Route
            path="/in-progress"
            component={() => <Dashboard filter={"In Progress"} />}
          />
          <Route
            path="/closed"
            component={() => <Dashboard filter={"Closed"} />}
          />
          <Route
            path="/resolved"
            component={() => <Dashboard filter={"Resolved"} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
