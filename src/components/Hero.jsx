import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaJava,
  FaPython,
  FaDatabase,
  FaChartLine,
  FaLaptopCode,
  FaReact,
   FaEnvelope,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container">

        {/* LEFT SIDE */}
    {/* LEFT SIDE */}
{/* LEFT SIDE */}
<div className="left modern">

  {/* STATUS */}
  <div className="topLine">
    <span className="dot"></span>
    AVAILABLE FOR OPPORTUNITIES
  </div>

  {/* TITLE (clean + smaller) */}
  <h1 className="title">
    Hi, I'm{" "}
    <span className="nameGradient">Swetha A</span>
  </h1>

  {/* TAGS */}
  <div className="chips">
    <span>Software Developer</span>
    <span>UI Explorer</span>
    <span>Tech Enthusiast</span>
  </div>

  {/* DESCRIPTION */}
  <p className="desc">
    I design and build high-performance web applications with clean architecture,
    modern UI systems, and strong backend logic. I focus on creating scalable
    digital experiences that feel fast, intuitive, and impactful.
  </p>

  {/* BUTTONS */}
  <div className="buttons">
    <button className="btn primary" onClick={() => navigate("/projects")}>
      View My Work
    </button>

    <button className="btn secondary" onClick={() => navigate("/about")}>
      About Me
    </button>
  </div>

  {/* SOCIAL ICONS (REAL ICONS) */}
  <div className="socials">

    <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=swethaa1805@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

    <a href="https://www.linkedin.com/in/swetha-a-0b1712382/" target="_blank">
      <FaLinkedin />
    </a>

    <a href="https://github.com/Swethaa1805" target="_blank">
      <FaGithub />
    </a>

  </div>

