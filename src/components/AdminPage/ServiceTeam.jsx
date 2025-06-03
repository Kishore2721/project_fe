import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ServiceTeam = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([
    {
      id: "FMR201",
      name: "Ravi Kumar",
      contactNumber: "9876543210",
      place: "Chennai",
      assignedWorks: "Engine Oil Change",
      workStatus: "In Progress",
      joinDate: "23-05-2011",
    },
    {
      id: "FMR202",
      name: "Sathish M",
      contactNumber: "9845123789",
      place: "Coimbatore",
      assignedWorks: "Full Body Wash",
      workStatus: "Completed",
      joinDate: "11-07-2010",
    },
    {
      id: "FMR203",
      name: "Kishore G",
      contactNumber: "9567891234",
      place: "Monday Market",
      assignedWorks: "Brake Inspection",
      workStatus: "In Progress",
      joinDate: "10-01-2015",
    },
    {
      id: "FMR204",
      name: "Vignesh R",
      contactNumber: "9012345678",
      place: "Madurai",
      assignedWorks: "AC Service",
      workStatus: "Pending",
      joinDate: "01-06-2007",
    },
    {
      id: "FMR205",
      name: "Anitha P",
      contactNumber: "9988776655",
      place: "Trichy",
      assignedWorks: "Interior Cleaning",
      workStatus: "Completed",
      joinDate: "20-05-2019",
    },
    {
      id: "FMR206",
      name: "Rahul V",
      contactNumber: "9123456780",
      place: "Salem",
      assignedWorks: "Battery Replacement",
      workStatus: "In Progress",
      joinDate: "29-12-2017",
    },
    {
      id: "FMR207",
      name: "Sneha S",
      contactNumber: "9871234560",
      place: "Erode",
      assignedWorks: "Wheel Alignment",
      workStatus: "Completed",
      joinDate: "21-04-2016",
    },
    {
      id: "FMR208",
      name: "Arjun N",
      contactNumber: "9123987654",
      place: "Tirunelveli",
      assignedWorks: "Gearbox Check",
      workStatus: "Pending",
      joinDate: "29-09-2009",
    },
    {
      id: "FMR209",
      name: "Meena L",
      contactNumber: "9012763458",
      place: "Nagercoil",
      assignedWorks: "Paint Touch-up",
      workStatus: "Completed",
      joinDate: "15-01-2015",
    },
    {
      id: "FMR210",
      name: "Rajesh P",
      contactNumber: "9567123490",
      place: "Trivandrum",
      assignedWorks: "Tyre Change",
      workStatus: "In Progress",
      joinDate: "13-03-2020",
    },
  ]);
  return (
    <Container className="mt-5">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center ">
            <i className="bi bi-arrow-left btn btn-warning me-2"></i>
            <h1>Service Team</h1>
          </div>
          <div className="me-3">
            <Button className="btn btn-primary" onClick={()=>navigate("/addemployee")}>Add Employee</Button>
          </div>
        </Card.Header>

        <Row xs={1} md={4} className="g-1">
          {employees.map((emp) => (
            <Col key={emp.id}>
              <Card.Body onClick={() => navigate("/employee", { state: emp })}>
                <div className="card m-2 p-2">
                  {/* <h4>Name:{emp.name}</h4> */}
                  <h4>
                    <Card.Header style={{ backgroundColor: "burlywood" }}>
                      {emp.name}
                    </Card.Header>
                  </h4>
                  <h6>ID: {emp.id}</h6>
                  <h6>Place: {emp.place}</h6>
                  <h6>Contact Number: {emp.contactNumber}</h6>
                  <h6>Joined Date: {emp.joinDate}</h6>
                </div>
              </Card.Body>
            </Col>
          ))}
        </Row>
      </Card>
    </Container>
  );
};

export default ServiceTeam;

