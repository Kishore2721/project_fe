import React, { useEffect } from "react";
import { Card, Row, Col, Button, Container, CardFooter, CardBody } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import './ServiceTeam.css'

const ServiceTeam = ({employees,setEmployees}) => {
  const navigate = useNavigate();
 

  // const[addedEmp ,setAddedEmp] = useState()

  const location=useLocation();
  // useEffect(()=>{
  //   if(location.state){
  //     if(location.state.addedEmployee){
  //       setEmployees(location.state.addedEmployee);
  //     }
  //     if(location.state.employees){
  //       setEmployees(location.state.employees);
  //     }
  //   }
  // },[location.state])

  // const goback =()=>{
  //   navigate('/',{state:{
  //     employees:employees
  //   }
  // });
  // };

  const handleDelete=(id)=>{
    const deleteEmployee = employees.filter((empId) => empId.id !== id)
    setEmployees(deleteEmployee);
  }

  return (
      <div className=" ">
        {/* min-vh-100  d-flex align-items-center justify-content-center  service-team-bg */}
    {/* <Container className="m-5" >   */}
      
      {/* <Card> */}
        {/* <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center ">
            <i className="bi bi-arrow-left btn icon me-2" onClick={goback}></i>
            <h1>Service Team</h1>
          </div>
          <div className="me-3">
            <Button className="btn btn-primary" onClick={()=>navigate("/addemployee" ,
              {state:{
              employees:employees}})}>Add Employee</Button>
          </div>
        </Card.Header> */}

        <Row xs={1} md={4} className="g-2">
          {employees.map((emp) => (
            <Col key={emp.id}>
              <Card.Body >
                <div className="card m-2 ">
                  {/* <h4>Name:{emp.name}</h4> */}
                  <h4>
                    <Card.Header style={{ backgroundColor: "burlywood" }}>
                      {emp.firstName}{emp.lastName}
                    </Card.Header>
                  </h4>
                  <CardBody onClick={() => navigate("/employeedetails", { state: emp })}>

                  <h6>ID: {emp.id}</h6>
                  <h6>Place: {emp.state}</h6>
                  <h6>Contact Number: {emp.contactNumber}</h6>
                  <h6>Joined Date: {emp.joinDate}</h6>
                  </CardBody>
                  <CardFooter className="text-center">
                  <Button className="btn btn-danger" type="submit" onClick={()=>handleDelete(emp.id)}>Delete</Button>
              </CardFooter>
                </div>
              </Card.Body>
              
            </Col>
          ))}
        </Row>
      {/* </Card> */}
    {/* // </Container> */}
              </div>
  );
};

export default ServiceTeam;

