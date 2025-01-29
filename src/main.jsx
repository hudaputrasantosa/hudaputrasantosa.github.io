import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/index.jsx";
// check error GA4 kater
// import ReactGA from "react-ga4";

// ReactGA.initialize(import.meta.env.VITE_REACT_GA4_MEASUREMENT_ID);
// ReactGA.send({
//   hitType: "pageview",
//   page: window.location.pathname,
//   title: "Huda Pages",
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
