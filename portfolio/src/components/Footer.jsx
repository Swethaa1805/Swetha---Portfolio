import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(180deg, #0b1120, #0f172a);
          color: #cbd5e1;
          padding: 50px 10%;
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footer-name {
          font-size: 1.6rem;
          font-weight: 600;
          color: white;
          margin-bottom: 10px;
        }

        .footer-tagline {
          font-size: 0.9rem;
          margin-bottom: 25px;
          color: #94a3b8;
        }

        .footer-icons {
          display: flex;
          justify-content: center;
          gap: 25px;
          margin-bottom: 25px;
        }

        .footer-icons a {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: #cbd5e1;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .footer-icons a:hover {
          background: #2563eb;
          color: white;
          transform: translateY(-4px);
          box-shadow: 0 0 15px rgba(37,99,235,0.6);
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #64748b;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-name">Swetha</div>

        <div className="footer-tagline">
          Passionate about building clean, scalable and impactful applications.
        </div>

        <div className="footer-icons">

          {/* Email */}
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=swethaa1805@email.com"
          target="_blank"
          rel="noopener noreferrer"
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
            href="https://github.com/Swethaa
1805"
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