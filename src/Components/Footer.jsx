import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot, FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-body-secondary ">
        <div className="container mx-auto py-5 ">
          <div className="row d-flex justify-content-center  align-items-center  ">
            <div className="col-md-4 ">
              <h3 className="fw-semibold  ">Contact Info</h3>
              <ul className="d-flex flex-column ">
                <li className="d-flex justify-content-center  align-items-center  fw-medium ">
                  <FaLocationDot className="icon fs-5 me-4 " /> Kandaghari,
                  Kageshwori Manohara 9, Kathmandu, Nepal
                </li>
                <li className="  fw-medium">
                  {" "}
                  <FaPhoneAlt className="icon fs-5  me-4 " />{" "}
                  +977-01-4993031/32/33{" "}
                </li>
                <li className="fw-medium">
                  <FaMessage className="icon fs-5  me-4   " />
                  info@aksharaaschool.edu.np
                </li>
              </ul>

           <div>
           <ul className="d-flex justify-content-start gap-4 fs-5  align-items-center">
                <li className="px-1 bg-success text-white"><FaFacebook/></li>
                <li className="px-1 bg-success text-white"> <FaInstagram/></li>
                <li className="px-1 bg-success text-white"> <FaWhatsapp/></li>
                <li className="px-1 bg-success text-white"><FaLinkedin/></li>
              </ul>
           </div>
            </div>

            <div className="col-md-4">
              <h3 className="fw-semibold mb-md-4 ">Usefull Links</h3>
              <ul>
                <li className="fw-medium  ">
                  <a href="" className="text-decoration-none   text-dark">
                    {" "}
                    <AiOutlineRight className="me-1" />
                    Home
                  </a>
                </li>
                <li className="fw-medium  ">
                  <a href="" className="text-decoration-none   text-dark">
                    {" "}
                    <AiOutlineRight className="me-1" />
                    About
                  </a>
                </li>
                <li className="fw-medium  ">
                  <a href="" className="text-decoration-none   text-dark">
                    {" "}
                    <AiOutlineRight className="me-1" />
                    Admission
                  </a>
                </li>
                <li className="fw-medium  ">
                  <a href="" className="text-decoration-none   text-dark">
                    {" "}
                    <AiOutlineRight className="me-1" />
                    Carrer
                  </a>
                </li>
                <li className="fw-medium  ">
                  <a href="" className="text-decoration-none   text-dark">
                    {" "}
                    <AiOutlineRight className="me-1" />
                    Inquiry
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <img src="/aksara.png" alt="" />
              <p>
                We follow a unique module called LRPA. With the motto 'learning
                through fun', we make learning of core theories and values in
                the class fun filled and exciting.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-success mb-0">
          <div className="d-flex justify-content-between  align-items-center  py-0  pt-2  container mx-auto ">
            <h6 className="py-2 text-light">copyright &copy; Akshara School</h6>
            <h6 className="py-2 text-light">Made by Navata Tech</h6>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
