import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clientData from "../Data/TestimonialData";

const Testimonial = () => {
  // For arrow design purpose
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden   testimonial">
        <div className="container  mx-auto pb-5">
          <div className=" py-5">
            <h1 className=" text-center client  font-semibold pb-3">
              What Parents{" "}
              <span className="text-white hover-border-b">Says</span>
            </h1>
         
          </div>

          <Slider {...settings} className="pb-5">
            {clientData.map((a, id) => (
              <div
                key={id}
                className=" d-flex justify-content-between    border border-black  align-items-center "
              >
                <div className="p-3 w-full ">
                  <div className="h-full">
                    <p className="leading-relaxed review mb-6">
                      {a.para.substring(0, 250)}....
                    </p>
                    <div className="d-flex flex-column  justify-content-center  align-items-center ">
                    <div className="reviewsimg">
                    <img src="https://cdn2.iconfinder.com/data/icons/review-and-feedback-1/512/man_review-512.png" alt="" />
                 
                    </div>
                    <span className="  font-monospace  fs-5">
                      {a.name}
                    </span>
                    </div>
                   
                  
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
