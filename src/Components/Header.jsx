import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY >113) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg   position-sticky">
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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2  py-1 text-white">
            
            <li className="nav-item pe-4">
            <img src="/white-logo.png"  alt="White Logo"
                  className="logo-hidden" />
              
            </li>

              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About Us
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
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
                  className="nav-link text-white dropdown-toggle"
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
                  className="nav-link text-white dropdown-toggle"
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
                <a className="nav-link  text-white" aria-disabled="true">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  text-white" aria-disabled="true">
                  Career
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  text-white" aria-disabled="true">
                  Download
                </a>
              </li>
              <li className="nav-item  ms-5 headbtn ">
                <button className="nav-link    text-white rounded-pill" aria-disabled="true">
                  Get Inquiry
                </button>
              </li>

              {/* <li className="nav-item  inquirybtnlist ">
                <button
                  className="nav-link  px-5 inquirybtn  rounded-pill text-white"
                  aria-disabled="true"
                >
                  Get Inquiry
                </button>
              </li> */}
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
