import React from "react";

const Marist = () => {
  const marist = [
    {
      id: 1,
      title: "Excellence in Education",
      description:
        "Marist achieves its ideal of excellence in undergraduate, graduate, and professional education by actively engaging each student through exemplary teaching and distinctive learning opportunities.",
      img:
        "/marist1.png",
    },
    {
      id: 2,
      title: "A Sense of Community",
      description:
        "Seeking to create relationships that will last a lifetime, we nurture the well-being and development of all our community members and cultivate their bonds with the College and each other.",
      img:
        "/marist2.png",
    },
    {
      id: 3,
      title: "Commitment to Service",
      description:
        "The Marist ideal of service is predicated on our belief in the dignity and value of every human being. The College supports programs to meet a wide variety of community needs and to offer broader access to education.",
      img:
        "/marist4.png",
    },
  ];
  return (
    <>
    
      <div className="container ">
      <h2 className="pt-5 fw-bold   "><span className="ourvalues">Our values in action</span></h2>
        <div className="row py-5">
          {marist.map((blog) => (
            <div className="col-md-4 borders  ps-4" key={blog.id}>
           <div className="maristicon">
           <img src={blog.img} alt="" />
           </div>
              <h1 className="marist-title">{blog.title}</h1>
              <p>{blog.description}</p>
              <a href="/" className="readmore btncolor">Read More </a>
            </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Marist;
