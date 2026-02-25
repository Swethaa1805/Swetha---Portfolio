import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // <-- Initialize navigate

  return (
    <section className="hero">
      <div className="hero-content">

        <h1>
          I'm <span className="name">Swetha</span>
        </h1>

        <h2 className="role">
          A Curious Mind Exploring the World of Technology
        </h2>

        <p className="desc">
          Passionate about technology and innovation, always eager
          to learn, create, and build meaningful digital solutions
          that make an impact.
        </p>

        <div className="buttons">
          <button className="btn" onClick={() => navigate("/projects")}>
            Explore Projects →
          </button>
          <button className="btn" onClick={() => navigate("/about")}>
            See My Journey →
          </button>
        </div>

      </div>

      <style>{`

        .hero {
          height: 86vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
        }

        .hero-content {
          max-width: 700px;
        }

        /* NAME */
        .hero h1 {
          font-size: 64px;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .name {
          color: #38BDF8;
        }

        /* ROLE */
        .role {
          font-size: 22px;
          font-weight: 500;
          color: #94a3b8;
          margin-bottom: 25px;
        }

        /* DESCRIPTION */
        .desc {
          font-size: 18px;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 45px;
        }

        /* BUTTONS */
        .buttons {
          display: flex;
          gap: 25px;
          justify-content: center;
        }

        /* UNIQUE BUTTON STYLE */
        .btn {
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          background: transparent;
          border: 2px solid #38BDF8;
          color: #38BDF8;
          transition: 0.3s;
        }

        .btn:hover {
          background: #38BDF8;
          color: white;
          transform: translateY(-3px);
        }

      `}</style>
    </section>
  );
};

export default Hero;