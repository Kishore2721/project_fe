import{ useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./Admin.css";
import ServiceTeam from "./ServiceTeam";

const Admin = () => {
  const [employees, setEmployees] = useState([
    {
      id: "101",
      name: "Arjun Menon",
      email: "arjun.menon@example.com",
      password: "Arjun@1234",
      phone: "9876543210",
      city: "Kochi",
      state: "Kerala",
      assignedWorks: "Engine Diagnosis",
      workStatus: "Active",
      joinDate: "2023-01-15",
    },
    {
      id: "102",
      name: "Priya Ramesh",
      email: "priya.ramesh@example.com",
      password: "Priya@4567",
      phone: "9876503210",
      city: "Chennai",
      state: "Tamil Nadu",
      assignedWorks: "Customer Support",
      workStatus: "On Leave",
      joinDate: "2022-11-12",
    },
    {
      id: "103",
      name: "Ravi Kumar",
      email: "ravi.kumar@example.com",
      password: "Ravi@7890",
      phone: "9876512345",
      city: "Bangalore",
      state: "Karnataka",
      assignedWorks: "Brake Inspection",
      workStatus: "Active",
      joinDate: "2023-03-10",
    },
    {
      id: "104",
      name: "Sneha Das",
      email: "sneha.das@example.com",
      password: "Sneha@9876",
      phone: "9998887776",
      city: "Kolkata",
      state: "West Bengal",
      assignedWorks: "Billing",
      workStatus: "Active",
      joinDate: "2022-09-05",
    },
    {
      id: "105",
      name: "Vinay Sharma",
      email: "vinay.sharma@example.com",
      password: "Vinay@3456",
      phone: "9012345678",
      city: "Delhi",
      state: "Delhi",
      assignedWorks: "Service Advisor",
      workStatus: "Resigned",
      joinDate: "2021-06-20",
    },
    {
      id: "106",
      name: "Lakshmi Pillai",
      email: "lakshmi.pillai@example.com",
      password: "Lakshmi@1122",
      phone: "8765432109",
      city: "Trivandrum",
      state: "Kerala",
      assignedWorks: "Quality Check",
      workStatus: "Active",
      joinDate: "2023-08-30",
    },
    {
      id: "107",
      name: "Ankit Verma",
      email: "ankit.verma@example.com",
      password: "Ankit@1234",
      phone: "9832112345",
      city: "Mumbai",
      state: "Maharashtra",
      assignedWorks: "Parts Manager",
      workStatus: "Active",
      joinDate: "2023-05-12",
    },
    {
      id: "108",
      name: "Deepa Suresh",
      email: "deepa.suresh@example.com",
      password: "Deepa@9999",
      phone: "9123456789",
      city: "Hyderabad",
      state: "Telangana",
      zipCode: "500001",
      assignedWorks: "Receptionist",
      workStatus: "Active",
      joinDate: "2022-12-01",
    },
    {
      id: "109",
      name: "Karthik Rao",
      email: "karthik.rao@example.com",
      password: "Karthik@4444",
      phone: "9988776655",
      city: "Pune",
      state: "Maharashtra",
      assignedWorks: "Car Wash",
      workStatus: "On Leave",
      joinDate: "2021-10-10",
    },
    {
      id: "110",
      name: "Meena ",
      email: "meena.nair@example.com",
      password: "Meena@5566",
      phone: "9876000000",
      city: "Alappuzha",
      state: "Kerala",
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
      className="min-vh-100 d-flex justify-content-center align-items-start bg-image"
    >
      <Container className="w-100 mt-4 mb-3">
        <Card  bg="light">
           {/* style={{ backgroundColor: "rgba(255, 255, 255, 0.9)"}} */}
          <Card.Header className="d-flex align-items-center admin-bg-color">
            <i className="bi bi-arrow-left icon me-2 "></i>
            <h1>Admin Control Panel</h1>
          </Card.Header>

          <Card.Body>
            <Card className="card-bg ms-2 me-2" >

            <div className=" d-flex justify-content-around mb-4 mt-4">
              <Card bg="primary" className="p-3 shadow-sm rounded-3 text-white align-items-center card-width">
                <i className="bi bi-people-fill icon "></i>
                <div className="text-center">
                  <h6>Total Employees</h6>
                <h3>{employees?.length || 0}</h3>
                </div>
              </Card>
              <Card bg="primary" className="p-3 shadow-sm rounded-3 text-white align-items-center card-width">
                <i className="bi bi-gear-fill icon"></i>
                <div className="text-center">
                  <h6>Total Service</h6>
                <h3>{serviceRequest?.length || 0}</h3>
                </div>
              </Card>
              <div className=" mt-5 ">
                <button
                className="btn btn-primary me-5 btn-color "
                onClick={() =>
                  navigate("/addemployee", {
                    state: {
                      employees: employees,
                    },
                  })
                }
                > 
                  <i class="bi bi-plus me-2"></i>
                Add Employee
              </button>
              <button
                className="btn btn-primary rounded-3 ms-5 btn-color"
                onClick={() => navigate("/servicerequest")}
                >
                  <i className="bi bi-eye me-2"></i>
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
