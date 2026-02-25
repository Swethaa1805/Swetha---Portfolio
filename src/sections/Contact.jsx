import React from "react";
import { 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaEnvelope,
  FaGithub 
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <style>{`
        .contact-container {
          min-height: 100vh;
          background: #0f172a;
          color: white;
          padding: 60px 10%;
          text-align: center;
        }

        .contact-title {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .contact-desc {
          color: #94a3b8;
          margin-bottom: 40px;
          font-size: 0.95rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 30px;
          border-radius: 15px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.6);
        }

        .icon {
          font-size: 1.8rem;
          margin-bottom: 12px;
          color: #2563eb;
        }

        h3 {
          margin-bottom: 8px;
        }

        p {
          color: #cbd5e1;
          font-size: 0.95rem;
        }

        a {
          text-decoration: none;
          color: #cbd5e1;
        }

        a:hover {
          color: #2563eb;
        }
      `}</style>

      <div className="contact-container">
        <h1 className="contact-title">Connect With Me</h1>

        <p className="contact-desc">
          Open to internships and exciting development opportunities. Let’s connect!
        </p>

        <div className="contact-info">

          {/* 1️⃣ Email */}
          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=swethaa1805@email.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Send Email"
         >
              <p>swethaa1805@email.com</p>
            </a>
          </div>

          {/* 2️⃣ LinkedIn */}
          <div className="info-card">
            <FaLinkedin className="icon" />
            <h3>LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/swetha-a-0b1712382/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <p>linkedin.com/n/swetha-a-0b1712382</p>
            </a>
          </div>

          {/* 3️⃣ GitHub */}
          <div className="info-card">
            <FaGithub className="icon" />
            <h3>GitHub</h3>
            <a 
              href="https://github.com/Swethaa1805" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <p>github.com/Swethaa1805</p>
            </a>
          </div>

          {/* 4️⃣ Location */}
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Chennai, India</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;