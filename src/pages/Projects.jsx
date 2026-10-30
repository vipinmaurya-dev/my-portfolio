import { Container, Row, Col, Button } from "react-bootstrap";
import "./Projects.css";
import roomfynder from "../assets/images/roomfynder.jpeg";
import freshkart from "../assets/images/FreshKart.png";
import weather from "../assets/images/Weather.png";
import { FaReact } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "RoomFynder",
      desc: "RoomFynder is a room-finding platform built using PHP, MySQL, HTML, CSS, and JavaScript. It helps users find suitable rooms through room listings, search functionality, and detailed property information.",
      tech: "HTML5 • CSS3 • JavaScript • PHP • MySQL • Bootstrap",
      image: roomfynder,
      link: "http://roomfynder.kesug.com/",
    },
    {
      title: "FreshKart",
      desc: "FreshKart is a full-stack grocery e-commerce platform built using React.js, Node.js, Express.js, and MongoDB. It allows users to browse grocery categories, explore products, add items to their cart, and manage their wishlist through a responsive interface.",
      tech: "React.js • Node.js • Express.js • MongoDB • JavaScript • CSS3",
      image: freshkart,
    },
    {
      title: "Weather Forecast",
      desc: "Weather Forecast is a responsive web application built using React.js that provides real-time weather updates through API integration. Users can search for cities and view temperature, humidity, wind speed, and a 7-day weather forecast.",
      tech: "React.js • JavaScript • HTML5 • CSS3 • Weather API",
      image: weather,
      link: "https://weather-forecast-alpha-seven.vercel.app/",
    },
  ];
  return (
    <>
      <section className="projects-section" id="projects">
        <Container>
          <div className="text-center mb-5">
            <span className="section-badge">✦ Featured Work</span>
            <h2 className="section-title">My Projects</h2>
          </div>

          <Row className="g-4">
            {projects.map((project, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="project-card h-100">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>

                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                    <small>{project.tech}</small>

                    <div className="d-flex gap-2 mt-4 flex-wrap">
                      <Button
                        className="live-btn"
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>

                      <Button
                        className="github-btn"
                        as="a"
                        href="YOUR_GITHUB_REPOSITORY_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <Button className="talk-btn d-block ms-auto mt-4 mb-0">
            See More →
          </Button>
        </Container>
      </section>

      <section className="certificates-section" id="certificates">
        <Container>
          <span className="hero-badge">✦ Certificates</span>

          <h2 className="section-title">
            My <span>Certificates</span>
          </h2>

          <p className="section-text2">
            Certificates and achievements that showcase my learning and
            technical skills.
          </p>

          <Row className="g-4 mt-4">
            <Col lg={4} md={6}>
              <div className="certificate-card">
                <div className="certificate-icon">🏆</div>

                <h4>Web Development</h4>

                <p>Full Stack Web Development Certificate</p>

                <button className="talk-btn">View Certificate →</button>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="certificate-card">
                <div className="certificate-icon">
                  {" "}
                  <FaReact />{" "}
                </div>

                <h4>React Development</h4>

                <p>React JS Development Certificate</p>

                <button className="talk-btn">View Certificate →</button>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="certificate-card">
                <div className="certificate-icon">💻</div>

                <h4>Programming</h4>

                <p>Programming & Web Technologies Certificate</p>

                <button className="talk-btn">View Certificate →</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Projects;
