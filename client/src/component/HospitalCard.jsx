import React from 'react';
import { FaHospitalAlt, FaHeartbeat, FaRegClock, FaTv } from 'react-icons/fa'; // Importing icons from React Icons

const HospitalCard = ({ hospital }) => {
  const { name, location, services, contact } = hospital;

  const getServiceIcon = (service) => {
    switch (service) {
      case '24/7 Emergency':
        return <FaRegClock style={styles.icon} />;
      case 'IoMT Devices':
        return <FaHeartbeat style={styles.icon} />;
      case 'Telemedicine':
        return <FaTv style={styles.icon} />;
      default:
        return <FaHospitalAlt style={styles.icon} />;
    }
  };

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>{name}</h3>
        <p style={styles.location}>{location}</p>
      </div>
      <div style={styles.cardBody}>
        <ul style={styles.services}>
          {services.map((service, index) => (
            <li key={index} style={styles.serviceItem}>
              {getServiceIcon(service)}
              <span style={styles.serviceText}>{service}</span>
            </li>
          ))}
        </ul>
        <p style={styles.contact}>Contact: {contact}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '280px',
    padding: '20px',
    margin: '15px',
    borderRadius: '12px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    background: 'linear-gradient(to right, #f7f7f7, #ffffff)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  cardHeader: {
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
    marginBottom: '10px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#333',
    margin: 0,
  },
  location: {
    fontSize: '14px',
    color: '#777',
    marginTop: '5px',
  },
  cardBody: {
    paddingTop: '10px',
  },
  services: {
    listStyleType: 'none',
    padding: '0',
    marginBottom: '15px',
  },
  serviceItem: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  serviceText: {
    marginLeft: '8px',
  },
  icon: {
    fontSize: '18px',
    color: '#007BFF',
  },
  contact: {
    fontSize: '14px',
    color: '#007BFF',
    fontWeight: '500',
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
  },
};

export default HospitalCard;

