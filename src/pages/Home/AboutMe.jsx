import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function AboutMe() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img data-aos="fade-right" src="./img/daniel.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 data-aos="fade-left" className="skills-section--heading">About Me</h1>
          <p data-aos="fade-right" className="hero--section-description">

            I am Daniel Wesey, a next-generation software developer
            dedicated to transforming ideas into innovative solutions.
            <br />With over three years of experience,
            my focus is on enhancing delivery efficiency and
            optimizing performance to drive meaningful results.
            <br /> <br />
            <p data-aos="fade-left" >
              I am committed to delivering excellence in both speed and quality.
              My dedication, curiosity, and hard work in enhancing my technical
              expertise underscore my commitment to continuous learning.
              <br />
              My skills span both frontend and backend development, making me
              a versatile asset to any development team.
            </p>
          </p>
          <p data-aos="fade-left" className="hero--section-description">
            <b>Empowering the Next Generation </b> <br />

            In addition to my professional work, I am also the host of a transformative
            free coding bootcamp. This initiative empowers aspiring developers across
            Africa, providing them with the skills and knowledge to embark on successful
            careers in the tech industry.

          </p>
        </div>
      </div>
    </section>
  );
}
