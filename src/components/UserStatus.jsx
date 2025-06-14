import React from "react";
import { Card, Table, Button, Badge, CardHeader } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./UserStatus.css";

const UserStatus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const appointmentData = location.state || {};

  // Mock status data
  const statusData = {
    isCompleted: false,
    completionDate: "2023-05-21T15:00",
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-20">
          <Card>
            <CardHeader className="d-flex align-items-center justify-content-between bg-color">
              <div className="d-flex align-items-center">
                <i
                  className="bi bi-arrow-left me-2 icon"
                  onClick={() => navigate("/")}
                ></i>
                <h3>Your Service Status</h3>
              </div>
              <h3 className="me-3">Name : Kiran</h3>
            </CardHeader>
            <Card.Body>
              <div className="mt-3">
                <Card>
                  <Card.Header className="card2-bg-color">
                    <h3>Appointment Details</h3>
                  </Card.Header>
                  <Card.Body>
                    <Table striped bordered hover responsive>
                      <thead>
                        <tr>
                          <th>Registration Number</th>
                          <th>Vehicle Model</th>
                          <th>Service Type</th>
                          <th>Requested Time</th>
                          <th>Assigned Time</th>
                          <th>Completed Time</th>
                          <th>Status</th>
                          <th>Completion Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
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
