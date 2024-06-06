import React from "react";

const Gallery = () => {
  return (
    <>
    <div className="gallerysec">

   
      <div className="container py-5 ">
      {/* <h2 className="text-success py-4 fw-semibold">STUDENT ACTIVITIES</h2> */}
      <h2 className="text-start  fw-semibold  pb-4 ">
          <span className="blog border-bottom border-2  border-success">Student </span> <span className="border-bottom border-2 border-success text-success"> Activities</span>
        </h2>
        {/* left box */}
        <div className="row d-flex align-items-center">
          <div className="col-md-3">
            <div className="row d-flex align-items-center">
              <div className="col-md-4  ">
                <div className="firstimg">
                  <img
                    src="https://img.freepik.com/premium-photo/happy-little-girl-with-christmas-present-smiling_3579-3986.jpg?w=360"
                    alt="sample"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <div className="row d-flex flex-column gap-4 ">
                  <div className="activiti-img">
                    <img
                      src="https://img.freepik.com/premium-photo/cute-little-indian-asian-kids-studying-study-table-with-pile-books-educational-globe-isolated-light-blue-colour_466689-13606.jpg?w=826"
                      alt="sample"
                      className="w-100"
                    />
                  </div>
                  <div className="activiti-img">
                    <img
                      src="https://img.freepik.com/premium-photo/education-beautiful-close-up-image-ai-generated_859483-33538.jpg?w=740"
                      alt="sample"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 midimg">
            {/* Content for the main middle section */}
            <img
              src="https://img.freepik.com/free-photo/teen-friends-studying-cafe_23-2147860727.jpg?t=st=1717548874~exp=1717552474~hmac=10d6d1089b1fd14c520327debe82afd3a003a10921bbd04933ccf57fc28d8be7&w=826"
              alt="Sample"
              className="img-fluid"
            />
          </div>

          {/* Right box */}
          <div className="col-md-3">
            <div className="row d-flex align-items-center">

            <div className="col-md-8">
                <div className="row d-flex flex-column gap-4 ">
                  <div className="activiti-img">
                    <img
                      src="https://img.freepik.com/premium-photo/teacher-working-with-small-group-kids_259150-5499.jpg?w=826"
                      alt="sample"
                      className="w-100"
                    />
                  </div>
                  <div className="activiti-img">
                    <img
                      src="https://img.freepik.com/premium-photo/people-working-night_236854-4666.jpg?w=826"
                      alt="sample"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4  ">
                <div className="firstimg">
                  <img
                    src="https://img.freepik.com/premium-photo/cheerful-teen-child-back-school-autumn-full-length_474717-149954.jpg?w=360"
                    alt="sample"
                    className="w-100"
                  />
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Gallery;
