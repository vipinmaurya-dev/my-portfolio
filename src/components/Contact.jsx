import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <div className="contact-box">
          <Row className="align-items-center g-4">
            <Col lg={7}>
              <span className="section-badge">✦ Let's Build Together</span>

              <h2 className="contact-title">
                Ready to create something amazing?
              </h2>

              <p className="contact-text">
                I'm available for freelance projects, internships and
                collaborations. Let's connect and build something useful.
              </p>
            </Col>

            <Col lg={5}>
              <div className="contact-links">
                <a href="mailto:vipin.maurya.dev@gmail.com">
                  <FaEnvelope />
                  <span>Email Me</span>
                </a>

                <a href="tel:+919305515030">
                  <FaPhone />
                  <span>Call Me</span>
                </a>

                <a
                  href="https://github.com/vipinmaurya-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/vipinmaurya-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