</div>
        {/* RIGHT SIDE */}
        <div className="right">
          <div className="radar">

            {/* GLOW */}
            <div className="glow"></div>

            {/* RINGS */}
            <div className="ring r1"></div>
            <div className="ring r2"></div>
            <div className="ring r3"></div>

            {/* SCAN */}
            <div className="sweep"></div>

            {/* CENTER GIRL WITH LAPTOP */}
            <div className="center">
              <img
                src="/lap.png"
                alt="girl working on laptop"
              />
            </div>

            {/* ORBIT ICONS */}
            <div className="orbit o1"><FaJava /></div>
            <div className="orbit o2"><FaPython /></div>
            <div className="orbit o3"><FaDatabase /></div>
            <div className="orbit o4"><FaChartLine /></div>
            <div className="orbit o5"><FaLaptopCode /></div>

            {/* NEW REACT ICON */}
            <div className="orbit o6"><FaReact /></div>

            {/* PARTICLES */}
            <span className="particle p1"></span>
            <span className="particle p2"></span>
            <span className="particle p3"></span>
            <span className="particle p4"></span>
            <span className="particle p5"></span>
            <span className="particle p6"></span>

          </div>
        </div>

      </div>

      <style>{`

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: radial-gradient(circle at top, #0b1220, #050816);
          padding: 0 6%;
        }

        .container {
  display: grid;
  grid-template-columns: 1.2fr 1fr;

  gap: 60px;

  width: 100%;
  align-items: center;

  /* IMPORTANT: keeps both sides visually centered */
  justify-content: space-between;
}

       /* LEFT SIDE - CLEAN TYPOGRAPHY STYLE */

/* LEFT MODERN CLEAN STYLE */

/* LEFT MODERN */

.left.modern {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 620px;
  padding-top: -100px;
  padding-left:30px;
}

/* STATUS */
.topLine {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  letter-spacing: 2px;
  color: #94a3b8;
  margin-bottom: 24px;
}

.topLine .dot {
  width: 8px;
  height: 8px;
  background: #38BDF8;
  border-radius: 50%;
  box-shadow: 0 0 10px #38BDF8;
}

/* TITLE (smaller + cleaner) */
.title {
  font-size: 52px;
  font-weight: 700;
  color: #e2e8f0;
  margin: 0;
  line-height: 1.1;
}

/* DOUBLE COLOR NAME */
.nameGradient {
  background: linear-gradient(90deg, #38BDF8, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* TAG CHIPS */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.chips span {
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  background: rgba(56,189,248,0.08);
  border: 1px solid rgba(56,189,248,0.2);
  color: #38BDF8;
}

/* DESCRIPTION */
.desc {
  margin-top: 18px;
  font-size: 15px;
  line-height: 1.8;
  color: #cbd5e1;
  max-width: 540px;
}

/* BUTTONS (UPGRADED) */
.buttons {
  margin-top: 24px;
  display: flex;
  gap: 14px;
}

/* PRIMARY BUTTON (gradient glass) */
.primary {
  padding: 12px 22px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: #0b1220;
  font-weight: 600;

  background: linear-gradient(135deg, #38BDF8, #60a5fa);
  box-shadow: 0 10px 25px rgba(56,189,248,0.25);
  transition: 0.3s;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 35px rgba(56,189,248,0.35);
}

/* SECONDARY BUTTON (glass style) */
.secondary {
  padding: 12px 22px;
  border-radius: 12px;
  cursor: pointer;

  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(56,189,248,0.25);
  color: #38BDF8;

  transition: 0.3s;
}

.secondary:hover {
  background: rgba(56,189,248,0.08);
  transform: translateY(-2px);
}

/* SOCIAL ICONS */
.socials {
  margin-top: 26px;
  display: flex;
  gap: 12px;
}

.socials a {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(56,189,248,0.2);

  color: #38BDF8;
  font-size: 18px;

  transition: 0.3s;
}

.socials a:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 18px rgba(56,189,248,0.3);
}
  .right {
  display: flex;
  justify-content: center;
  align-items: center;
}
        /* RADAR */
        .radar {
          position: relative;
          width: 380px;
          height: 380px;
          margin: auto;
        }

        .glow {
          position: absolute;
          width: 420px;
          height: 420px;
          top: -20px;
          left: -20px;
          background: radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%);
          filter: blur(10px);
        }

        /* RINGS */
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(56,189,248,0.15);
        }

        .r1 { width: 360px; height: 360px; top: 10px; left: 10px; }
        .r2 { width: 260px; height: 260px; top: 60px; left: 60px; }
        .r3 { width: 160px; height: 160px; top: 110px; left: 110px; }

        /* SCAN */
        .sweep {
          position: absolute;
          width: 180px;
          height: 180px;
          top: 100px;
          left: 100px;
          border-radius: 50%;
          background: conic-gradient(from 90deg, transparent, rgba(56,189,248,0.25), transparent);
          animation: rotate 4s linear infinite;
        }

        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }

        /* CENTER GIRL */
        .center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          z-index: 5;
        }

        .center img {
          width: 150px;
          filter: drop-shadow(0 0 10px rgba(56,189,248,0.25));
        }

        /* ORBIT */
        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 50px;
          height: 50px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 22px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(56,189,248,0.4);
          box-shadow: 0 0 18px rgba(56,189,248,0.35);

          transform-origin: 0 0;
        }

        @keyframes orbit {
          0%   { transform: rotate(0deg) translate(170px) rotate(0deg); }
          100% { transform: rotate(360deg) translate(170px) rotate(-360deg); }
        }

        .o1 { animation: orbit 10s linear infinite; }
        .o2 { animation: orbit 12s linear infinite reverse; }
        .o3 { animation: orbit 9s linear infinite; }
        .o4 { animation: orbit 11s linear infinite reverse; }
        .o5 { animation: orbit 8s linear infinite; }
        .o6 { animation: orbit 13s linear infinite; }

        /* PARTICLES */
        .particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: rgba(56,189,248,0.9);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(56,189,248,0.8);
          animation: float 6s infinite ease-in-out;
        }

        @keyframes float {
          0% { transform: translate(0,0); opacity: 0.3; }
          50% { transform: translate(10px,-10px); opacity: 1; }
          100% { transform: translate(0,0); opacity: 0.3; }
        }

        .p1 { top: 30px; left: 60px; }
        .p2 { top: 120px; right: 40px; }
        .p3 { bottom: 60px; left: 40px; }
        .p4 { bottom: 100px; right: 80px; }
        .p5 { top: 180px; left: 180px; }
        .p6 { top: 80px; right: 120px; }

      `}</style>

    </section>
  );
};

export default Hero;