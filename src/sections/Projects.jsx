import React from "react";
import {
  FaTrophy,
  FaProjectDiagram,
  FaCalendarAlt,
  FaPalette,
  FaBolt,
  FaUserGraduate,
  FaLeaf,
  FaBrain,
  FaLaptopCode
} from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects-page">

      {/* BACKGROUND FX */}
      <div className="bg-glow"></div>
      <div className="particles">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* HEADER */}
      <div className="section-header">
        <h2>Crafted Works</h2>
        <p>Showcasing ideas transformed into structured, scalable and interactive systems.</p>
      </div>

      {/* PROJECTS */}
      <div className="section projects-section">

        <div className="projects-grid">

          <div className="project-card">
            <div className="badge">01</div>
            <div className="project-icon"><FaBolt /></div>
            <h3>EnergyPulse</h3>
            <p>
              Developed the frontend of an AI-driven smart home solution, designing a responsive dashboard that visualizes real-time biometric and energy data. The interface allows users to monitor and control connected devices efficiently through a clean, minimal, and intuitive UI focused on personalized energy optimization and smooth user interactions.
            </p>
            <div className="tech-tags"><span>React JS</span></div>
          </div>

          <div className="project-card">
            <div className="badge">02</div>
            <div className="project-icon"><FaUserGraduate /></div>
            <h3>Student Portal Management</h3>
            <p>
              Developed a full-stack Student Portal Management System using Spring Boot, focusing on building RESTful APIs, backend business logic, and efficient database operations. Ensured smooth integration between frontend and backend, enabling reliable data flow and user interaction.
            </p>
            <div className="tech-tags">
              <span>Spring Boot</span><span>React JS</span><span>MySQL</span>
            </div>
          </div>

          <div className="project-card">
            <div className="badge">03</div>
            <div className="project-icon"><FaLeaf /></div>
            <h3>Farm2Fork</h3>
            <p>
              Built an intuitive and responsive frontend interface for Farm2Fork, enabling seamless interaction between farmers and consumers through well-structured product listings, smooth navigation, and an efficient end-to-end shopping experience. The focus was on creating a user-friendly agricultural marketplace with clear UI flow and responsive design across devices.
            </p>
            <div className="tech-tags">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
          </div>

          <div className="project-card">
            <div className="badge">04</div>
            <div className="project-icon cogni">
              <FaBrain />
            </div>
            <h3>Cogni Flow</h3>
            <p>
             Designed a clean and structured frontend interface focused on organizing and managing information through a smooth and intuitive user experience. The system ensures easy navigation, clear layout flow, and efficient interaction across multiple sections.
            </p>
            <div className="tech-tags">
              <span>HTML</span><span>CSS</span><span>JavaScript</span>
            </div>
          </div>

        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="section achievements-section">
        <h2>Achievements</h2>

        <div className="achievements-grid">

          <div className="achievement-card">
            <FaProjectDiagram className="achievement-icon" />
            <div>
              <h3>Hackathon Participated</h3>
              <p>Semifinalist in Smart India Hackathon (SIH) 2025.</p>
            </div>
          </div>

          <div className="achievement-card">
            <FaTrophy className="achievement-icon" />
            <div>
              <h3>Project Competitions</h3>
              <p>Won Best Project Award for Li-Fi technology project.</p>
            </div>
          </div>

          <div className="achievement-card">
            <FaLaptopCode className="achievement-icon" />
            <div>
              <h3>Tech Events</h3>
              <p>Organized Code Crunch coding competition event.</p>
            </div>
          </div>

          <div className="achievement-card">
            <FaPalette className="achievement-icon" />
            <div>
              <h3>Non Tech Events</h3>
              <p>Conducted Fun Spin Round and managed participants.</p>
            </div>
          </div>

        </div>
      </div>

      {/* STYLE */}
      <style>{`

        .projects-page {
          min-height: 100vh;
          padding: 10px 10%;
          font-family: "Poppins", sans-serif;
          background: radial-gradient(circle at top, #0b1220, #050816);
          color: white;
          position: relative;
          overflow: hidden;
        }

        /* BACKGROUND GLOW */
        .bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(56,189,248,0.15), transparent 60%);
          top: -200px;
          left: -200px;
          filter: blur(60px);
          animation: moveGlow 10s infinite alternate;
        }

        @keyframes moveGlow {
          0% { transform: translate(0,0); }
          100% { transform: translate(80px, 60px); }
        }

        /* FLOATING PARTICLES */
        .particles span {
          position: absolute;
          width: 6px;
          height: 6px;
          background: #38BDF8;
          border-radius: 50%;
          opacity: 0.4;
          animation: float 6s infinite ease-in-out;
        }

        .particles span:nth-child(1){ top: 10%; left: 20%; }
        .particles span:nth-child(2){ top: 40%; left: 80%; }
        .particles span:nth-child(3){ top: 70%; left: 30%; }
        .particles span:nth-child(4){ top: 20%; left: 60%; }
        .particles span:nth-child(5){ top: 80%; left: 70%; }

        @keyframes float {
          0% { transform: translateY(0); opacity: 0.2; }
          50% { transform: translateY(-10px); opacity: 0.6; }
          100% { transform: translateY(0); opacity: 0.2; }
        }

        /* HEADER */
        .section-header {
          margin-bottom: 30px;
        }

        .section-header h2 {
          font-size: 36px;
          color: #38BDF8;
        }

        .section-header p {
          color: #94a3b8;
        }

        /* GRID */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .project-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(56,189,248,0.2);
          padding: 22px;
          border-radius: 16px;
          position: relative;
          transition: 0.4s;
          backdrop-filter: blur(8px);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 30px rgba(56,189,248,0.25);
          border-color: #38BDF8;
        }

        /* BADGE ANIMATION */
        .badge {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
          background: linear-gradient(135deg, #0a2b3a, #60a5fa);
          
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 5px #38BDF8; }
          50% { box-shadow: 0 0 15px #38BDF8; }
          100% { box-shadow: 0 0 5px #38BDF8; }
        }

        .project-icon {
          font-size: 28px;
          color: #38BDF8;
          margin-bottom: 10px;
        }

        /* FIXED COGNI ICON (NO MOVEMENT) */
        .project-icon.cogni {
          color: #38BDF8;
          filter: drop-shadow(0 0 8px rgba(56,189,248,0.5));
          animation: none;
        }

        h3 { color: #e2e8f0; 
             margin-top:1px;}

        p {
          color: #cbd5e1;
          font-size: 14px;
        }

        /* TECH */
        .tech-tags {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tags span {
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 20px;
          background: rgba(56,189,248,0.1);
          border: 1px solid rgba(56,189,248,0.3);
          color: #38BDF8;
        }

        /* ACHIEVEMENTS */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .achievement-card {
          display: flex;
          gap: 12px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(56,189,248,0.15);
          transition: 0.3s;
          
        }

        .achievement-card:hover {
          transform: translateY(-4px);
          border-color: #38BDF8;
        }

        .achievement-icon {
          font-size: 25px;
          color: #38BDF8;
        }

        @media (max-width: 900px) {
          .projects-grid,
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

    </section>
  );
};

export default Projects;