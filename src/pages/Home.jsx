import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "./About";
import Footer from "../Components/Footer";
import ScrollComponent from "../Components/ScrollComponent";

// import popoupImg from "/notice.jpg";
import Contact from "./Contact";
// import Lrpa from "../Components/Lrpa";
import Testimonial from "../Components/Testimonial";
import Blog from "../Components/Blog";
import Community from "../Components/Community";
import Learning from "../Components/Learning";
import Learning1 from "../Components/Learning1";
import Calender from "../Components/Calender";
import Marist from "../Components/Marist";
import Gallery from "../Component1/Gallery";
import Creatives from "../Component1/Creatives";
import New from "../Component1/New";
import About1 from "../Component1/About1";

const Home = () => {
  const [popoup, setPopup] = useState(true);

  return (
    <>
      {popoup && (
        <div id="popoupContainer">
          <div className="imageContainer">
            {/* <img src={popoupImg} alt="" className="popupimg" /> */}
            <img
              src="https://aksharaaschool.edu.np/storage/news-events/March2024/xRqFMcDy8P7lYMTjGLjkS.jpg.pagespeed.ic.eYuKu8OBu4.webp"
              alt=""
              className="popupimg"
            />

            <button className="btns" onClick={() => setPopup(false)}>
              X
            </button>
          </div>
        </div>
      )}
      <TopBar />
      <Header />
      <Banner />
      <New/>
      <About1/>
      <About />
      <Community />
      <Learning1 />
      <Learning />
      {/* <Lrpa/> */}
      <Blog />
      <Marist />
      <Calender />
      <Testimonial />
      <Contact />
      <ScrollComponent />
      <Gallery/>
      <Creatives/>
      <Footer />
    </>
  );
};

export default Home;
