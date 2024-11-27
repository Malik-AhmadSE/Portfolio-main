import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedback,
  Hero,
  Navbar,
  Tech,
  Works,
  ProgressScroll,
  Hobby,
} from "./Components/index.js";

import Map from "./Components/Map.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <ProgressScroll />
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedback />
        {/* <Hobby/> */}
        <Contact />
        <Map />
      </div>
    </BrowserRouter>
  );
}

export default App;
