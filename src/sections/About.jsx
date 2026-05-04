import React from "react";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <div className="hero">
        <h1>
          I’m a developer who turns <span>ideas into systems</span>.
        </h1>
      </div>

      {/* MAIN */}
      <div className="main">

        {/* LEFT SIDE */}
        <div className="story">

          <div className="line-block">
            <div className="dot"></div>

            <div className="text">
              <h2>What I Build</h2>
              <p>
                I build full-stack web applications that combine clean UI design with strong backend logic.
                My focus is on creating real-world digital products that are fast, responsive, and scalable.
              </p>
            </div>
          </div>

          <div className="line-block">
            <div className="dot"></div>

            <div className="text">
              <h2>My Approach</h2>
              <p>
                I follow a structured development process — design first, then logic, then optimization.
                Every project goes through iteration to improve performance, usability, and clarity.
              </p>
            </div>
          </div>

          <div className="line-block">
            <div className="dot"></div>

            <div className="text">
              <h2>What Drives Me</h2>
              <p>
                I am motivated by solving meaningful problems through technology.
                I enjoy turning ideas into interactive systems that feel intuitive and impactful for users.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (UNCHANGED) */}
        <div className="side">

          <div className="card main-card">
            <h3>👤 About Me</h3>

            <p>
              I am an Information Technology student passionate about building
              practical and scalable software solutions.
            </p>

            <p>
              I enjoy understanding systems deeply and converting ideas into
              clean, structured applications.
            </p>
          </div>

          <div className="card">
            <h3>🎓 Education</h3>

            <p>B.Tech – Information Technology</p>
            <p className="muted">Panimalar Engineering College</p>

            <div className="row">
              <span>2023 – 2027</span>
              <span className="cgpa">CGPA: 8.81</span>
            </div>
          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="stats">

        <div className="stat-card">
          <h3>4</h3>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h3>2</h3>
          <p>Internships</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
          <p>Certifications</p>
        </div>

      </div>

      {/* STYLE */}
      <style>{`

        .about-page {
          min-height: 100vh;
          padding: 20px 10%;
          font-family: "Poppins", sans-serif;
          background: radial-gradient(circle at top, #0b1220, #050816);
          color: white;
        }

        .hero h1 {
          font-size: 44px;
          line-height: 1.3;
        }

        .hero span {
          color: #38BDF8;
        }

        .main {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
          margin-top: 50px;
        }

        /* ================= LEFT TIMELINE ================= */

        .story {
          display: flex;
          flex-direction: column;
        }

        .line-block {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 48px;
        }

        .dot {
          width: 10px;
          height: 10px;
          margin-top: 8px;
          border-radius: 50%;
          background: #38BDF8;
          box-shadow: 0 0 10px #38BDF8;
          flex-shrink: 0;
        }

        .text {
          display: flex;
          flex-direction: column;
        }

        .text h2 {
          color: #38BDF8;
          font-size: 18px;
          margin: 0;
          line-height: 1.2;
        }

        .text p {
          margin-top: 6px;
          color: #cbd5e1;
          line-height: 1.7;
        }

        /* ================= RIGHT SIDE ================= */

        .side {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card {
          padding: 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(56,189,248,0.15);
        }

        .main-card {
          border: 1px solid rgba(56,189,248,0.3);
          box-shadow: 0 0 18px rgba(56,189,248,0.08);
        }

        h2, h3 {
          color: #38BDF8;
          margin-bottom: 10px;
        }

        p {
          color: #cbd5e1;
          line-height: 1.6;
        }

        .muted {
          color: #94a3b8;
        }

        .row {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }

        .cgpa {
          color: #38BDF8;
          font-weight: 600;
        }

        /* ================= STATS ================= */

        .stats {
          margin-top: 50px;
          display: flex;
          gap: 20px;
        }

        .stat-card {
          flex: 1;
          text-align: center;
          padding: 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(56,189,248,0.15);
        }

        .stat-card h3 {
          color: #38BDF8;
          font-size: 28px;
        }

        .stat-card p {
          color: #94a3b8;
        }

        @media (max-width: 900px) {
          .main {
            grid-template-columns: 1fr;
          }

          .stats {
            flex-direction: column;
          }

          .hero h1 {
            font-size: 32px;
          }
        }

      `}</style>

    </div>
  );
}