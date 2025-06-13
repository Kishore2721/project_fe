import React from 'react';
import { Card, Table, Button, Badge, CardHeader } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserStatus.css'

const UserStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appointmentData = location.state || {
    
  };
 
  // Mock status data
  const statusData = {
    isCompleted: false,
    completionDate: '2023-05-21T15:00'
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-20">

          <Card>
            <CardHeader className="d-flex align-items-center  bg-color">
               <i className="bi bi-arrow-left me-2 icon" onClick={() => navigate('/')}></i>
              <h1>Your Service Status</h1>
            </CardHeader>
            <Card.Body >

              
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Vehicle Model</th>
                    <th>Service Type</th>
                    <th>Status</th>
                    <th>Completion Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{appointmentData.username}</td>
                    <td>{appointmentData.vehicleModel}</td>
                    <td>{appointmentData.serviceType}</td>
                    <td>
                      {statusData.isCompleted ? (
                        <Badge bg="success">Completed</Badge>
                      ) : (
                        <Badge bg="warning">In Progress</Badge>
                      )}
                    </td>
                    <td>
                      {statusData.isCompleted 
                        ? new Date(statusData.completionDate).toLocaleString()
                        : 'Estimated: ' + new Date(statusData.completionDate).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="mt-8">
                <Card>
                  <Card.Header className='card2-bg-color'>
                    <h3>Appointment Details</h3></Card.Header>
                  <Card.Body>
                    <p><strong>Complaint/Issue:</strong> {appointmentData.complaint}</p>
                    <p><strong>Appointment Date:</strong> {new Date(appointmentData.appointmentDate).toLocaleString()}</p>
                  </Card.Body>
                </Card>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;