import data from "../../data";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">

      <p className="section--title">My Skills</p>
      <h2 className="skills--section--heading">My Expertise</h2>
      <div className="portfolio--container">
        <section className="skills-section">
          {/* <h3 className="skills-title">Technologies I Use</h3> */}
          <div className="skills-container">
            {data?.skills[1]?.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <br />
      </div>
      {/* <div className="skills--section--container">
        {data?.skills[0]?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img style={{ width: '3rem' }} src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
