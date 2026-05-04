import React from "react";
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaPaperPlane
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <style>{`

        *{ box-sizing:border-box; }
        body{ overflow-x:hidden; }

        .contact-container {
          min-height: 100vh;
          background: radial-gradient(circle at top, #0b1220, #050816);
          color: white;
          padding: 10px 8vw;
          text-align: center;
          position: relative;
        }

        /* Glow */
        .glow {
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #38BDF8, transparent);
          top: -100px;
          right: -60px;
          filter: blur(100px);
          opacity: 0.15;
        }

        /* Header */
        .contact-title {
          font-size: 38px;
          color: #38BDF8;
          margin-bottom: 6px;
        }

        .contact-desc {
          color: #94a3b8;
          font-size: 14px;
          max-width: 480px;
          margin: 0 auto 30px;
        }

        /* Grid */
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 18px;
        }

        /* Clickable wrapper */
        .card-link {
          text-decoration: none;
          color: inherit;
        }

        /* Cards */
        .info-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(56,189,248,0.2);
          backdrop-filter: blur(12px);
          padding: 24px;
          border-radius: 14px;
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(56,189,248,0.25);
        }

        .icon {
          font-size: 24px;
          margin-bottom: 10px;
          color: #38BDF8;
        }

        h3 {
          margin-bottom: 6px;
          font-size: 16px;
        }

        p {
          color: #cbd5e1;
          font-size: 13px;
        }

        /* ===== CTA SECTION ===== */
        .cta {
          margin-top: 50px;
          padding: 35px 25px;
          border-radius: 18px;
          position: relative;
          overflow: hidden;

          background: linear-gradient(
            135deg,
            rgba(56,189,248,0.15),
            rgba(56,189,248,0.05)
          );

          border: 1px solid rgba(56,189,248,0.25);
          backdrop-filter: blur(14px);
        }

        .cta::before {
          content: "";
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, #38BDF8, transparent 70%);
          top: -100px;
          left: -80px;
          filter: blur(100px);
          opacity: 0.25;
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta h2 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #38BDF8;
        }

        .cta p {
          color: #94a3b8;
          font-size: 14px;
          max-width: 500px;
          margin: 0 auto 20px;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 25px;
          background: #38BDF8;
          color: #020617;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: 0.3s;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 18px #38BDF8;
        }

        .secondary-btn {
          padding: 10px 18px;
          border-radius: 25px;
          border: 1px solid rgba(56,189,248,0.4);
          color: #cbd5e1;
          font-size: 14px;
          text-decoration: none;
          transition: 0.3s;
        }

        .secondary-btn:hover {
          background: rgba(56,189,248,0.1);
          color: #38BDF8;
        }

      `}</style>

      <div className="contact-container">

        <div className="glow"></div>

        <h1 className="contact-title">Connect With Me</h1>

        <p className="contact-desc">
          Open to internships, collaborations, and exciting opportunities.
        </p>

        <div className="contact-info">

          {/* EMAIL */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=swethaa1805@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="info-card">
              <FaEnvelope className="icon" />
              <h3>Email</h3>
              <p>swethaa1805@email.com</p>
            </div>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/swetha-a-0b1712382/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="info-card">
              <FaLinkedin className="icon" />
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/swetha-a</p>
            </div>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Swethaa1805"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="info-card">
              <FaGithub className="icon" />
              <h3>GitHub</h3>
              <p>github.com/Swethaa1805</p>
            </div>
          </a>

          {/* LOCATION */}
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Chennai, India</p>
          </div>

        </div>

        {/* 🚀 ENHANCED CTA */}
        <div className="cta">
          <div className="cta-content">

            <h2>Let’s Work Together</h2>

            <p>
              I’m open to internships, collaborations, and building impactful solutions.
              If you have an opportunity or idea, let’s connect.
            </p>

            <div className="cta-buttons">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=swethaa1805@email.com"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                <FaPaperPlane /> Send Message
              </a>

            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Contact;