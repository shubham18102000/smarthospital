import React from "react";
import "./MedicalExperts.css";

const experts = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Neurologist",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Emily Brown",
    specialty: "Orthopedic Surgeon",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Dr. Michael Green",
    specialty: "Pediatrician",
    image: "https://via.placeholder.com/150",
  },
];

const MedicalExperts = () => {
  return (
    <section className="experts-section">
      <div className="experts-container">
        <h2 className="experts-title">Our Medical Experts</h2>
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <img src={expert.image} alt={expert.name} className="expert-image" />
              <h3 className="expert-name">{expert.name}</h3>
              <p className="expert-specialty">{expert.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalExperts;
