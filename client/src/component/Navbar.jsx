import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const HospitalNavbar = () => {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-logo d-flex align-items-center">
            <img src={logo} alt="Doctor Logo" className="logo me-2" />
            <span className="brand-name">IoMT Health Hub</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-links">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/doctor-login">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/patientlogin">Patients</Nav.Link>
              <Nav.Link as={Link} to="/appointments">Hospitals</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contributors</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style>{`
        .custom-navbar {
          background-color: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          padding: 0.8rem 1rem;
        }

        .navbar-logo .logo {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .brand-name {
          font-weight: 600;
          font-size: 1.3rem;
          color: #004080;
        }

        .navbar-links .nav-link {
          margin-left: 15px;
          font-size: 1rem;
          color: #333;
          transition: color 0.3s, transform 0.3s;
          font-weight: 500;
        }

        .navbar-links .nav-link:hover {
          color: #007bff;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .navbar-links {
            text-align: center;
            margin-top: 10px;
          }
          .navbar-links .nav-link {
            margin-left: 0;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  );
};

export default HospitalNavbar;



