import React from "react";

const Header = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg   position-sticky    ">
        <div className="container  alex mx-auto">
          <a className="navbar-brand d-md-none d-sm-block logoicon" href="#">
            <img src="/aksara.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2  py-2 text-light">


              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </a>
                <ul className="dropdown-menu border-warning   mt-3 rounded-0">
                  <li>
                    <a className="dropdown-item " href="#">
                      Kindergarten
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Elementary School
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      High School
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </a>
                <ul className="dropdown-menu mt-3 rounded-0 border-warning">
                  <li>
                    <a className="dropdown-item" href="#">
                      Admission Policty
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Admission Procedure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enquiry Form
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown  ">
                <a
                  className="nav-link text-light dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  News & Activities
                </a>
                <ul className="dropdown-menu mt-3 rounded-0 border-warning">
                  <li className=" ">
                    <a className="dropdown-item " href="#">
                      Admission Policty
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Admission Procedure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Enquiry Form
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link  text-light" aria-disabled="true">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" aria-disabled="true">
                 Carrer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  text-light" aria-disabled="true">
                 Download
                </a>
              </li>
              <li className="nav-item  inquirybtnlist">
                <button className="nav-link  px-5 inquirybtn text-light" aria-disabled="true">
                Get Inquiry
                </button>
              </li>
              
              

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
