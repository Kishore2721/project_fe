import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Admin.css";
import ServiceTeam from "../ServiceTeam/ServiceTeam";

const Admin = () => {
  const [employees, setEmployees] = useState([
    {
      id: "101",
      firstName: "Arjun",
      lastName: "Menon",
      email: "arjun.menon@example.com",
      password: "Arjun@1234",
      contactNumber: "9876543210",
      city: "Kochi",
      state: "Kerala",
      zipCode: "682016",
      assignedWorks: "Engine Diagnosis",
      workStatus: "Active",
      joinDate: "2023-01-15",
    },
    {
      id: "102",
      firstName: "Priya",
      lastName: "Ramesh",
      email: "priya.ramesh@example.com",
      password: "Priya@4567",
      contactNumber: "9876503210",
      city: "Chennai",
      state: "Tamil Nadu",
      zipCode: "600001",
      assignedWorks: "Customer Support",
      workStatus: "On Leave",
      joinDate: "2022-11-12",
    },
    {
      id: "103",
      firstName: "Ravi",
      lastName: "Kumar",
      email: "ravi.kumar@example.com",
      password: "Ravi@7890",
      contactNumber: "9876512345",
      city: "Bangalore",
      state: "Karnataka",
      zipCode: "560001",
      assignedWorks: "Brake Inspection",
      workStatus: "Active",
      joinDate: "2023-03-10",
    },
    {
      id: "104",
      firstName: "Sneha",
      lastName: "Das",
      email: "sneha.das@example.com",
      password: "Sneha@9876",
      contactNumber: "9998887776",
      city: "Kolkata",
      state: "West Bengal",
      zipCode: "700001",
      assignedWorks: "Billing",
      workStatus: "Active",
      joinDate: "2022-09-05",
    },
    {
      id: "105",
      firstName: "Vinay",
      lastName: "Sharma",
      email: "vinay.sharma@example.com",
      password: "Vinay@3456",
      contactNumber: "9012345678",
      city: "Delhi",
      state: "Delhi",
      zipCode: "110001",
      assignedWorks: "Service Advisor",
      workStatus: "Resigned",
      joinDate: "2021-06-20",
    },
    {
      id: "106",
      firstName: "Lakshmi",
      lastName: "Pillai",
      email: "lakshmi.pillai@example.com",
      password: "Lakshmi@1122",
      contactNumber: "8765432109",
      city: "Trivandrum",
      state: "Kerala",
      zipCode: "695014",
      assignedWorks: "Quality Check",
      workStatus: "Active",
      joinDate: "2023-08-30",
    },
    {
      id: "107",
      firstName: "Ankit",
      lastName: "Verma",
      email: "ankit.verma@example.com",
      password: "Ankit@1234",
      contactNumber: "9832112345",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400001",
      assignedWorks: "Parts Manager",
      workStatus: "Active",
      joinDate: "2023-05-12",
    },
    {
      id: "108",
      firstName: "Deepa",
      lastName: "Suresh",
      email: "deepa.suresh@example.com",
      password: "Deepa@9999",
      contactNumber: "9123456789",
      city: "Hyderabad",
      state: "Telangana",
      zipCode: "500001",
      assignedWorks: "Receptionist",
      workStatus: "Active",
      joinDate: "2022-12-01",
    },
    {
      id: "109",
      firstName: "Karthik",
      lastName: "Rao",
      email: "karthik.rao@example.com",
      password: "Karthik@4444",
      contactNumber: "9988776655",
      city: "Pune",
      state: "Maharashtra",
      zipCode: "411001",
      assignedWorks: "Car Wash",
      workStatus: "On Leave",
      joinDate: "2021-10-10",
    },
    {
      id: "110",
      firstName: "Meena",
      lastName: "Nair",
      email: "meena.nair@example.com",
      password: "Meena@5566",
      contactNumber: "9876000000",
      city: "Alappuzha",
      state: "Kerala",
      zipCode: "688001",
      assignedWorks: "Inventory Management",
      workStatus: "Active",
      joinDate: "2023-04-25",
    },
  ]);

  // const [employees,setEmployees] = useState();
  const location = useLocation();
  const [serviceRequest, setServiceRequest] = useState([]);
  useEffect(() => {
    if (location.state) {
      if (location.state.employees) {
        setEmployees(location.state.employees);
      }
      if (location.state.addedEmployee) {
        setEmployees(location.state.addedEmployee);
      }
      if (location.state.serviceRequests) {
        setServiceRequest(location.state.serviceRequests);
      }
    }
  }, [location.state]);

  const navigate = useNavigate();
  // const handleTeam =()=>{
  //   navigate('/serviceteam',{
  //     state:{
  //       employees:employees
  //     }
  //   })
  // }
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-start"
      // style={{ height: "70vh" }}
    >
      <Container className="w-100 mt-4">
        <Card>
          <Card.Header className="d-flex align-items-center">
            <i className="bi bi-arrow-left icon me-2"></i>
            <h1>Admin Control Panel</h1>
          </Card.Header>

          <Card.Body>
            <Card>

            <div className=" d-flex justify-content-around mb-4 mt-4">
              <Card bg="primary" className="p-3 shadow-sm rounded-3 text-white">
                <h6>Total Employees</h6>
                <h3>{employees?.length || 0}</h3>
              </Card>
              <Card bg="primary" className="p-3 shadow-sm rounded-3 text-white">
                <h6>Active Service</h6>
                <h3>{serviceRequest?.length || 0}</h3>
              </Card>
              <div className=" mt-5">
                <Button
                className="btn btn-primary me-5"
                onClick={() =>
                  navigate("/addemployee", {
                    state: {
                      employees: employees,
                    },
                  })
                }
                >
                Add Employee
              </Button>
              <button
                className="btn btn-primary rounded-3 ms-5"
                onClick={() => navigate("/servicerequest")}
                >
                View Service Request
              </button>
              </div>
            </div>
                </Card>
            <div>
            <ServiceTeam
                employees={employees}
                setEmployees={setEmployees}
              ></ServiceTeam>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Admin;
