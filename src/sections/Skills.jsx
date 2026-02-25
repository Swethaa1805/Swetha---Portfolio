import React from "react";
import { FaCode, FaAward, FaBriefcase, FaUsers, FaComments, FaLightbulb, FaCogs, FaUsersCog, FaClock, FaBrain } from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-page">

      {/* Page Title */}
      <h1>My Skills & Expertise</h1>
      <p>Overview of my technical skills, certifications, and internship experience.</p>

      {/* Main Blocks */}
      <div className="blocks-container">

        {/* Technical Skills */}
        <div className="block-card">
          <h2><FaCode className="block-icon"/> Technical Skills</h2>
          <div className="block-items">
            <span>Java</span>
            <span>React.js</span>
            <span>Spring Boot</span>
            <span>MySQL</span>
            <span>HTML & CSS</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="block-card">
          <h2><FaAward className="block-icon"/> Certifications</h2>
          <div className="block-items">
            <span>Java Programming - Sololearn</span>
            <span>Data Science For Engineers - NPTEL</span>
            <span>SQL - Sololearn</span>
            <span>Python - Sololearn</span>
          </div>
        </div>

        {/* Internship */}
        <div className="block-card internship-card">
          <h2><FaBriefcase className="block-icon"/> Internship</h2>
          <div className="block-items">
            <span className="company-pill">Retech Solutions</span>
            <span className="internship-desc">
              Gained hands-on experience in Full Stack Java development, including frontend design, backend setup with Spring Boot, and database integration. Developed a “Student Portal Management System” to efficiently manage student records, authentication, and academic information.
            </span>
          </div>
        </div>

      </div> {/* Closing blocks-container */}

      {/* Soft Skills Horizontal Card */}
      <div className="softskills-card">
        <h2><FaUsers className="block-icon"/> Soft Skills</h2>
        <div className="softskills-items">
          <span><FaUsers className="soft-icon"/> Teamwork</span>
          <span><FaComments className="soft-icon"/> Communication</span>
          <span><FaLightbulb className="soft-icon"/> Problem-Solving</span>
          <span><FaCogs className="soft-icon"/> Adaptability</span>
          <span><FaBrain className="soft-icon"/> Creativity</span>
          <span><FaUsersCog className="soft-icon"/> Leadership</span>
          <span><FaClock className="soft-icon"/> Time Management</span>
          <span><FaBrain className="soft-icon"/> Critical Thinking</span>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .skills-page {
          min-height: 100vh;
          padding: 18px 10%;
          font-family: "Poppins", sans-serif;
          background: #0f172a;
          color: white;
        }

        h1 {
          font-size: 40px;
          color: #38BDF8;
          margin-bottom: 10px;
          text-align: center;
        }

        p {
          text-align: center;
          color: #cbd5e1;
          margin-bottom: 40px;
          font-size: 16px;
        }

        .blocks-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }

        .block-card, .softskills-card {
          background: rgba(255,255,255,0.05);
          padding: 25px;
          border-radius: 16px;
          border: 1px solid rgba(56,189,248,0.25);
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        /* Glow effect on hover for all cards */
        .block-card:hover, .softskills-card:hover {
          box-shadow: 0 0 25px rgba(56,189,248,0.7);
          border-color: #38BDF8;
          transform: translateY(-5px);
        }

        .block-card h2, .softskills-card h2 {
          font-size: 22px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: #38BDF8;
          margin-bottom: 15px;
        }

        .block-icon {
          font-size: 24px;
        }

        .block-items span {
          display: block;
          background: rgba(56,189,248,0.1);
          margin-bottom: 8px;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 14px;
          color: #cbd5e1;
        }

        /* Internship card special styles */
        .company-pill {
          background: #38BDF8;
          color: #0f172a;
          font-weight: 600;
          padding: 6px 10px;
          border-radius: 12px;
          display: inline-block;
          margin-bottom: 10px;
        }

        .internship-desc {
          background: rgba(56,189,248,0.05);
          padding: 10px;
          border-radius: 12px;
          line-height: 1.6;
        }

        /* Soft Skills */
        .softskills-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 15px;
        }

        .softskills-items span {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(56,189,248,0.1);
          padding: 8px 14px;
          border-radius: 12px;
          font-size: 14px;
          color: #cbd5e1;
        }

        .soft-icon {
          font-size: 14px;
          margin-top: 1px;
        }

        @media (max-width: 900px) {
          .blocks-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </section>
  );
};

export default Skills;