import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarCheck,
  faFileAlt,
  faSyringe,
  faStethoscope,
  faPrescriptionBottleAlt,
  faHistory,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import patientImage from "../assets/1.jpg"; // Import the image
import "../styles/patientdashboard.css";
import PatientNavbar from "./PatientNavbar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Footer from "../component/Footer";

// Register the components needed for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Sample health data (blood sugar levels, heart rate, SpO2, and daily fitness goal)
const bloodSugarData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Blood Sugar Levels (mg/dL)",
      data: [110, 115, 105, 120, 125, 130, 140],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const heartRateData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Heart Rate (bpm)",
      data: [70, 72, 68, 75, 80, 85, 90],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const spO2Data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "SpO2 Levels (%)",
      data: [98, 97, 98, 96, 95, 97, 99],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const fitnessGoalData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Daily Fitness Goal (steps)",
      data: [8000, 8500, 7000, 10000, 12000, 15000, 16000],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const features = [
  { name: "Profile", icon: faUser, alt: "Profile" },
  {
    name: "Book Appointment",
    icon: faCalendarCheck,
    alt: "Book Appointment",
    link: "/doctor-list",
  },
  { name: "Reports", icon: faFileAlt, alt: "Reports" },
  { name: "Doctor Details", icon: faStethoscope, alt: "Doctor Details" },
  { name: "Prescription", icon: faPrescriptionBottleAlt, alt: "Prescription" },
  { name: "Visits", icon: faHistory, alt: "Visits" },
];

function PatientDashboard() {
  return (
    <>
      <PatientNavbar />
      <div className="app-container">
        {/* Sidebar Section */}
        <div className="sidebar">
          <div className="profile-section">
            <img
              src={patientImage}
              alt="Patient Profile"
              className="profile-image"
            />
            <h3>Welcome, Mohit</h3> {/* Optionally make this dynamic */}
          </div>

          {/* Menu Items */}
          <div className="menu-container">
            {features.map((feature, index) =>
              feature.link ? (
                <Link to={feature.link} key={index} className="menu-item">
                  <FontAwesomeIcon icon={feature.icon} size="2x" />
                  <p>{feature.name}</p>
                </Link>
              ) : (
                <div className="menu-item" key={index}>
                  <FontAwesomeIcon icon={feature.icon} size="2x" />
                  <p>{feature.name}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          <h3>Health Overview</h3>
          <div className="graphs-grid">
            <div className="graph-container">
              <h4>Blood Sugar Levels</h4>
              <Line data={bloodSugarData} />
            </div>
            <div className="graph-container">
              <h4>Heart Rate</h4>
              <Line data={heartRateData} />
            </div>
            <div className="graph-container">
              <h4>SpO2 Levels</h4>
              <Line data={spO2Data} />
            </div>
            <div className="graph-container">
              <h4>Daily Fitness Goal</h4>
              <Line data={fitnessGoalData} />
            </div>
          </div>
        </div>

      
      </div>
      <footer className="dashboard-footer">
          <p>
            &copy; {new Date().getFullYear()} iomt hub. All rights
            reserved.
          </p>
          <p>
            Contact us at{" "}
            <a href="mailto:support@medicare.com">support@iomt.com</a>
          </p>
        </footer>
    </>
  );
}

export default PatientDashboard;
