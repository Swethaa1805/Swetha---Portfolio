import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(180deg, #0b1120, #0f172a);
          color: #cbd5e1;
          padding: 25px 8%;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footer-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }

        .footer-tagline {
          font-size: 0.85rem;
          margin-bottom: 14px;
          color: #94a3b8;
        }

        .footer-icons {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-bottom: 14px;
        }

        .footer-icons a {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: #cbd5e1;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .footer-icons a:hover {
          background: #2563eb;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 0 10px rgba(37,99,235,0.6);
        }

        .footer-copy {
          font-size: 0.75rem;
          color: #64748b;
          margin-top: 8px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer {
            padding: 20px 6%;
          }

          .footer-name {
            font-size: 1.1rem;
          }

          .footer-tagline {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-name">Swetha</div>

        <div className="footer-tagline">
          Building clean, scalable and impactful digital experiences.
        </div>

        <div className="footer-icons">

          {/* Email */}
          <a
            href="mailto:swethaa1805@email.com"
            title="Send Email"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/swetha-a-0b1712382/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Swethaa1805"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <FaGithub />
          </a>

        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Swetha. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;