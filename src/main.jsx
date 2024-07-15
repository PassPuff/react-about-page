import React from "react";
import ReactDOM from "react-dom/client";
import BannerAbout from "./components/Banner/BannerAbout.jsx";
import "./assets/scss/normalize.scss";
import '/src/assets/scss/index.scss'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BannerAbout />
  </React.StrictMode>,
);
