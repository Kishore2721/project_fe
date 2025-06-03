import React from "react";
import { Card, Container } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const EmployeeDetails = () => {
  const param = useParams();
  const location = useLocation();
  const employee = location.state;
  // const emp = employee.filter((e)=>e.id === param.id);
  return (
    <Container className="w-25 mt-5 text-center">
      <Card>
        <Card.Header className="text-center ">
          <strong> Employee ID : {employee.id}</strong>
        </Card.Header>
        <Card.Body>
          <div>
            <i className="bi bi-person-fill"></i> <strong>Name : </strong>{" "}
            {employee.name}
          </div>
          <div>
            <i className="bi bi-telephone-fill"></i> <strong>Contact : </strong>{" "}
            {employee.contactNumber}
          </div>
          <div>
            <i className="bi bi-calendar2-check"></i>{" "}
            <strong>Joined Date : </strong> {employee.joinDate}
          </div>
        </Card.Body>
        <Card.Footer>
          <Button className="btn btn-primary">Assigned works</Button>
        </Card.Footer>
      </Card>
    </Container>
    
  );
};

export default EmployeeDetails;
