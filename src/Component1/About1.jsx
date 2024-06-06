import React from "react";

const About1 = () => {
  const events = [
    {
      id: 1,
      title: "Professional Development",
      date: "2024-06-15",
      img:
        "https://img.freepik.com/free-photo/group-cheerful-happy-students-sitting-lecture-hall-before-lesson_155003-12212.jpg?t=st=1717414478~exp=1717418078~hmac=29446fd307bc49f662ec9a3cc94d860608c4250d2f7646ddb5fda99fa97b7fba&w=826",
    },
    {
      id: 2,
      title: "Labor Day - No School",
      date: "2024-07-20",
      img:
        "https://img.freepik.com/free-photo/smiling-students-studying-together-table_23-2147850724.jpg?t=st=1717414518~exp=1717418118~hmac=a47d3d903a9e96ecadd7f4e6a2933f2fca08785713f630a2166581eead46eecf&w=826",
    },
    {
      id: 3,
      title: "1:15 pm Early Dismissal ",
      date: "2024-08-25",
      img:
        "https://img.freepik.com/free-photo/medium-shot-young-people-dancing-party_23-2150378043.jpg?t=st=1717414536~exp=1717418136~hmac=f22b11d8a8ef19b01d4596ec7462a471f48c3de34e9442334e0bc15a877bc720&w=826",
    },
    {
      id: 4,
      title: "Thanksgiving Recess",
      date: "2024-03-18",
      img:
        "https://img.freepik.com/free-photo/group-glamorous-asian-party-guests-leaning-handrail-looking-away_1098-17462.jpg?t=st=1717414558~exp=1717418158~hmac=0826de1674fb94c4537909170b210c63fe7de9632aa4f979bd8aeefe891f4466&w=826",
    },
    {
      id: 5,
      title: "Election Day - No School  - Staff Only",
      date: "2024-01-12",
      img:
        "https://img.freepik.com/premium-photo/rear-view-audience-conference-hall-seminar-meeting-which-come-before-start-time_41418-2880.jpg?w=826",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row py-4">
          <div className="d-flex justify-content-center">
          <h2 className="text-start  fw-semibold  upevent pb-4">
          <span className="blog border-bottom border-2  border-success">Upcoming </span> <span className="border-bottom border-2 border-success text-success"> Events</span>
        </h2>
          </div>
          <div className="col-md-6 noticeborder1 ">
            <div className="video-sec">
              <video
                className="img-fluid rounded"
                width="100%"
                height="auto"
                controls
                autoPlay
                muted
              >
                <source
                  src="https://www.aksharaaschool.edu.np/public/assets/aksharaa-space.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <h4 className="fw-bold blog pt-5">संस्कारयुक्त शिक्षा</h4>
              <p className="newp">
                <strong>"Sanskaryukta Siksha"</strong> is fundamental at our
                school.The School on its dynamic framework builds on and offers
                students a repertoire of ECAs made integral with the mainstream
                academic endeavors we engage students throughout. Some key ECAs
                that Aksharaa offers on school days.
              </p>
              <h2 className="fw-bold text-success text-uppercase">Mission</h2>
              <p>
                We use the LRPA. With the motto 'learning through fun', we make
                learning of core theories and values in the class fun filled and
                exciting. We believe in experiential learning. Through
                exploration, students are allowed to experience firsthand
                learning experiences. The classroom activities are not confined
                to the books
              </p>
              <h2 className="fw-bold text-success text-uppercase">Vision</h2>
              <p>
                Nurturing young learners to become lifelong learners globally
                competent and responsible citizens.
              </p>
            </div>
          </div>
          <div className="col-md-6">
          
            {events.map((event) => (
              <>
              

              <div
                key={event.id}
                className="event ps-5 py-2   border-0 d-flex flex-row justify-content-between align-items-center gap-0"
              >
              
                <div className="blog-img  ">
                  <img
                    src={event.img}
                    className="card-img-top"
                    alt={event.title}
                  />
                </div>{" "}
                <div className="card-body  ps-3 ">
                  <h5 className="card-title  mb-0 p-0">{event.title}</h5>
                  <p className="card-text">Date: {event.date}</p>
                </div>
              </div>
              </>
              
              
            ))}

            <h5 className="pt-4  pb-4 text-success">Upcoming Calender Dates</h5>
            <div className="d-flex flex-row">
              <ul className="list-unstyled  calender">
                <li>
                  8 Nov <strong>2023</strong>
                </li>
                <li>
                  12 Dec <strong>2023</strong>
                </li>
                {/* <li>
                19 Nov <strong>2023</strong>
              </li> */}
                <li>
                  29 Sep <strong>2023</strong>
                </li>
                <li>
                  8 Nov <strong>2023</strong>
                </li>
                <li>
                  11 Aug <strong>2023</strong>
                </li>
                <li>
                  12 Jan <strong>2023</strong>
                </li>
                <li>
                  29 JUl <strong>2023</strong>
                </li>
                <li>
                  16 Dec <strong>2023</strong>
                </li>
                <li>
                  12 JUl <strong>2023</strong>
                </li>
              </ul>
              <ul className="list-unstyled ps-5 calender">
                <li>Professional Development - Staff Only</li>
                <li>First Day of School - Students</li>
                <li>1:15 pm Early Dismissal - Professional</li>
                <li>2023 Labor Day - No School</li>
                <li>1:15 pm Early Dismissal- Professional</li>
                <li>indigenous Day - No School</li>
                <li>Election Day - No School - Professional Development</li>
                <li>11:30 am Early Dismissal for Parent/Teacher</li>
                <li>1:15 pm Early Dismissal - Professional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About1;
