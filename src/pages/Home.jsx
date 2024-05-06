import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "./About";
import Footer from "../Components/Footer";
import ScrollComponent from "../Components/ScrollComponent";

import popoupImg from "/notice.jpg";
import Contact from "./Contact";
import Lrpa from "../Components/Lrpa";

const Home = () => {
  const [popoup, setPopup] = useState(true);

  return (
    <>
      {popoup && (
        <div id="popoupContainer">
          <div className="imageContainer">
            <img src={popoupImg} alt="" className="popupimg" />

            <button className="btns" onClick={() => setPopup(false)}>
              X
            </button>
          </div>
        </div>
      )}
      <TopBar />
      <Header />
      <Banner />
      <About />
      <Lrpa/>
      <Contact/>
      <ScrollComponent />
      <Footer />
    </>
  );
};

export default Home;
