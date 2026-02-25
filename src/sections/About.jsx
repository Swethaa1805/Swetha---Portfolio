import React from "react";

export default function About() {
  return (
    <div className="about-page">

      <div className="about-wrapper">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h1>
            About <span className="highlight">Me</span>
          </h1>

          <p>
            I am a curious and motivated individual with a passion for technology and innovation. I enjoy exploring new ideas, experimenting with creative solutions, and turning concepts into real-world applications. I love building digital experiences that are user-friendly, efficient, and impactful. Continuously learning and adapting, I aim to grow both technically and creatively while contributing to projects that make a difference. My interests include Full Stack Development, Data Analytics, and discovering tools and technologies that enhance problem-solving and innovation.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          {/* EDUCATION */}
          <div className="about-card">
            <div className="card-header">
              <h3>🎓 Education</h3>
              <span className="year">📅 2023 – 2027</span>
            </div>
            <p>B.Tech in Information Technology</p>
            <p>
              As a student of the IT department, I am gaining solid academic knowledge and practical exposure through projects and departmental activities that enhance my problem-solving and technical understanding.
            </p>
          </div>

          {/* INTERESTS */}
          <div className="about-card">
            <h3>💡 Interests</h3>
            <ul>
              <li>Full Stack Development</li>
              <li>Data Analytics</li>
              <li>DBMS</li>
              <li>Learning New Technologies</li>
            </ul>
          </div>

        </div>

      </div>

      <style>{`

        .about-page {
          min-height: 100vh;
          padding: 40px 10%; /* Reduced top padding */
          font-family: "Poppins", sans-serif;
          background: #0f172a;
          color: white;
        }

        .about-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start; /* Align content to top */
        }

        .about-left {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .about-left h1 {
          font-size: 46px;
          margin-bottom: 10px;
        }

        .highlight {
          color: #38BDF8; /* Blue color for "Me" */
        }

        .about-left p {
          color: #cbd5e1;
          line-height: 1.8;
          font-size: 18px;
        }

        .about-right {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        /* PREMIUM GLOW CARD */
        .about-card {
          background: rgba(255,255,255,0.05);
          padding: 26px;
          border-radius: 16px;
          border: 1px solid rgba(56,189,248,0.25);
          transition: 0.4s;
          box-shadow: 0 0 15px rgba(56,189,248,0.15);
        }

        .about-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 25px rgba(56,189,248,0.6);
          border-color: #38BDF8;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .year {
          background: #54aed4;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 700;
        }

        ul {
          padding-left: 18px;
        }

        li {
          margin-bottom: 6px;
        }

        @media (max-width: 900px) {
          .about-wrapper {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

    </div>
  );
}