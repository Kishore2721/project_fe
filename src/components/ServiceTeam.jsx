import React, { useEffect } from "react";
import { Card, Row, Col, CardFooter, CardBody } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import './ServiceTeam.css'
import axios from "axios";

const ServiceTeam = ({ employees, setEmployees }) => {
  const navigate = useNavigate();
  const location = useLocation();

  async function getData(){
    const response = await axios.get("http://localhost:9090/employee/viewemp");
    setEmployees(response.data)
  }
  useEffect(() => {
      getData();
  },[])

  const handleDelete = async(deleteId) => {
    if(confirm("Are you sure you want to delete this entry?")){
       console.log("Attempting to delete ID:", deleteId);
      const response=await axios.delete(`http://localhost:9090/employee/deleteemp/${deleteId}`);
      if(response.status === 202 && deleteId === response.data.empId){
        alert("Entry deleted successfully");
      }else {
        alert("Failed to delete entry. Please try again.");
      }
      getData();
    }
  }

  const handleViewOne =async(emp)=>{
    const response = await axios.get("http://localhost:9090/employee/oneemp/"+emp.empId);
      if (response.status === 202) {
      navigate("/employeedetails", { state: { employee: response.data } });
    } else {
      alert("Employee not found");
    }
      
  }
  return (
    <div className="">
      <Row xs={1} md={5} className="g-2">
        {employees.map((emp) => (
          <Col key={emp.empId}>
            <Card.Body >
              <div className="card m-2 ">                
                  <Card.Header className="service-team-card-bg text-white">
                    <h4>{emp.empName}</h4>
                  </Card.Header>
                
                <CardBody onClick={()=>handleViewOne(emp)}>
                  <h6>ID: {emp.empId}</h6>
                  <h6>Place: {emp.empState}</h6>
                  <h6>Contact: {emp.empPhone}</h6>
                  <h6>Joined: {emp.empJoinDate}</h6>
                </CardBody>
                <CardFooter className="text-center">
                  <button className="delete-btn rounded-2 text-white" type="submit" onClick={() => handleDelete(emp.empId)}>Delete</button>
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

