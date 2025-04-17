import React, { useState, useEffect } from 'react';
import { FaUserMd, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaLanguage, FaClock } from 'react-icons/fa';
import Sidebar from './Sidebar';
import DoctorNavbar from './DoctorNavbar';
import image from '../assets/sam.jpg';

const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const mockDoctorData = {
      name: "Dr. Shubham Chamoli",
      specialization: "Physician",
      bio: "Demonstrated work in the field of Physiology with 1k+ successful patient recoveries.",
      degree: "Ph.D | MBBS | Delhi University",
      email: "shubhamchamoli8218035988@gmail.com",
      state: "Andhra Pradesh",
      workload: 74,
      experience: "10+ years",
      languages: "English, Hindi, Telugu",
      availability: "Mon - Fri (10 AM - 5 PM)",
      image: "https://via.placeholder.com/150",
    };
    setDoctor(mockDoctorData);
  }, []);

  if (!doctor) return <p style={{ padding: '2rem', textAlign: 'center' }}>Loading profile...</p>;

  const styles = {
    container: {
      display: 'flex',
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
    },
    dashboard: {
      flex: 1,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
    profileCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid #007bff',
    },
    profileInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    followButton: {
      marginTop: '0.5rem',
      padding: '0.5rem 1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '500',
      alignSelf: 'flex-start',
    },
    cardHeader: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#333',
    },
    cardBody: {
      fontSize: '1rem',
      color: '#555',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    infoRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    icon: {
      color: '#007bff',
      minWidth: '20px',
    },
  };

  return (
    <>
      <DoctorNavbar />
      <div style={styles.container}>
        <Sidebar />
        <div style={styles.dashboard}>
          {/* Profile Card */}
          <div style={{ ...styles.card, ...styles.profileCard }}>
            <img
              src={image || doctor.image}
              alt={doctor.name}
              style={styles.profileImage}
            />
            <div style={styles.profileInfo}>
              <h1 style={{ margin: 0 }}>{doctor.name}</h1>
              <p style={{ margin: '0.25rem 0', color: '#666' }}>{doctor.specialization}</p>
              <button style={styles.followButton}>Follow</button>
            </div>
          </div>

          {/* About Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>About</div>
            <div style={styles.cardBody}>
              <p>{doctor.bio}</p>
            </div>
          </div>

          {/* Additional Details Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>Professional Information</div>
            <div style={styles.cardBody}>
              <div style={styles.infoRow}>
                <FaGraduationCap style={styles.icon} />
                <span><strong>Degree:</strong> {doctor.degree}</span>
              </div>
              <div style={styles.infoRow}>
                <FaBriefcase style={styles.icon} />
                <span><strong>Experience:</strong> {doctor.experience}</span>
              </div>
              <div style={styles.infoRow}>
                <FaUserMd style={styles.icon} />
                <span><strong>Specialization:</strong> {doctor.specialization}</span>
              </div>
              <div style={styles.infoRow}>
                <FaLanguage style={styles.icon} />
                <span><strong>Languages:</strong> {doctor.languages}</span>
              </div>
              <div style={styles.infoRow}>
                <FaClock style={styles.icon} />
                <span><strong>Availability:</strong> {doctor.availability}</span>
              </div>
              <div style={styles.infoRow}>
                <FaEnvelope style={styles.icon} />
                <span><strong>Email:</strong> {doctor.email}</span>
              </div>
              <div style={styles.infoRow}>
                <FaMapMarkerAlt style={styles.icon} />
                <span><strong>State:</strong> {doctor.state}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;




