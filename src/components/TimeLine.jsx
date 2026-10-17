import { Container } from "react-bootstrap";
import "./TimeLine.css";

function Timeline() {
  const timeline = [
    {
      id: 1,
      year: "2025",
      title: "Started Web Development",
      desc: "Learned HTML, CSS, JavaScript and Bootstrap.",
    },
    {
      id: 2,
      year: "2026",
      title: "PHP & MySQL Projects",
      desc: "Built RoomFynder with authentication and database integration.",
    },
    {
      id: 3,
      year: "2026",
      title: "React Development",
      desc: "Creating modern UIs with React and reusable components.",
    },
  ];

  return (
    <section className="timeline-section" id="experience">
      <Container>
        <div className="text-center mb-5">
          <span className="section-badge">✦ My Journey</span>
          <h2 className="section-title">Experience & Learning</h2>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Timeline;
