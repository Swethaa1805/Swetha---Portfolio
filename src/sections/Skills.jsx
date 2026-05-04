import React from "react";
import {
  FaCode,
  FaAward,
  FaLaptopCode,
  FaUsers,
  FaComments,
  FaLightbulb,
  FaCogs,
  FaUsersCog,
  FaClock,
  FaBrain,
  FaExternalLinkAlt
} from "react-icons/fa";

const Skills = () => {
  return (
    <section className="skills-page">

      <div className="glow"></div>

      {/* HEADER */}
      <div className="header">
        <h1>Skills & Expertise</h1>
        <p>
          A refined overview of my technical capabilities and hands-on experience.
        </p>
      </div>

      {/* TOP CARDS */}
      <div className="bento">

        {/* TECH STACK */}
        <div className="card">
          <h2><FaCode /> Tech Stack</h2>

          <div className="skills-grid">
            <p><span></span> Java</p>
            <p><span></span> MySQL</p>
            <p><span></span> Python</p>
            <p><span></span> C</p>
            <p><span></span> HTML, CSS</p>
            <p><span></span> JavaScript</p>
            <p><span></span> React.js</p>
            <p><span></span> Spring Boot</p>
          </div>
        </div>

        {/* CODING */}
        <div className="card highlight">
          <h2><FaLaptopCode /> Coding Profiles</h2>

          <div className="profiles">
            <a href="https://leetcode.com/u/hf1u0L9tWy/" target="_blank" rel="noreferrer">
              <div>
                <span>LeetCode</span>
                <p>50+ Problems Solved</p>
              </div>
              <FaExternalLinkAlt />
            </a>

            <a href="https://www.hackerrank.com/profile/swethaaitpm" target="_blank" rel="noreferrer">
              <div>
                <span>HackerRank</span>
                <p>5★ Problem Solving</p>
              </div>
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="card">
          <h2><FaAward /> Certifications</h2>
          <div className="list">
            <p>✔ Java Programming – NPTEL</p>
            <p>✔ Data Science – NPTEL</p>
            <p>✔ SQL – HackerRank</p>
            <p>✔ Python – SoloLearn</p>
            <p>✔ C – SoloLearn</p>
          </div>
        </div>

      </div>

      {/* INTERNSHIP */}
      <div className="timeline-section">
        <h2>Internship Experience</h2>

        <div className="timeline">

          <div className="item">
            <div className="timeline-row">
              <span className="timeline-dot"></span>

              <div className="content">
                <h3>Full Stack Java Intern</h3>
                <h4>Retech Solutions</h4>

                <ul>
                  <li>Developed a Student Portal using Spring Boot, REST APIs, and MySQL</li>
                  <li>Implemented secure authentication and user management features</li>
                  <li>Designed backend services for efficient data processing</li>
                  <li>Optimized API performance and improved system responsiveness</li>
                  <li>Structured scalable and maintainable backend architecture</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="timeline-row">
              <span className="timeline-dot"></span>

              <div className="content">
                <h3>Data Analytics Intern</h3>
                <h4>Retech Solutions</h4>

                <ul>
                  <li>Built interactive Power BI dashboards for data visualization</li>
                  <li>Performed data cleaning and preprocessing of raw datasets</li>
                  <li>Designed reports to extract meaningful insights</li>
                  <li>Analyzed trends and supported decision-making processes</li>
                  <li>Worked on real-time projects improving analytical thinking</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SOFT SKILLS */}
      <div className="soft-wrapper">
        <div className="card">
          <h2>Soft Skills</h2>

          <div className="chips">
            <span><FaUsers /> Teamwork</span>
            <span><FaComments /> Communication</span>
            <span><FaLightbulb /> Problem Solving</span>
            <span><FaCogs /> Adaptability</span>
            <span><FaBrain /> Creativity</span>
            <span><FaUsersCog /> Leadership</span>
            <span className="center-chip"><FaClock /> Time Management</span>
          </div>
        </div>
      </div>

      <style>{`

        *{ box-sizing:border-box; }
        body{ overflow-x:hidden; }

        .skills-page{
          min-height:100vh;
          padding:20px 8vw 50px;
          font-family:"Poppins",sans-serif;
          background: radial-gradient(circle at top,#0b1220,#050816);
          color:white;
        }

        .glow{
          position:absolute;
          width:400px;
          height:400px;
          background:radial-gradient(circle,#38BDF8,transparent);
          top:-120px;
          right:-50px;
          filter:blur(100px);
          opacity:0.2;
        }

        .header{
          text-align:center;
          margin-bottom:40px;
        }

        .header h1{
          font-size:42px;
          color:#38BDF8;
        }

        .header p{
          color:#94a3b8;
          margin-top:6px;
        }

        .bento{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
        }

        .card{
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(56,189,248,0.2);
          border-radius:16px;
          padding:20px;
        }

        .highlight{
          background:linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.05));
        }

        h2{
          color:#38BDF8;
          margin-bottom:12px;
          display:flex;
          align-items:center;
          gap:8px;
        }

        .skills-grid{
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:8px 20px;
          margin-top:10px;
        }

        .skills-grid p{
          display:flex;
          align-items:center;
          gap:10px;
          color:#cbd5e1;
          font-size:14px;
        }

        .skills-grid span{
          width:7px;
          height:7px;
          background:#38BDF8;
          transform:rotate(45deg);
          box-shadow:0 0 6px rgba(56,189,248,0.7);
        }

        .profiles{
          display:flex;
          flex-direction:column;
          gap:16px;
          margin-top:10px;
        }

        .profiles a{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:14px;
          border-radius:10px;
          border:2px solid rgba(56,189,248,0.3);
          text-decoration:none;
          color:white;
          transition:0.3s;
        }

        .profiles a:hover{
          background:rgba(56,189,248,0.1);
          transform:translateX(5px);
        }

        /* ✅ FIXED TIMELINE */
        .timeline{
          position:relative;
          margin-top:30px;
          padding-left:50px;
        }

        .timeline::before{
          content:"";
          position:absolute;
          top:0;
          left:20px;
          width:2px;
          height:100%;
          background:rgba(56,189,248,0.3);
        }

        .timeline-row{
          display:flex;
          gap:15px;
          position:relative;
        }

        .timeline-dot{
          position:absolute;
          left:-35px;
          top:6px;
          width:12px;
          height:12px;
          background:#38BDF8;
          border-radius:50%;
          box-shadow:0 0 10px rgba(56,189,248,0.7);
        }

        .timeline .item{
          margin-bottom:30px;
        }

        .timeline .content h3{
          margin:0;
        }

        .timeline .content h4{
          font-size:16px;
          color:#38BDF8;
          margin:6px 0 10px;
        }

        .timeline .content ul{
          padding-left:20px;
        }

        .timeline .content li{
          margin-bottom:6px;
          color:#cbd5e1;
          line-height:1.5;
        }

        .soft-wrapper{
          margin-top:40px;
        }

        .chips{
          display:flex;
          flex-wrap:wrap;
          justify-content:center;
          gap:12px;
        }

        .chips span{
          padding:8px 14px;
          border-radius:20px;
          background:rgba(56,189,248,0.1);
          border:1px solid rgba(56,189,248,0.3);
          display:flex;
          gap:6px;
        }

        .center-chip{
          display:block;
          margin:0 auto;
        }

        @media(max-width:900px){
          .bento{
            grid-template-columns:1fr;
          }

          .skills-grid{
            grid-template-columns:1fr;
          }
        }

      `}</style>

    </section>
  );
};

export default Skills;