import React from 'react';
import HospitalCard from './HospitalCard';

const NearbyHospitals = () => {
    const hospitals = [
      {
        name: 'Smart Hospital A',
        location: '123 Health Street, Cityville',
        services: ['24/7 Emergency', 'IoMT Devices', 'Telemedicine'],
        contact: '555-123-4567',
      },
      {
        name: 'TechCare Hospital',
        location: '456 Wellness Rd, Healthtown',
        services: ['Virtual Care', 'Wearable Monitoring', 'ICU with IoMT'],
        contact: '555-987-6543',
      },
      {
        name: 'MedTech Hospital',
        location: '789 Cure Ave, Medicity',
        services: ['Remote Monitoring', 'IoMT Imaging', 'Personalized Treatment'],
        contact: '555-555-5555',
      },
    ];
  
    return (
      <div style={styles.container}>
        <h2 style={styles.heading}>Nearby IoMT-Based Smart Hospitals</h2>
        <div style={styles.cardContainer}>
          {hospitals.map((hospital, index) => (
            <HospitalCard key={index} hospital={hospital} />
          ))}
        </div>
      </div>
    );
  };
  
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    heading: {
      fontSize: '28px',
      marginBottom: '20px',
      color: '#333',
      fontWeight: '600',
    },
    cardContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '15px',
    },
  };
  
  export default NearbyHospitals;