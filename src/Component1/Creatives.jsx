// import React from 'react'

// const Creatives = () => {
//   return (
//     <>
//     <div className="container">
//         <div className="row">
//             <div className="col-md-6">
//             <h3 className='btncolor  fs-2 text-uppercase'>Creatives of This week</h3>

//                 <div className="card">
//                     <img src="https://img.freepik.com/premium-photo/boy-painted-white-paper-with-wood-color_51137-2147.jpg?w=826" alt="" />
//                     <div className="card-body">
//                     <h5 className='text-success fs-3 text-center'>Bonding With Nature</h5>
//                     <p className="card-text text-center fs-5 fst-italic">
// -Creatives By <span className='btncolor'>Rajan Khanal-class 3</span>
//                     </p>

//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-6 border">
//             <h3 className='text-success  fs-2 text-uppercase'>Important Notice</h3>
//                 <img src="https://img.freepik.com/free-vector/back-school-pattern-maroon-black-background-social-media-design-banner_1340-18397.jpg?t=st=1717553419~exp=1717557019~hmac=8aa4b27398bee7b9a6ffa34ac2734b62c15f63e46703c9eee663fee1e9476827&w=740" alt="img-fluid" />
//             </div>
//         </div>
//     </div>
      
//     </>
//   )
// }

// export default Creatives

import React from 'react';
import { FaShareAlt } from "react-icons/fa";

const Creatives = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4 pe-4">
          <h4 className='btncolor  pb-4 text-uppercase'>Creatives of This Week</h4>
          <div className="card  shadow-sm rounded-0">
            <img
              src="https://img.freepik.com/premium-photo/boy-painted-white-paper-with-wood-color_51137-2147.jpg?w=826"
              alt=""
              className="card-img-top  rounded-0 img-fluid"
            />
            <div className="card-body">
              <h5 className='text-success fs-3 text-center'>Bonding With Nature</h5>
              <p className="card-text text-center fs-5 fst-italic">
                - Creatives By <span className='btncolor'>Rajan Khanal - Class 3</span> <span className='fs-5 shareicon ms-5 text-white bg-success rounded-circle'> <FaShareAlt size={20} /></span>
              </p>
             
            </div>
           
          </div>
        </div>
        <div className="col-md-6 noticeborder">
          <h4 className='text-success  pb-4 ps-2 text-uppercase'>Important Notice</h4>
          <div className="notice-card">
            <img
            src='/notice.png'
              // src="https://img.freepik.com/free-vector/pack-back-school_23-2147486895.jpg?t=st=1717554549~exp=1717558149~hmac=058d8f14ec6f7db45567fb47aae46669c01efc6427670bab72c0091c6f4e75ad&w=740"
              alt="Important Notice"
              className="img-fluid rounded-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creatives;
