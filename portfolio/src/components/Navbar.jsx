import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">

        {/* LOGO + TAGLINE */}
        <div className="logo-container">
          <div className="logo">
            <span className="bracket">&lt;</span>
            <span className="letter">S</span>
            <span className="bracket">/&gt;</span>
          </div>

          <div className="tagline">
            CODE • CREATE • INNOVATE
          </div>
        </div>

        {/* NAV LINKS */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </nav>

      <style>{`

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding-top: 90px;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #020617, #0f172a);
        }

        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          height: 90px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 6%;

          background: rgba(2, 6, 23, 0.75);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(255,255,255,0.1);

          z-index: 1000;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
        }

        .logo {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .letter {
          background: linear-gradient(90deg, #38bdf8, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .bracket {
          color: #94a3b8;
        }

        .tagline {
          font-size: 11px;
          letter-spacing: 3px;
          color: #38bdf8;
          margin-top: 4px;
          font-weight: 600;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 40px;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: #cbd5e1;
          font-size: 15px;
          font-weight: 500;
          transition: 0.3s;
          position: relative;
        }

        .nav-links li a:hover {
          color: #22d3ee;
        }

        .nav-links li a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -6px;
          background: linear-gradient(90deg, #38bdf8, #22d3ee);
          transition: 0.3s;
        }

        .nav-links li a:hover::after {
          width: 100%;
        }

      `}</style>
    </>
  );
};

export default Navbar;