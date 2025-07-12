import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function HeroSection() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">

        <div data-aos="fade-left" className="hero--section--content">
          <p className="section--title">Hey, I'm Daniel</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software</span>{" "}
            
            Engineer.
          </h1>
          <p className="hero--section-description">
            A Fullstack Software Engineer with four
            years of hands-on experience.

          </p>
        </div>

        {/* <button className="btn btn-primary hero-btn">
          <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="footer"
          >
            Get in Touch
          </Link>
        </button> */}
      </div>
      <div className="hero--section--img">
        <img data-aos="fade-left" style={{ borderRadius: '50%' }} src="./img/myverse.png" alt="Hero Section" />
      </div>
    </section>
  );
}
