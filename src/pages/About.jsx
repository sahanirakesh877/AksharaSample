import React from 'react'

const About = () => {
  return (
    <>


<section className="py-3 py-md-5 py-xl-8 about">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">


    <div className="col-12 col-lg-6 col-xl-6">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <h2 className="h1 mb-3 fw-semibold ">OUR PHILOSOPHY AND <span className='aboutheade'>APPROACH</span></h2>
            
            <p className="mb-3 philosphy">Aksharaa School embraces a student-centered constructivist philosophy of education. In pursuit of this, we make most salient academic efforts to engage every student as a winner in autonomous educational endeavors and come out with a feeling of being rewarded for the most valuable real-life skills. At Aksharaa this philosophy is substantiated in the educational process built in pertinence with transformative principles of education e.g. awareness, autonomy and authenticity that suggest importance of learning in self-engaged action where of every learner is recognized being unique of intelligence reinforced by self-motivated initiatives resulting from individual differences. Our teaching methodologies rightly address multiple intelligence of the whole group. We believe that holistic growth of a child is possible only through a Balanced Education System....</p>
            <button className='inquirybtn px-5 py-2 border-white text-light border-0 fw-semibold'>Learn More</button>
            
          </div>
        </div>
      </div>

      <div className="col-12 col-lg-6 col-xl-6 ">
        <img className="img-fluid rounded aboutimg" loading="lazy" src="/aksahara1.jpg" alt />
        <div className="row gy-4 gy-md-0 mt-2 gx-xxl-5X  ">
              <div className="col-12 col-md-6 ">  
                  <div class="">
                    <h4 className="mb-2 text-center lineborder">Mission</h4>
                    <p className="text-secondary mb-0 aboutmission  ">Aksharaa School inculcates value-based education with academic excellence through collaboration with parents and other stakeholders to instill resilience, leadership skills and emotional intelligence in each learner.</p>
                  </div>
               
              </div>
              <div className="col-12 col-md-6 ">
                  <div class=" ">
                    <h4 className="mb-2 text-center lineborder">Vision</h4>
                    <p className="text-secondary mb-0 aboutmission ">Nurturing young learners to become lifelong learners globally competent and responsible citizens.</p>
                  </div>
               
              </div>
        </div>
      </div>

     
    </div>
  </div>
</section>

    </>
  )
}

export default About
