import profile from "./img/profile_pic.png";
const About = () => {
  return (
    <section className="about">
      <h1>About Me</h1>

      <div className="about-intro">
        <p>
          I’m an associate dev expertly balancing the art of fixing bugs and
          unintentionally creating new ones—because keeping clients on their
          toes is a service too.
        </p>
      </div>

      <div className="divider"></div>

      <div className="about-grid">
        <div className="about-content">
          <h2>My Journey</h2>

          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <p>
                Graduated at The City College of Angeles with a degree in
                Information Technology.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <p>
                Started my career as an Associate Backend Developer where I
                developed my skills in modern web technologies.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">Present</div>
            <div className="timeline-content">
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src={profile} alt="Junel Timon - Web Developer" />
        </div>
      </div>
    </section>
  );
};

export default About;
