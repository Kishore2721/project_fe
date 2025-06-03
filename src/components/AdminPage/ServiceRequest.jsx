import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

const ServiceRequest = () => {
  const navigate = useNavigate();

  return (
    <Container className="w-75 mt-5">
      <Card>
        <Card.Header className="d-flex align-items-center">
          <i
            className="bi bi-arrow-left btn btn-warning me-2"
            onClick={() => navigate("/")}
          ></i>
          <h1>Service Request</h1>
        </Card.Header>

        <Card.Body>
          <Table striped bordered hover responsive className="text-center">
            <thead>
              <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Contact Number</th>
                <th>Vehicle Model</th>
                <th>Appointment Date</th>
                <th>Service Type</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FMR101</td>
                <td>abcd</td>
                <td>745348</td>
                <td>INBVG</td>
                <td>01-06-2025</td>
                <td>General</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceRequest;
