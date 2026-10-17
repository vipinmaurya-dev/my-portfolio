import { Container, Row, Col, Button } from "react-bootstrap";
import vipin from "../assets/images/vipin1.png";
import "./About.css";

function About() {
  return (
    <section className="about-hero" id="about">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6}>
            <span className="hero-badge">✦ About Me</span>

            <h1 className="hero-title mt-4">
              Turning Ideas Into
              <span className="name d-block"> Real Projects</span>
            </h1>

            <p className="hero-text mt-4">
              Hi, I'm Vipin Kumar Maurya! I build modern, responsive websites
              and turn ideas into real projects using React, PHP, MySQL, and
              Bootstrap. I'm always learning new things and improving my
              development skills.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <div className="about-image-wrapper">
              <img
                src={vipin}
                alt="Vipin Kumar Maurya"
                className="img-fluid about-img"
              />
            </div>
          </Col>
        </Row>
        <Button className="talk-btn d-block ms-auto mt-0 mb-0">
          See More →
        </Button>
      </Container>
    </section>
  );
}

export default About;
