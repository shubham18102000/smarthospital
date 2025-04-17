import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Link } from 'react-router-dom';

import logo1 from '../assets/1.jpg';
import logo2 from '../assets/2.jpg';
import DoctorNavbar from './DoctorNavbar';
import PatientProfile from '../componentpatient/PatientProfile';

import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import { Tooltip } from 'primereact/tooltip'; // Add this import at the top


const samplePatients = [
  {
    id: 1,
    name: 'Mohit',
    image: logo1,
    Address: 'Dehradun',
    category: 'Cardiology',
    rating: 3.5,
    inventoryStatus: 'Admitted',
  },
  {
    id: 2,
    name: 'Ram',
    image: logo1,
    Address: 'Delhi',
    category: 'Cardiology',
    rating: 3,
    inventoryStatus: 'Under Treatment',
  },
  {
    id: 3,
    name: 'Sheetal',
    image: logo2,
    Address: 'Mumbai',
    category: 'Cardiology',
    rating: 5,
    inventoryStatus: 'Discharged',
  },
  {
    id: 4,
    name: 'Mayank',
    image: logo1,
    Address: 'Bangalore',
    category: 'Cardiology',
    rating: 1,
    inventoryStatus: 'Critical',
  },
];

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [displayProfile, setDisplayProfile] = useState(false);

  useEffect(() => {
    setPatients(samplePatients);
  }, []);

  const imageBodyTemplate = (patient) => {
    return (
      <img
        src={patient.image}
        alt={patient.name}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          objectFit: 'cover',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      />
    );
  };

  const addressBodyTemplate = (patient) => {
    return <span>{patient.Address}</span>;
  };

  const ratingBodyTemplate = (patient) => {
    return <Rating value={patient.rating} readOnly cancel={false} stars={5} />;
  };

  const statusBodyTemplate = (patient) => {
    return <Tag value={patient.inventoryStatus} severity={getSeverity(patient)} />;
  };

  const getSeverity = (patient) => {
    switch (patient.inventoryStatus) {
      case 'Admitted':
        return 'success';
      case 'Under Treatment':
        return 'warning';
      case 'Discharged':
        return 'info';
      case 'Critical':
        return 'danger';
      default:
        return null;
    }
  };

  const handleProfileClick = (patient) => {
    setSelectedPatient(patient);
    setDisplayProfile(true);
  };

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    background: '#fff',
    borderRadius: '12px',
    padding: '1rem',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    overflowX: 'auto',
  };

  return (
    <>
      <DoctorNavbar />
      <div style={containerStyle}>
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '1rem', color: '#333' }}>Patient List</h2>
          <DataTable
            value={patients}
            tableStyle={{ minWidth: '60rem' }}
            responsiveLayout="scroll"
            stripedRows
          >
            <Column field="name" header="Name" style={{ minWidth: '120px' }} />
            <Column header="Image" body={imageBodyTemplate} style={{ width: '100px' }} />
            <Column field="Address" header="Address" body={addressBodyTemplate} />
            <Column field="category" header="Category" />
            <Column field="rating" header="Health Status" body={ratingBodyTemplate} />
            <Column header="Status" body={statusBodyTemplate} />
            <Column
              header="Action"
              body={(patient) => (
                <Link to={`/patient/${patient.id}`} state={{ patient }}>
                  <Button
                    label="View Profile"
                    icon="pi pi-eye"
                    className="p-button-sm p-button-info"
                  />
                </Link>
              )}
            />
          </DataTable>
        </div>
      </div>

      {selectedPatient && (
        <PatientProfile
          patient={selectedPatient}
          visible={displayProfile}
          onHide={() => setDisplayProfile(false)}
        />
      )}
    </>
  );
}


