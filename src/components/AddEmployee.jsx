import React, { useEffect, useState } from "react";
import './AddEmployee.css'

import {
    Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";

import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {

  const [employees,setEmployees]= useState([]);

  const [addNewEmp,setAddNewEmp] = useState({
    empId: "",
      empName: "",
      empEmail:"",
      empPassword:"",
      empPhone: "",
      empCity:"",
      empState:"",
      assignedWorks: "",
      workStatus: "",
      empJoinDate: "",
    
  });

  const location =useLocation();
  
  useEffect(()=>{
    if(location.state){
    if(location.state.employees){
      setEmployees(location.state.employees)
    }
  }
  },[location.state]);

  const handleChange =(event) =>{
     const { name, value } = event.target;
    setAddNewEmp({ ...addNewEmp, [name]: value });
  }

  const handleSubmit =async(event) =>{
    event.preventDefault();
    const response = await axios.post("http://localhost:9090/employee/addemp",addNewEmp);
    if(response.data.empId !==null && response.status ===201 ){
       alert("New Employee Added Successfully");
    }
    setAddNewEmp({
    empId: "",
      empName: "",
      empEmail:"",
      empPassword:"",
      empPhone: "",
      empCity:"",
      empState:"",
      assignedWorks: "",
      workStatus: "",
      empJoinDate: "",
    
  })
  }
 
  const navigate = useNavigate();
  const goback =()=>{
    navigate('/admin');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center  add-emp-bg">

    <Container className="w-50 ">
      <Card >
        <CardHeader className="text-center d-flex align-items-center admin-header-bg">
          <i className="bi bi-arrow-left me-2 icon" onClick={goback}></i>
          <h1 className="text-center">Add New Employee</h1>
          
          </CardHeader>
        <Form  onSubmit={handleSubmit}>
          <CardBody>
            <Row>
              <Col md={6} className="d-flex flex-column align-items-center">
                <Form.Group className="w-100 m-2" controlId="EmployeeId">
                  <Form.Label>Employee ID :</Form.Label>
                  
                    <Form.Control
                      type="text"
                      placeholder="Employee ID"
                      name="empId"
                      value={addNewEmp.empId}
                      aria-describedby="empId"
                      required
                      onChange={handleChange}
                    />
                  
                </Form.Group>
                <Form.Group controlId="name" className="w-100 m-2">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control required name="empName" value={addNewEmp.empName} type="text" placeholder="Name" onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="emailId" className="w-100 m-2">
                  <Form.Label>Email :</Form.Label>
                  <Form.Control required name="empEmail" value={addNewEmp.empEmail} type="email" placeholder="Email"  onChange={handleChange}/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="password" className="w-100 m-2">
                  <Form.Label>Password :</Form.Label>
                  <Form.Control
                    type="password"
                    name="empPassword"
                    value={addNewEmp.password}
                    placeholder="Enter password"
                    required
                    minLength={8}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Password must be at least 8 characters.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6} className="d-flex flex-column align-items-center">
                <Form.Group controlId="phone" className="w-100 m-2">
                  <Form.Label>Phone :</Form.Label>
                  <Form.Control
                    required
                    name="empPhone"
                    value={addNewEmp.empPhone}
                    type="number"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="w-100 m-2" controlId="joinedDate">
                  <Form.Label>Joined Date :</Form.Label>
                  <Form.Control type="date" required name="empJoinDate" value={addNewEmp.empJoinDate} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className="w-100 m-2" controlId="city">
                  <Form.Label>City :</Form.Label>
                  <Form.Control type="text" name="empCity" value={addNewEmp.empCity} placeholder="City" required onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="w-100 m-2" controlId="state">
                  <Form.Label>State :</Form.Label>
                  <Form.Control type="text" name="empState" value={addNewEmp.empState} placeholder="State" required onChange={handleChange} />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
           
          </CardBody>
          <CardFooter className="text-center admin-header-bg">
                <Button type="submit" className=" add-emp-btn">Add</Button>
          </CardFooter>
        </Form>
        
      </Card>
    </Container>
    </div>
  );
};

export default AddEmployee;
