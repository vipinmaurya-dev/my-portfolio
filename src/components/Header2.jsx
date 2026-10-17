import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: "-80px 0px -20% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setExpanded(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="glass-nav"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand
          href="#hero"
          className="brand"
          onClick={() => handleNavClick("hero")}
        >
          <div className="logo-circle">VK</div>

          <div className="brand-text">
            <h5>Vipin Kumar Maurya</h5>
            <span>Code Today, Create Tomorrow</span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" aria-label="Toggle navigation">
          <span className={`custom-toggler ${expanded ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="nav">
          <Nav className="mx-auto nav-links">
            {[
              ["hero", "Home"],
              ["about", "About"],
              ["skills", "Skills"],
              ["projects", "Projects"],
              ["certificates", "Certificates"],
            ].map(([id, label]) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "active-link" : ""}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <a
            href="#contact"
            className="talk-btn"
            onClick={() => handleNavClick("contact")}
          >
            Let's Talk →
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
