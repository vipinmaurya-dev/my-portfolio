import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaPhp, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import "./Skills.css";

function Skills() {
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
      description: "Building interactive and reusable UI components.",
      color: "#61DAFB",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
      description: "Creating dynamic and interactive web experiences.",
      color: "#F7DF1E",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
      description: "Developing server-side logic and web applications.",
      color: "#777BB4",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
      description: "Managing structured data and database queries.",
      color: "#00C2FF",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      description: "Creating responsive layouts and UI components.",
      color: "#8B5CF6",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
      description: "Tracking code changes and managing project versions.",
      color: "#F1502F",
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <div className="skills-heading text-center">
          <span className="section-badge">✦ My Tech Stack</span>

          <h2 className="section-title">
            Skills & <span>Expertise</span>
          </h2>

          <p className="section-text">
            Technologies I use to build modern, responsive and user-friendly web
            applications.
          </p>
        </div>

        <Row className="g-4 skills-row">
          {skills.map((skill) => (
            <Col lg={4} md={6} sm={6} xs={12} key={skill.name}>
              <div className="skill-card">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>

                <h4>{skill.name}</h4>

                <p>{skill.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
