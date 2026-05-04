import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`

        .footer {
          background: #0b1120;
          color: #94a3b8;
          padding: 18px 8%;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* LEFT */
        .footer-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .footer-logo {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 13px;
          color: white;
          background: linear-gradient(135deg, #38BDF8, #2563eb);
          box-shadow: 0 0 10px rgba(56,189,248,0.4);
        }

        .footer-name {
          font-size: 13px;
          color: #e2e8f0;
          font-weight: 500;
        }

        /* CENTER */
        .footer-center {
          font-size: 14px;
          text-align: center;
          flex: 1;
          color: #c2c8d1;
          font-weight:50;
        }

        /* RIGHT */
        .footer-icons {
          display: flex;
          gap: 12px;
        }

        .footer-icons a {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: #cbd5e1;
          font-size: 13px;
          transition: 0.25s;
        }

        .footer-icons a:hover {
          background: #38BDF8;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 0 10px rgba(56,189,248,0.5);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .footer-left {
            justify-content: center;
          }
        }

      `}</style>

      <footer className="footer">
        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-left">
            <div className="footer-logo">SA</div>
            <div className="footer-name">Swetha</div>
          </div>

          {/* CENTER */}
          <div className="footer-center">
            © {new Date().getFullYear()} • Built with passion & clean code
          </div>

          {/* RIGHT */}
          <div className="footer-icons">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=swethaa1805@email.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/swetha-a-0b1712382/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Swethaa1805"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;