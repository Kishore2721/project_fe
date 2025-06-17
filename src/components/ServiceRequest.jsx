import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import './ServiceRequest.css'

const ServiceRequest = () => {
  const [user,setUser] = useState(
    [
  {
    customerId: "CUST001",
    customerName: "Arun Kumar",
    contactNumber: "9876543210",
    customerCity:"Chennai",
    vehicleModel: "Hyundai i20",
    appointmentDate: "2025-06-05",
    serviceType: "General Service"
  },
  {
    customerId: "CUST002",
    customerName: "Divya Ramesh",
    contactNumber: "9845098765",
    customerCity:"Chennai",
    vehicleModel: "Maruti Swift",
    appointmentDate: "2025-06-06",
    serviceType: "Oil Change"
  },
  {
    customerId: "CUST003",
    customerName: "Rajesh Nair",
    contactNumber: "9994432112",
    customerCity:"Chennai",
    vehicleModel: "Honda City",
    appointmentDate: "2025-06-07",
    serviceType: "Brake Repair"
  },
  {
    customerId: "CUST004",
    customerName: "Meera Suresh",
    contactNumber: "9733123456",
    customerCity:"Chennai",
    vehicleModel: "Tata Nexon",
    appointmentDate: "2025-06-08",
    serviceType: "Engine Check"
  },
  {
    customerId: "CUST005",
    customerName: "Vikram Das",
    contactNumber: "9887654321",
    customerCity:"Chennai",
    vehicleModel: "Mahindra XUV300",
    appointmentDate: "2025-06-09",
    serviceType: "Tyre Replacement"
  },
  {
    customerId: "CUST006",
    customerName: "Sneha Menon",
    customerCity:"Chennai",
    contactNumber: "9753178421",
    vehicleModel: "Kia Seltos",
    appointmentDate: "2025-06-10",
    serviceType: "AC Repair"
  },
  {
    customerId: "CUST007",
    customerName: "Anil Joseph",
    customerCity:"Chennai",
    contactNumber: "9443221100",
    vehicleModel: "Renault Kwid",
    appointmentDate: "2025-06-11",
    serviceType: "Battery Check"
  },
  {
    customerId: "CUST008",
    customerName: "Priya Varma",
    customerCity:"Chennai",
    contactNumber: "9988776655",
    vehicleModel: "Toyota Innova",
    appointmentDate: "2025-06-12",
    serviceType: "Full Service"
  },
  {
    customerId: "CUST009",
    customerName: "Kiran Babu",
    customerCity:"Chennai",
    contactNumber: "9898989898",
    vehicleModel: "Ford EcoSport",
    appointmentDate: "2025-06-13",
    serviceType: "Wheel Alignment"
  },
  {
    customerId: "CUST010",
    customerName: "Lakshmi Devi",
    customerCity:"Chennai",
    contactNumber: "9765432189",
    vehicleModel: "MG Hector",
    appointmentDate: "2025-06-14",
    serviceType: "Insurance Renewal"
  }
]);

  const navigate = useNavigate();

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center request-bg-img">

    <Container className="w-100 mt-5 mb-4">
      <Card>
        <Card.Header className="d-flex align-items-center request-header-bg">
          <i
            className="bi bi-arrow-left me-2 icon"
            onClick={() => navigate("/admin", { state: { serviceRequests: user }})}
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
                <th>Customer city</th>
                <th>Registration Number</th>
                <th>Vehicle Model</th>
                <th>Appointment Date</th>
                <th>Service Type</th>
                <th colSpan={2}>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
             {user.map((user,index) =>
              <tr key={index}>
                <td>{user.customerId}</td>
                <td>{user.customerName}</td>
                <td>{user.contactNumber}</td>
                <td>{user.customerCity}</td>
                <td></td>
                <td>{user.vehicleModel}</td>
                <td>{user.appointmentDate}</td>
                <td>{user.serviceType}</td>
                <td><Button className="btn btn-success">Proceed</Button></td>
                <td><Button className="btn btn-danger">Reject</Button></td>
                <td>
                  <select>
                    <option>Completed</option>
                  <option>Pending</option>
                  <option>Not Started</option>
                  </select>
                </td>
              </tr>
            )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default ServiceRequest;
