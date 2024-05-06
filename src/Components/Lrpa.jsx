import React from "react";

const Lrpa = () => {
  return (
    <>
      <div className="container py-5">
        <h2 className="text-center fw-semibold">
          Learn Through <span className="aboutheade">LRPA</span>
        </h2>
        <p className="philosphy pb-4">
          We follow a unique model called LRPA. With the motto 'learning through
          fun', we make learning of core theories and values in the class fun
          filled and exciting. We believe in experiential learning. Through
          exploration, students are allowed to experience firsthand learning
          experiences. The classroom activities are not confined to the books.
          Through active participation, children learn to think critically over
          any situation, analyze rationally and draw logical conclusion. All
          classroom activities are supported by modern classroom technology and
          adequate resources. Students are allowed to use a wide range of
          electronic gadgets like computers, laptops, television and projectors
          to reinforce their subjective knowledge. Students carry out several
          project works in each subject, use various audio visual and print
          media, and use ample interaction with concerned seniors to strengthen
          the learnt theory. Ample educational field trips, national and
          international tours, talk shows are thus included as essentials in our
          curriculum. Through experiments, problem solving, model preparation,
          audio visual presentation, drama, role play, tutorial classes, virtual
          learning group works, conferences, they put the learnt concepts into
          practice and finally apply them or seek their application in real life
          situations.
        </p>
        <div className="row d-flex justify-content-between align-items-center pt-5 ">

          <div className="col-md-6  pb-5">
            <div className="d-flex align-items-center p-2">
              <div className="lrpaimg   ">
                <img
                  src="/ca.png"
                  alt=""
                  className="object-fit-cover  "
                  style={{ width: "200px", height: "190px" }}
                />
              </div>
              <div>
                <h5 className="text-center fw-medium feature  with-line">Continuous Assessment</h5>
                <p className=" philosphy w-100 ps-2 lineheight pt-2 ">
                  Appropriate assessment of each task is done to monitor a child's
                  skill of manipulation of words, materials, ideas, concepts. Such
                  assessments help to notice whether the child has acquired
                  language, mathematical and social skills or not. This is done on
                  a day-to-day basis through the use of CAS book.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-5">
            <div className="d-flex align-items-center p-2">
              <div className="lrpaimg   ">
                <img
                  src="/observation.png"
                  alt=""
                  className="rounded-circle object-fit-cover "
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div>
                <h5 className="text-center fw-medium feature with-line">Active Observation and Recording</h5>
               
                <p className=" philosphy w-100 ps-2 lineheight  pt-2">
                Through the intra and outside classroom activities, students' knowledge level, learning skills, extent of participation, research work, interest, psychomotor skills, etc are observed and recorded using specific criteria. Such observation helps to monitor the overall development of a child.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="d-flex align-items-center p-2">
              <div className="lrpaimg   ">
                <img
                  src="/assignment.png"
                  alt=""
                  className="rounded-circle object-fit-cover "
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div>
                <h5 className="text-center fw-medium feature with-line">Assignment</h5>
                <p className=" philosphy w-100 ps-2 lineheight pt-2">
                Age appropriate specific assignments are assigned in each chapter. Written assignments, Project works and Research work are used as records on the development of specific skills related to instructional objectives or the attitude expressed or demonstrated by a student towards learning.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="d-flex align-items-center p-2">
              <div className="lrpaimg   ">
                <img
                  src="/TimeBounded.png"
                  alt=""
                  className="object-fit-cover  "
                  style={{ width: "200px", height: "190px" }}
                />
              </div>
              <div>
                <h5 className="text-center fw-medium feature with-line ">Time Bound Written Assessment</h5>
                <p className=" philosphy w-100 ps-2 lineheight pt-2 ">
                At the end of each term, time bound written test is given in each subject. This will help the student to know their writing speed and be familiar with our traditional exam system.
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </>
  );
};

export default Lrpa;
