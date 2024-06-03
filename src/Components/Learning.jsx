import React, { useState, useEffect } from "react";

const Learning = () => {
  const [visibleSection, setVisibleSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Continuous Assessment",
      content: "Appropriate assessment of each task is done to monitor a child's skill of manipulation of words, materials, ideas, concepts. Such assessments help to notice whether the child has acquired language, mathematical and social skills or not. This is done on a day-to-day basis through the use of CAS book.",
      img: "/observation.png",
    },
    {
      id: 2,
      title: "Active Observation and Recording",
      content: "Through the intra and outside classroom activities, students' knowledge level, learning skills, extent of participation, research work, interest, psychomotor skills, etc are observed and recorded using specific criteria. Such observation helps to monitor the overall development of a child.",
      img: "/akashara3.jpg",
    },
    {
      id: 3,
      title: "Assignment",
      content: "Age appropriate specific assignments are assigned in each chapter. Written assignments, Project works and Research work are used as records on the development of specific skills related to instructional objectives or the attitude expressed or demonstrated by a student towards learning.",
      img: "/akashara2.jpg",
    },
    {
      id: 4,
      title: "Time Bound Written Assessment",
      content: "At the end of each term, time bound written test is given in each subject. This will help the student to know their writing speed and be familiar with our traditional exam system.",
      img: "/TimeBounded.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let sectionToShow = null;

      sections.forEach((section) => {
        const element = document.getElementById(`section-${section.id}`);
        const elementPosition = element.offsetTop + element.clientHeight / 2;

        if (scrollPosition >= elementPosition) {
          sectionToShow = section.id;
        }
      });

      setVisibleSection(sectionToShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <>
  
      <div className="container mx-auto pb-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-3">
            <div className="">
              <div className="progress-container">
                {sections.map((section) => (
                  <div key={section.id} className="progress-section">
                    <div
                      className={`progress-bar ${
                        visibleSection === section.id ? "active" : ""
                      }`}
                    ></div>
                    <p
                      className={`learning text-uppercase ${
                        visibleSection === section.id ? "active-text" : ""
                      }`}
                      id={`section-${section.id}`}
                    >
                      {section.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`content-section ${
                  visibleSection === section.id ? "visible" : "hidden"
                }`}
              >
                <div className="image-container">
                  <img
                    src={section.img}
                    alt={section.title}
                    className="img-fluid content-image"
                  />
                  <div className="image-overlay ">
                    <h3 className="text-center py-2 fs-5">{section.title}</h3>
                    <p className="learning-text">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
