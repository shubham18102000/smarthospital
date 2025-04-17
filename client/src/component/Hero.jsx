// import React from "react";
// import { Button, Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../styles/Hero.css";
// import logo from "../assets/h.jpg";

// const Hero = () => {
//   return (
//     <>
//       <div className="hero-section">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6} className="text-center text-md-start">
//               <h1 className="hero-title">
//                 Empowering Healthcare with IoMT-Enabled Management
//               </h1>
//               <p className="hero-description">
//                 Connecting Health and Innovation for Better Care.
//               </p>
//               <Button href="#appointments" variant="primary" className="me-3">
//                 Make an Appointment
//               </Button>
//               <Button href="#services" variant="outline-primary">
//                 View Services
//               </Button>
//             </Col>
//             <Col md={6}>
//               <img src={logo} alt="Hospital" className="img-fluid" />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// };

// export default Hero;


import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md={6} className="text-center text-md-start text-white">
            <h1 className="hero-title">
              Empowering Healthcare with IoMT-Enabled Management
            </h1>
            <p className="hero-description">
              Connecting Health and Innovation for Better Care.
            </p>
            <Button href="#appointments" variant="light" className="me-3">
              Make an Appointment
            </Button>
            <Button href="#services" variant="outline-light">
              View Services
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
