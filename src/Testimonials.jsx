import React from "react";


const Testimonials = () => {
  return (
    <div className="container">
        <section className="testimonial-section">
          <div className="testimonial-header">
            <h2>What people are <br /> saying about us</h2>
            <p>
              Everything you need to accept card payments <br /> and grow your business anywhere on the planet.
            </p>
          </div>
          <div className="testimonial-cards">
            <div className="testimonial-card">
                <span className="vergul">``</span>
              <p className="quote">
                Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
              </p>
              <div className="profile">
                <img src="./img/image.p.jpg" alt="Herman Jensen" className="avatar" />
                <div>
                  <h4>Herman Jensen</h4>
                  <span>Founder & Leader</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
                <span className="vergul">``</span>
              <p className="quote">
                
                Money makes your life easier. If you're lucky to have it, you're lucky.
              </p>
              <div className="profile">
                <img src="./img/rasm.p.jpg" alt="Steve Mark" className="avatar" />
                <div>
                  <h4>Steve Mark</h4>
                  <span>Founder & Leader</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
                <span className="vergul">``</span>
              <p className="quote">
                It is usually people in the money business, finance, and international trade that are really rich.
              </p>
              <div className="profile">
                <img src="./img/rasm.p.jpg" alt="Kenn Gallagher" className="avatar" />
                <div>
                  <h4>Kenn Gallagher</h4>
                  <span>Founder & Leader</span>
                
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Testimonials;