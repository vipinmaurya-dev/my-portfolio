import { Button, Container, Row, Col } from "react-bootstrap";
import developer from "../assets/images/developer.png";
import Resume from "../assets/resume/Vipin_Kumar_Maurya.pdf";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <span className="hero-badge">✦ Available for New Projects</span>

            <h1 className="hero-title">
              Hi, I'm <span className="name">Vipin Kumar Maurya</span>
            </h1>

            <h2 className="hero-role">Full Stack Developer</h2>

            <p className="hero-text mt-4">
              I build fast, responsive and modern web applications using React,
              PHP and MySQL with a premium user experience.
            </p>

            <div className="d-flex align-items-center gap-3 mt-4 flex-wrap">
              <a href="#projects">
                <Button className="hero-btn">
                  View Projects <i className="bi bi-arrow-right"></i>
                </Button>
              </a>

              <Button
                className="hero-outline"
                as="a"
                href={Resume}
                download={"Vipin_Kumar_Maurya"}
              >
                Download Resume
              </Button>
            </div>

            <div className="stats mt-5">
              <div>
                <h3>5+</h3>
                <small>Projects</small>
              </div>

              <div>
                <h3>1+</h3>
                <small>Years Learning</small>
              </div>

              <div>
                <h3>100%</h3>
                <small>Passion</small>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mt-5 mt-lg-0">
            <div className="hero-image">
              <img
                src={developer}
                alt="Developer"
                className="img-fluid hero-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
