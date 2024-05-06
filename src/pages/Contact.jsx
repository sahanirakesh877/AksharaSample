import React from "react";
import { FaEnvelope, FaGlobe, FaIntercom, FaPhoneAlt } from "react-icons/fa";
import {
  FaEarthAsia,
  FaLocationDot,
  FaMessage,
  FaWebflow,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="container mx-auto py-5">
      <div className="row py-4 ">
        <div className="col-md-5 bg-success py-4">
          <h4 className="text-center pb-4  text-light fw-semibold">
            Contact Information
          </h4>
          <ul className="list-unstyled px-4  text-light   d-flex justify-content-start align-items-start flex-column  gap-4">
            <li className="d-flex justify-content-start align-items-center">
              <div>
                <FaLocationDot size={28} className="me-3 border rounded-pill p-1" />
              </div>
              <div>
                <span>
                  <strong>Address:</strong> Kandaghari, Kageshwori Manohara 9,
                  Kathmandu, Nepal
                </span>
              </div>{" "}
            </li>
            <li className="d-flex justify-content-start align-items-center">
              <div>
                <FaPhoneAlt size={28} className="me-3 border rounded-pill p-1" />
              </div>
              <div>
                <span>
                  <strong>Phone:</strong> +977-01-4993031/32/33
                </span>
              </div>{" "}
            </li>
            <li className="d-flex justify-content-start align-items-center">
              <FaEnvelope size={28} className="me-3 border rounded-pill p-1" />
              <span>
                <strong>Email:</strong> example@example.com
              </span>
            </li>
            <li className="d-flex justify-content-start align-items-center">
              <FaGlobe size={28} className="me-3 border rounded-pill p-1" />
              <span>
                <strong>Website:</strong> www.example.com
              </span>
            </li>
          </ul>
        </div>
        <div className="col-md-7 border py-4">
          <h4 className="text-center   fw-semibold">Get in Touch</h4>
          <form className="px-4">
            <div className="form-group pb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control mt-1 border-success"
                id="name"
                placeholder="Enter your Full name"
              />
            </div>
            <div className="d-flex justify-content-between pb-3   align-items-center ">
              <div className="form-group ">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control mt-1 border-success"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group ">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  className="form-control mt-1 border-success"
                  id="phone"
                  placeholder="Enter phone"
                />
              </div>
            </div>
            <div className="form-group pb-3">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control mt-1 border-success "
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              className="nav-link  py-2  inquirybtnlist px-5 inquirybtn text-light"
              aria-disabled="true"
            >
              Get Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
