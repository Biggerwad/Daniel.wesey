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
        <img style={{borderRadius: '50%'}} src="./img/myverse.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">About Me</h1>
          <p  className="hero--section-description">

            I am Daniel Wesey, a software engineer
            dedicated to transforming ideas into innovative solutions, my focus is on creating great softwares!
            {/* <br /> <br />
            <p >
              I am committed to delivering excellence in both speed and quality.
              My dedication, curiosity, and hard work in enhancing my technical
              expertise underscore my commitment to continuous learning.
              <br />
              My skills span both frontend and backend development, making me
              a versatile asset to any development team.
            </p> */}
          </p>
          {/* <p className="hero--section-description">
            <b>Empowering the Next Generation </b> <br />

            In addition to my professional work, I am also the host of a transformative
            free coding bootcamp. This initiative empowers aspiring engineers across
            Africa, providing them with the skills and knowledge to embark on successful
            careers in the tech industry.

          </p> */}
        </div>
      </div>
    </section>
  );
}
