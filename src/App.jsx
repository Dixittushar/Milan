import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { BacktoTop } from "./components/shared";
import "./styles/App.css";
import "./styles/Globals.scss";
import routesConfig from "./utils/routesConfig.jsx";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              exact
              path={route?.path}
              element={route?.element}
            />
          ))}
        </Routes>
      </Router>
      <BacktoTop />
    </div>
  );
};

export default App;
