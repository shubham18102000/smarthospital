
import React from 'react';
import logo from '../assets/logo.jpg';

const PatientNavbar = ({ onLogin, onLogout, isLoggedIn }) => {
  const styles = {
    navbar: {
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      height: '40px',
      width: '40px',
      borderRadius: '50%',
      marginRight: '10px',
      objectFit: 'cover',
    },
    logoText: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#333',
    },
    buttonContainer: {
      display: 'flex',
      gap: '1rem',
    },
    button: {
      padding: '0.5rem 1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <img src={logo} alt="Doctor Logo" style={styles.logo} />
        <span style={styles.logoText}>Patient Portal</span>
      </div>
      <div style={styles.buttonContainer}>
        {isLoggedIn ? (
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            onClick={onLogout}
          >
            Logout
          </button>
        ) : (
          <button
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            onClick={onLogin}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default PatientNavbar;
