import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";
import {  FaWhatsapp } from "react-icons/fa";



const Banner = () => {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide position-relative border border-black "
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
      <div className="position-absolute z-3 bannerIcon ">
      <div className="d-flex flex-column bannericon ">
      <div className="phoneIcon" data-text="+977-01-4993031/32/33">
      <MdLocalPhone />
      </div>
      <div className="phoneIcon" data-text="akshara123@gmail.com">
      <MdOutlineAttachEmail />
      </div>
      <div className="phoneIcon " data-text="977-01-4993031">
      <FaWhatsapp />
      </div>
     
      </div>
      
      </div>



        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              // src="/aksahara1.jpg"
              src="/bg.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption position-absolute  d-flex justify-content-center align-items-center text-center">
              <div>
                <h3 className="banner-head">
                  Empowering Students for Success
                </h3>
                <div className="bannerbtn">

              
                <button className="btn btn-danger px-3  rounded-pill">
                  Read More
                </button>
                </div>
                {/* <p className="banner-p">
                  Providing Exceptional Education and Guidance{" "}
                </p> */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/bg4.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption position-absolute  d-flex justify-content-center align-items-center text-center">
              {/* <div>
                <h1 className="display-4 fw-bold">
                  Cultivating Excellence in Learning
                </h1>
                <p className="lead">
                  Your Path to Academic Success Begins Here
                </p>
              </div> */}
               <div>
                <h1 className="banner-head">
                  Cultivating Excellence in Learning
                </h1>

                <div className="bannerbtn">
                <button className="btn btn-danger px-3 rounded-pill">
                  Read More
                </button>
                </div>
                {/* <p className="banner-p">
                  Your Path to Academic Success Begins Here
                </p> */}
              </div> 
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/bg2.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption position-absolute  d-flex justify-content-center align-items-center text-center">
              {/* <div>
                <h1 className="display-4 fw-bold">
                  Building a Foundation for Excellence
                </h1>
                <p className="lead">Where Knowledge and Innovation Thrive</p>
              </div> */}
              <div>
                <h1 className="banner-head">
                  Building a Foundation for Excellence
                </h1>
                {/* <p className="banner-p">Where Knowledge and Innovation Thrive</p> */}
                <div className="bannerbtn">

               
                <button className="btn btn-danger px-3 rounded-pill">
                  Read More
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
