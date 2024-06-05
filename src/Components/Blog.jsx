import React from "react";

const Blog = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center mb-5 fw-semibold   ">
          <span className="blog border-bottom border-2  border-success">Latest </span> <span className="border-bottom border-2 border-success"> Blogs</span>
        </h1>
        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="card ">
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-photo/proud-teacher-with-her-elementary-students_1098-2857.jpg?t=st=1715847899~exp=1715851499~hmac=0ffa992bba00cf9a02e391f1fe410d6a3d06d9c42af360010d3c8597f9aec71f&w=826"
                alt="Blog 1"
              />
              <div className="card-body">
                <h5 className="card-title">Akashara Education Expo</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus efficitur ultrices enim nec scelerisque.
                </p>
                <a href="#" className="btn blogbtn rounded-pill">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="card ">
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-photo/dancing-team-studio_1303-10942.jpg?t=st=1717306766~exp=1717310366~hmac=b24dfef9f05e66ce572336c4ecf9101d76af487225cad672ad4eb20b9325674f&w=826"
                alt="Blog 2"
              />
              <div className="card-body">
                <h5 className="card-title">Akhsara Registration Open</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet,cin Vivamus efficitur ultrices enim
                  nec scelerisque. ipsum dolor consectetur {" "}
                </p>
                <a href="#" className="btn blogbtn rounded-pill ">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="card ">
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-photo/high-angle-group-smiley-childrens_23-2148445717.jpg?t=st=1717306825~exp=1717310425~hmac=8984818466e76c11e645faeb588e68b3f135ee510eafcd3ea0e33860df73f2f2&w=826"
                alt="Blog 3"
              />
              <div className="card-body">
                <h5 className="card-title">Blog Title 3</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus efficitur ultrices enim nec scelerisque.
                </p>
                <a href="#" className="btn blogbtn rounded-pill">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
