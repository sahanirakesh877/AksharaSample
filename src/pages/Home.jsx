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

const Home = () => {
  const [popoup, setPopup] = useState(true);

  return (
    <>
      {popoup && (
        <div id="popoupContainer">
          <div className="imageContainer">
            {/* <img src={popoupImg} alt="" className="popupimg" /> */}
             <img src='https://aksharaaschool.edu.np/storage/news-events/March2024/xRqFMcDy8P7lYMTjGLjkS.jpg.pagespeed.ic.eYuKu8OBu4.webp' alt="" className="popupimg" />

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
      <Learning1/>
      <Learning/>
      <Community/>
      {/* <Lrpa/> */}
      <Blog/>
      <Contact/>
     <Calender/>
      <Testimonial/>
      <ScrollComponent />
      <Footer />
    </>
  );
};

export default Home;
