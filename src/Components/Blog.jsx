import React from 'react';

const Blog = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center mb-5 fw-semibold "><span className='blog'>Latest Events</span> and Blogs</h1>
        <div className="row">

          <div className="col-lg-4 mb-4">
            <div className="card ">
              <img className="card-img-top" src="https://img.freepik.com/free-photo/proud-teacher-with-her-elementary-students_1098-2857.jpg?t=st=1715847899~exp=1715851499~hmac=0ffa992bba00cf9a02e391f1fe410d6a3d06d9c42af360010d3c8597f9aec71f&w=826" alt="Blog 1" />
              <div className="card-body">
                <h5 className="card-title">Akashara Education Expo</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur ultrices enim nec scelerisque.</p>
                <a href="#" className="btn blogbtn rounded-pill">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card ">
              <img className="card-img-top" src="https://img.freepik.com/free-photo/portrait-young-girl-student-attending-school_23-2150911365.jpg?t=st=1715847924~exp=1715851524~hmac=450355d08cbfe5c5b68b8a361c516c1239b74d035500356e086e4c4a3f2d1340&w=740" alt="Blog 2" />
              <div className="card-body">
                <h5 className="card-title">Akhsara Registration Open</h5>
                <p className="card-text">Lorem ipsum dolor sit amet,cin Vivamus efficitur ultrices enim nec scelerisque.</p>
                <a href="#" className="btn blogbtn rounded-pill ">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card ">
              <img className="card-img-top" src="https://img.freepik.com/free-photo/proud-teacher-with-her-elementary-students_1098-2857.jpg?t=st=1715847899~exp=1715851499~hmac=0ffa992bba00cf9a02e391f1fe410d6a3d06d9c42af360010d3c8597f9aec71f&w=826" alt="Blog 3" />
              <div className="card-body">
                <h5 className="card-title">Blog Title 3</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur ultrices enim nec scelerisque.</p>
                <a href="#" className="btn blogbtn rounded-pill">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
