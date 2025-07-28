import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo">
          <div className="logo-icon"><img src="./public/img/logo.svg" alt="" /></div>
          <h2>Hoo<span>Bank</span></h2>
          <p>
            A new way to make the payments <br />
            easy, reliable and secure.
          </p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Usefull Links</h4>
            <ul>
              <li>Content</li>
              <li>How it Works</li>
              <li>Create</li>
              <li>Explore</li>
              <li>Terms & Services</li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li>Help Center</li>
              <li>Partners</li>
              <li>Suggestions</li>
              <li>Blog</li>
              <li>Newsletters</li>
            </ul>
          </div>
          <div>
            <h4>Partner</h4>
            <ul>
              <li>Our Partner</li>
              <li>Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        <div className="social-icons">
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook" />
          <i className="fab fa-twitter" />
          <i className="fab fa-linkedin" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
