import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import "../App.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section newfc">
          <div className="flogo">
            <img src="polling.png" alt="img" />
            <div className="pf">
              <p>POLLING</p>
              <p>ARENA</p>
            </div>
          </div>

          <div className="s2f">
            <div className="socialIcon">
              <FaFacebookSquare size={30} />
              <FaLinkedin size={30} />
              <FaSquareYoutube size={30} />
              <FaInstagram size={30} />
              <FaSquareXTwitter size={30} />
            </div>
            <div className="language-selection">
              <i className="fas fa-globe"></i>
              <TbWorld /> Choose your language
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li>Overview</li>
            <li>AI Menti builder</li>
            <li>Live polling</li>
            <li>Word cloud</li>
            <li>Quiz</li>
            <li>Q&A</li>
            <li>Survey</li>
            <li>Presentations</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>How to</li>
            <li>Work</li>
            <li>Education</li>
            <li>Templates</li>
            <li>Academy</li>
            <li>Webinars</li>
            <li>Comparison</li>
            <li>Stories</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Details</h3>
          <ul>
            <li>Legal</li>
            <li>Policies</li>
            <li>Accessibility</li>
            <li>Help center</li>
            <li>Requirements</li>
            <li>AI at Mentimeter</li>
            <li>Cookie preferences</li>
          </ul>
        </div>
        <div className="footer-section ">
          <h3>About us</h3>
          <ul>
            <li>Press info</li>
            <li>The team</li>
            <li>Jobs</li>
            <li>Culture</li>
            <li>Benefits</li>
            <li>Contact us</li>
            <li>Climate</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>
      {/* <div className="footer-social">
        <span className="footer-logo">Mentimeter</span>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="language-selection">
          <i className="fas fa-globe"></i> Choose your language
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
