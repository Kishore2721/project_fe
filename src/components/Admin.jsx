import{ useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import "./Admin.css";
import ServiceTeam from "./ServiceTeam";
import axios from "axios";

const Admin = () => {
  const [employees, setEmployees] = useState([]);
  const [serviceRequest, setServiceRequest] = useState([]);
  // async function getData(){
  //   const response = await axios.get("http://localhost:9090/employee/viewemp");
  //   setEmployees(response.data)
  // }
  // useEffect(() => {
  //     getData();
  // },[])
  const navigate = useNavigate();
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-start bg-image"
    >
      <Container className="w-100 mt-4 mb-3">
        <Card  bg="light">
           {/* style={{ backgroundColor: "rgba(255, 255, 255, 0.9)"}} */}
          <Card.Header className="d-flex align-items-center bg-color">
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
                  <i className="bi bi-plus me-2"></i>
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
