import React from "react";
import ReactDOM from "react-dom/client";

import "./assets/global/normalize.scss";
import '/src/assets/global/index.scss'

import Banner from "./components/BannerSection/Banner.jsx";
import ChuteSection from "./components/ChuteSection/Chute.jsx";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Banner />
    <ChuteSection />
  </React.StrictMode>
);
