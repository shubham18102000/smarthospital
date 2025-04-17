
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "../styles/PatientProfile.css";

const PatientProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const patient = location.state?.patient;

  const [status, setStatus] = useState(patient?.inventoryStatus || "");
  const [prescription, setPrescription] = useState("");
  const [sensorData, setSensorData] = useState({
    bpm: "Loading...",
    spo2: "Loading...",
    ecg: "Loading...",
    date: "Loading...",
  });

  const statusOptions = [
    { label: "Admitted", value: "Admitted" },
    { label: "Under Treatment", value: "Under Treatment" },
    { label: "Discharged", value: "Discharged" },
    { label: "Critical", value: "Critical" },
  ];

  const handleStatusChange = () => {
    patient.inventoryStatus = status;
    alert(`Patient status updated to ${status}`);
  };

  const handlePrescriptionSubmit = () => {
    alert(`Prescription submitted: ${prescription}`);
  };

  const handleBack = () => {
    navigate("/patients");
  };

  // Fetch sensor data (BPM, SpO2, ECG)
  const fetchSensorData = async () => {
    try {
      const response = await fetch("http://localhost:3001/sensor-data");
      const ecgResponse = await fetch("http://localhost:3001/ecg-data");

      if (response.ok && ecgResponse.ok) {
        const data = await response.json();
        const ecgData = await ecgResponse.json();

        setSensorData({
          bpm: data.bpm,
          spo2: data.spo2,
          ecg: ecgData.ecg || "No Data",
          date: new Date(ecgData.date).toLocaleString(),
        });
      } else {
        console.error("Failed to fetch sensor data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching sensor data:", error);
    }
  };

  // Fetch data on component mount and update every 5 seconds
  useEffect(() => {
    fetchSensorData();
    const intervalId = setInterval(fetchSensorData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  if (!patient) {
    return <div>Patient not found</div>;
  }
  const getHealthStatusColor = () => {
    const { bpm, spo2, ecg } = sensorData;

    const isBpmNormal = bpm >= 60 && bpm <= 100;
    const isSpo2Normal = spo2 >= 95;
    const isEcgNormal = ecg >= 1 && ecg <= 3;

    const isBpmAverage = (bpm > 100 && bpm <= 110) || (bpm >= 50 && bpm < 60);
    const isSpo2Average = spo2 >= 90 && spo2 < 95;
    const isEcgAverage = (ecg > 3 && ecg <= 4) || (ecg > 0.5 && ecg < 1);

    if (isBpmNormal && isSpo2Normal && isEcgNormal) return "green";
    if (isBpmAverage || isSpo2Average || isEcgAverage) return "orange";
    return "red";
  };

  return (
    <div className="patient-profile-container">
      {/* Profile Section (Left Side) */}
      <div className="patient-profile">
  {/* Header Section */}
  <div className="patient-profile-header">
    <img
      src={patient.image}
      alt={patient.name}
      className="patient-image"
    />
    <div className="patient-info">
      <h3>{patient.name}</h3>
      <p>{patient.category}</p>
    </div>
  </div>

  {/* Patient Details */}
  <div className="patient-details">
    <p><strong>Address:</strong> {patient.Address}</p>
    <p><strong>Health Status:</strong> 
      <Rating value={patient.rating} readOnly cancel={false} />
    </p>
    <p><strong>Status:</strong> {status}</p>
  </div>

  {/* Update Status */}
  <div className="update-status">
    <h4>Update Status</h4>
    <Dropdown
      value={status}
      options={statusOptions}
      onChange={(e) => setStatus(e.value)}
      placeholder="Select a Status"
      className="status-dropdown"
    />
    <Button
      label="Update Status"
      onClick={handleStatusChange}
      className="update-button"
    />
  </div>

  {/* Digital Prescription */}
  <div className="prescription">
    <h4>Digital Prescription</h4>
    <InputText
      value={prescription}
      onChange={(e) => setPrescription(e.target.value)}
      placeholder="Enter Prescription"
      className="prescription-input"
    />
    <Button
      label="Submit Prescription"
      onClick={handlePrescriptionSubmit}
      className="submit-button"
    />
  </div>

  {/* Back Button */}
  <Button
    label="Back to Patients"
    onClick={handleBack}
    className="back-button"
  />
</div>

      {/* Sidebar Section (Right Side for Live Data) */}
      <aside className="patient-sidebar">
        <div className="live-data">
          <h4>Live Data</h4>
          <p>
            <strong>Oximeter Level:</strong> {patient.oximeterLevel} %
          </p>
          <p>
            <strong>Blood Pressure:</strong> {patient.bloodPressure} mmHg
          </p>
          <p>
            <strong>BPM:</strong> {sensorData.bpm} bpm
          </p>
          <p>
            <strong>SpO2:</strong> {sensorData.spo2} %
          </p>
          <p>
            <strong>ECG:</strong> {sensorData.ecg} mV{" "}
          </p>
          <p>
            <strong>Date:</strong> {sensorData.date}
          </p>
          <br></br>
          <p>
            <strong> Health indicator</strong>
          </p>
          <div
            className="health-indicator"
            style={{ backgroundColor: getHealthStatusColor() }} 
          ></div>
          
        </div>

        <div className="static-details">
          <h4>Static Details</h4>
          <p>
            <strong>Blood Group:</strong> {patient.bloodGroup}
          </p>
          <p>
            <strong>Diabetic Status:</strong>{" "}
            {patient.diabeticStatus ? "Yes" : "No"}
          </p>
          <p>
            <strong>Weight:</strong> {patient.weight} kg
          </p>
          <p>
            <strong>Disability:</strong> {patient.disability ? "Yes" : "No"}
          </p>
        </div>
      </aside>
    </div>
  );
};

export default PatientProfile;

