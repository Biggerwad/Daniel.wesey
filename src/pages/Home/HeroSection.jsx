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
            <br />
            Developer.
          </h1>
          <p className="hero--section-description">
            A Fullstack Software Developer with over three
            years of hands-on experience in software development,

            <br /> I specialize in crafting seamless and innovative web
            applications tailored to meet the unique needs of users
            and organizations worldwide.
          </p>
        </div>

        <button className="btn btn-primary hero-btn">
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
        </button>
      </div>
      <div className="hero--section--img">
        <img data-aos="fade-left" style={{ width: '70%', borderRadius: '50%' }} src="./img/daniel.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
