import React, { useEffect } from "react";
import { Card, Row, Col, CardFooter, CardBody } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import './ServiceTeam.css'

const ServiceTeam = ({ employees, setEmployees }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleDelete = (id) => {
    const deleteEmployee = employees.filter((empId) => empId.id !== id)
    setEmployees(deleteEmployee);
  }

  return (
    <div className=" ">
      <Row xs={1} md={5} className="g-2">
        {employees.map((emp) => (
          <Col key={emp.id}>
            <Card.Body >
              <div className="card m-2 ">
                {/* <h4>Name:{emp.name}</h4> */}
                <h4>
                  <Card.Header className="service-team-card-bg text-white">
                    {emp.name}
                  </Card.Header>
                </h4>
                <CardBody onClick={() => navigate("/employeedetails", { state: emp })}>
                  <h6>ID: {emp.id}</h6>
                  <h6>Place: {emp.state}</h6>
                  <h6>Contact: {emp.phone}</h6>
                  <h6>Joined: {emp.joinDate}</h6>
                </CardBody>
                <CardFooter className="text-center">
                  <button className="delete-btn rounded-2 text-white" type="submit" onClick={() => handleDelete(emp.id)}>Delete</button>
                </CardFooter>
              </div>
            </Card.Body>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServiceTeam;

