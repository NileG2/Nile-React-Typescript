import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavigationBar } from "./components/navbar/Navbar"
import  Footer  from "./components/footer/Footer"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
    </Router>
    <Router>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
