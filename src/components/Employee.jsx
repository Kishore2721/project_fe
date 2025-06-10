import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader, Container, Table } from "react-bootstrap";
import './Employee.css'

const Employee = () => {
       const navigate = useNavigate()
  const location = useLocation();
  const employee = location.state;
  // const emp = employee.filter((e)=>e.id === param.id);
  return (
  <div
      style={{
  backgroundImage: `url("https://wallpapers.com/images/hd/full-hd-car-black-lamborghini-tahul7hyi0cfet43.jpg")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  padding: "2rem",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "white",
  backgroundColor: "#000",
}}

    >
  
    <Container className="w-75 mt-5 ">
      <Card>
        <Card.Header className="text-center d-flex align-items-center justify-content-between">
          <i className="bi bi-arrow-left icon ms-2"></i>
          <h2>My Services</h2>
          <div className='d-flex align-items-center'>
            <i class="bi bi-person-circle me-1 text-primary profile-icon" ></i>
            <strong className='me-2'> Employee ID :101 </strong>
            </div>
          {/* {employee.id} */}
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between  mb-2 bg-primary rounded-2">
                <strong className='p-3 '>Kishore G</strong>
          </div>
         
         <Card>
             <CardHeader >
                <h5>Customer ID :</h5>
                
             </CardHeader>
             <CardBody>
                <Table striped bordered hover responsive className="text-center">
                    <thead>
              <tr>
                <th>Appointment Date</th>
                <th>Customer Name</th>
                <th>Contact Number</th>
                <th>Customer City</th>
                <th>Vehicle Model</th>
                 <th>Service Type</th>
                <th>Status</th>
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
                <td>
                  <select>
                    <option className="completed">Completed</option>
                  <option className="pending">Pending</option>
                  <option className="not-started">Not Started</option>
                  </select>
                </td>
                </tr>
              </tbody>
                </Table>
             </CardBody>
         </Card>
        </Card.Body>
        {/* <Card.Footer>
          <Button className="btn btn-primary">Assigned works</Button>
        </Card.Footer> */}
      </Card>
    </Container>
    </div>
  )
}

export default Employee

