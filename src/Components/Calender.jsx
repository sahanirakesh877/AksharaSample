import React from "react";

const Calender = () => {
  const blogs = [
   
    {
      id: 2,
      title: "Science Fair Highlights",
      description: "Our annual science fair was a huge success, with students showcasing innovative projects and experiments. Check out the highlights and see which projects won awards!",
      img:
        "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73049.jpg?w=826",
    },
    {
      id: 3,
      title: "Art Exhibition",
      description: "The art exhibition displayed a diverse range of creative works by our talented students. Take a virtual tour of the exhibition and admire their artistic expressions.",
      img:
        "https://img.freepik.com/premium-photo/team-creative-business-people_186382-6344.jpg?w=826",
    },
  ];

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
    <div className="container py-5">
      <div className="row">
        {/* Left side content: Blogs */}
        <div className="col-md-6">
        <h3 className="text-start text-success mb-4 fw-semibold "><span className='blog'>Recent</span>  Activities</h3>
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-4 card shadow-sm rounded-0">
              <div className="row no-gutters d-flex flex-column ">
                <div className="col-md-12 blog-right  ">
                  <img
                    src={blog.img}
                    className="card-img rounded-0"
                    alt={blog.title}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-12">
                  <div className="card-body">
                    <h5 className="text-success fw-semibold">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side content: Upcoming Events */}
        <div className="col-md-6 ">
        <h3 className="text-start mb-4 fw-semibold  text-success"><span className='blog'>Upcoming </span> Events</h3>
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-body-tertiary card p-0  border-0 d-flex flex-row justify-content-between align-items-center gap-0"
            >
              <div className="blog-img  mb-3 ">
                <img
                  src={event.img}
                  className="card-img-top"
                  alt={event.title}
                />
              </div>{" "}
              <div className="card-body  ">
                <h5 className="card-title  mb-0 p-0">{event.title}</h5>
                <p className="card-text">Date: {event.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
