import React from "react";
import "../styles/ContributorsPage.css";
import HospitalNavbar from "./Navbar";
import Footer from "./Footer";
import logo from "../assets/sam.jpg";
import logo1 from "../assets/ajit2.jpg";
import ayushi from "../assets/ayushi.jpg";
import sapna from "../assets/sapna.jpg";
import { FaUserTie, FaTasks, FaIdCard } from "react-icons/fa";

const contributors = [
  {
    id: 1,
    name: "Shubham Chamoli",
    role: "Website Development",
    contribution:
      "Developed the patient and doctor dashboards with responsive UI.",
    rollNo: "",
    image: logo,
  },
  {
    id: 2,
    name: "Sapna Parshwan",
    role: "Research Work",
    contribution: "Implemented new ideas for health data monitoring.",
    rollNo: "12346",
    image: sapna,
  },
  {
    id: 3,
    name: "Ayushi",
    role: "Presentation Work",
    contribution: "Prepared PPT and project documentation.",
    rollNo: "12347",
    image: ayushi,
  },
  {
    id: 4,
    name: "Ajit Singh",
    role: "Project Report",
    contribution: "Prepared final report and supporting presentations.",
    rollNo: "12348",
    image: logo1,
  },
];

const ContributorsPage = () => {
  return (
    <>
      <HospitalNavbar />

      <div className="contributors-page">
        <div className="mentor-section">
          <p className="mentor-text">
            🙏 Guided by <strong>Ms. Roosha Shamoon</strong>, Assistant
            Professor , Uttaranchal University
          </p>
        </div>
        <br>
        </br>
        <h1 className="contributors-title">🌟 Project Contributors</h1>
        <div className="contributors-grid">
          {contributors.map((contributor) => (
            <div key={contributor.id} className="contributor-card">
              <img
                src={contributor.image}
                alt={contributor.name}
                className="contributor-image"
              />
              <h3 className="contributor-name">{contributor.name}</h3>
              <p className="contributor-info">
                <FaUserTie className="icon" /> {contributor.role}
              </p>
              <p className="contributor-info contributor-task">
                <FaTasks className="icon" /> {contributor.contribution}
              </p>
              <p className="contributor-info">
                <FaIdCard className="icon" /> Roll No: {contributor.rollNo}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      <style>{`
        .contributors-page {
          padding: 10px 20px;
          background-color: #f9f9f9;
          min-height: 100vh;
        }

        .contributors-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2.5rem;
          color: #004080;
        }

        .contributors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: auto;
        }

        .contributor-card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 25px;
          text-align: center;
          transition: transform 0.3s;
        }

        .contributor-card:hover {
          transform: translateY(-5px);
        }

        .contributor-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 15px;
          border: 3px solid #007bff;
        }

        .contributor-name {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333;
        }

        .contributor-info {
          font-size: 0.95rem;
          margin: 6px 0;
          color: #555;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contributor-task {
          background-color: #eef5ff;
          border-left: 4px solid #007bff;
          padding: 10px 12px;
          border-radius: 8px;
          margin-top: 12px;
          line-height: 1.6;
          text-align: justify;
        }

        .icon {
          margin-right: 8px;
          color: #007bff;
          vertical-align: middle;
        }

        .mentor-section {
          margin-top: 60px;
          text-align: center;
          font-size: 1.1rem;
          color: #2c3e50;
        }

        .mentor-text {
          background-color: #e6f2ff;
          display: inline-block;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 500;
        }

        @media (max-width: 600px) {
          .contributors-title {
            font-size: 2rem;
          }

          .contributor-card {
            padding: 20px;
          }

          .mentor-text {
            font-size: 1rem;
            padding: 10px 15px;
          }
        }
      `}</style>
    </>
  );
};

export default ContributorsPage;
