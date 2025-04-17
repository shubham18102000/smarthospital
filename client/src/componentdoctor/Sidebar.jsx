import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: '250px',
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      boxShadow: '2px 0 10px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem 0',
      position: 'sticky',
      top: '20px'
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.75rem 1.25rem',
      fontSize: '1rem',
      color: '#333',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    },
    icon: {
      marginRight: '0.75rem',
      fontSize: '1.2rem',
    },
    hoverEffect: {
      backgroundColor: '#f0f4ff',
      color: '#007bff',
    },
  };

  const navItems = [
    { icon: 'bi-house', label: 'Home', to: '/' },
    { icon: 'bi-speedometer2', label: 'Dashboard', to: '/dashboard' },
    { icon: 'bi-table', label: 'Reports', to: '/reports' },
    { icon: 'bi-people', label: 'Patients', to: '/patients' },
    { icon: 'bi-bag', label: 'Pending Cases', to: '/pending' },
    { icon: 'bi-calendar-check', label: 'Appointments', to: '/appointments' },
    { icon: 'bi-gear', label: 'Settings', to: '/settings' },
    { icon: 'bi-box-arrow-right', label: 'Logout', to: '/logout' },
  ];

  return (
    <div style={styles.sidebar}>
      <ul style={styles.list}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              style={styles.item}
              onMouseEnter={(e) => Object.assign(e.target.style, styles.hoverEffect)}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#333';
              }}
            >
              <i className={`bi ${item.icon}`} style={styles.icon}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
