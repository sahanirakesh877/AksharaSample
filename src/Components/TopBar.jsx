import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaMessage } from "react-icons/fa6";

const TopBar = () => {
  return (
    <>
  
      <div class="container-fluid d-none d-lg-block  ">
      <div class="row align-items-center py-1 px-xl-5">
        <div class="col-lg-3">
          <a href="" class="text-decoration-none">
            <img src="./aksara.png" alt="" />
          </a>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center">
       
            <FaLocationDot  className="icon fs-3 me-3"/>
            <div class="text-left">
              <h6 class="font-weight-semi-bold mb-0 icon">Our Office</h6>
              <small>
                Kandaghari,Kageshwori Manohara 9,
             
              </small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center">
           <FaMessage  className="icon fs-3 me-3"/>
            <div class="text-left">
              <h6 class="font-weight-semi-bold mb-0 icon">Email Us</h6>
              <small>info@aksharaaschool.edu.np</small>
            </div>
          </div>
        </div>
        <div class="col-lg-3 text-right">
          <div class="d-inline-flex align-items-center">
           <FaPhoneAlt  className="icon fs-3 me-3"/>
            <div class="text-left">
              <h6 class="font-weight-semi-bold mb-0 icon">Call Us</h6>
              <small> +977-01-4993031/32/33 </small>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TopBar;
