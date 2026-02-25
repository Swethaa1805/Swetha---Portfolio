import React from "react";
import { FaTrophy, FaProjectDiagram, FaCalendarAlt, FaPalette, FaBolt, FaUserGraduate, FaLeaf } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects-page">

      {/* Projects Section */}
      <div className="section projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {/* EnergyPulse Project */}
          <div className="project-card">
            <div className="project-icon"><FaBolt /></div>
            <h3>EnergyPulse</h3>
            <p>
              Developed the frontend of an AI-driven smart home solution, creating a responsive dashboard that displays real-time biometric and energy data. The interface enables users to monitor and control devices easily, with a clean and intuitive design focused on personalized energy optimization and smooth interactions.
            </p>
            <p className="tech-stack">Tech: React.js</p>
          </div>

          {/* Student Portal Management */}
          <div className="project-card">
            <div className="project-icon"><FaUserGraduate /></div>
            <h3>Student Portal Management</h3>
            <p>
              “Developed a full-stack Student Portal Management System using Java and Spring Boot, enabling efficient student record management, authentication, and academic information through a structured backend with an intuitive frontend interface.”
            </p>
            <p className="tech-stack">Spring Boot, HTML, CSS, JavaScript, MySQL</p>
          </div>

          {/* Farm2Fork */}
          <div className="project-card">
            <div className="project-icon"><FaLeaf /></div>  {/* Updated icon */}
            <h3>Farm2Fork</h3>
            <p>
              Built an intuitive and responsive frontend interface for Farm2Fork, enabling seamless interaction between farmers
and consumers through well-structured product listings, smooth navigation, and an efficient end-to-end shopping
experience.
            </p>
            <p className="tech-stack">Tech: HTML, CSS, JavaScript</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="section achievements-section">
        <h2>Achievements</h2>

        {/* Technical Achievements */}
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon"><FaTrophy /></div>
            <h3>Hackathons Won</h3>
            <p>Semifinalist in Smart India Hackathon (SIH) 2025, contributing innovative solutions and demonstrating strong problem-solving and teamwork skills.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon"><FaProjectDiagram /></div>
            <h3>Project Competitions</h3>
            <p>Won the Best Project Award for a Li-Fi technology project at the International Conference on Intelligent Computing, showcasing innovation and technical excellence.</p>
          </div>
        </div>

        {/* Events Organized */}
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon"><FaCalendarAlt /></div>
            <h3>Tech Events</h3>
            <p>Organized and conducted Code Crunch, a tech event focused on DSA challenges, engaging participants in competitive coding.</p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon"><FaPalette /></div>
            <h3>Non Tech Events</h3>
            <p>Organized a team-based Fun Spin Round non-tech event and coordinated participants to compete successfully.</p>
          </div>
        </div>

      </div>

      {/* Styles */}
      <style>{`
        .projects-page {
          min-height: 100vh;
          padding: 40px 10%;
          font-family: "Poppins", sans-serif;
          background: #0f172a;
          color: white;
        }

        .section {
          margin-bottom: 60px;
        }

        h2 {
          font-size: 36px;
          margin-bottom: 30px;
          color: #38BDF8;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .project-card {
          background: rgba(255,255,255,0.05);
          padding: 25px;
          border-radius: 16px;
          border: 1px solid rgba(56,189,248,0.25);
          box-shadow: 0 0 15px rgba(56,189,248,0.15);
          transition: 0.4s;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 25px rgba(56,189,248,0.6);
          border-color: #38BDF8;
        }

        .project-icon {
          font-size: 30px;
          color: #38BDF8;
        }

        .project-card h3 {
          margin-bottom: 6px;
        }

        .project-card p {
          margin-bottom: 6px;
          color: #cbd5e1;
        }

        .tech-stack {
          font-weight: 600;
          color: #38BDF8;
        }

        /* Achievements Grid */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .achievement-card {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(56,189,248,0.25);
          box-shadow: 0 0 15px rgba(56,189,248,0.15);
          transition: 0.4s;
        }

        .achievement-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 0 25px rgba(56,189,248,0.6);
          border-color: #38BDF8;
        }

        .achievement-icon {
          font-size: 28px;
          color: #38BDF8;
        }

        .achievement-card h3 {
          margin-bottom: 6px;
          color: #38BDF8;
        }

        .achievement-card p {
          color: #cbd5e1;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .projects-grid, .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </section>
  );
};

export default Projects;