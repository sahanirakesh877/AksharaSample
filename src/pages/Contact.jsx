import React from "react";
import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto pt-5">
      <h1 className="text-center  fw-semibold   ">
          <span className="blog border-bottom border-2  border-success">Contact </span> <span className="border-bottom border-2 border-success text-success"> Us</span>
        </h1>
        <div className="row pt-4 ">
          <div className="col-md-5 contactpage py-4">
            <h4 className="text-center pb-4  text-light fw-semibold">
              Contact Information
            </h4>
            <ul className="list-unstyled px-4  text-light   d-flex justify-content-start align-items-start flex-column  gap-4">
              <li className="d-flex justify-content-start align-items-center">
                <div>
                  <FaLocationDot
                    size={28}
                    className="me-3 border contact-icon  rounded-pill p-1"
                  />
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
                  <FaPhoneAlt
                    size={28}
                    className="me-3 border contact-icon rounded-pill p-1"
                  />
                </div>
                <div>
                  <span>
                    <strong>Phone:</strong> +977-01-4993031/32/33
                  </span>
                </div>{" "}
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaEnvelope
                  size={28}
                  className="me-3 border contact-icon  rounded-pill p-1"
                />
                <span>
                  <strong>Email:</strong> example@example.com
                </span>
              </li>
              <li className="d-flex justify-content-start align-items-center">
                <FaGlobe
                  size={28}
                  className="me-3 border contact-icon  rounded-pill p-1"
                />
                <span>
                  <strong>Website:</strong> www.example.com
                </span>
              </li>
            </ul>
          </div>
          <div className="col-md-7 border border-danger py-4">
            <h4 className="text-center   fw-semibold   ">Get in Touch</h4>

            <form className="px-4">
              <div className="form-group pb-3">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control mt-1 bcolor"
                  id="name"
                  placeholder="Enter your Full name"
                />
              </div>
              <div className="d-flex justify-content-between pb-3   align-items-center ">
                <div className="form-group ">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control mt-1 bcolor"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="number"
                    className="form-control mt-1 bcolor"
                    id="phone"
                    placeholder="Enter phone"
                  />
                </div>
              </div>
              <div className="form-group pb-3">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control mt-1 bcolor "
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
      <div
        className="maps container py-4 mx-auto mt-3 mb-0 w-100"
        style={{ padding: 0, margin: 0 }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56528.98843456104!2d85.29982577525458!3d27.684485455816603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39eb1a3058f08937%3A0x5e58e8a5ed6fa73b!2sM9X9%2B5C5%20Aksharaa%20School%2C%20Kageshwori%20Manohara%2044600!3m2!1d27.6973403!2d85.3670331!5e0!3m2!1sen!2snp!4v1715844547576!5m2!1sen!2snp"
          width={600}
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mpasint"
        />
      </div>
    </>
  );
};

export default Contact;
