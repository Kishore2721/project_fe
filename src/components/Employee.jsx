


import { useLocation, useNavigate } from 'react-router-dom';
import './Employee.css';
import { useState,useEffect } from 'react';
import axios from 'axios';

const Employee = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state;

  const[users,setUsers]=useState([]);
  async function getData() {
     const response = await axios.get("http://localhost:9090/emp/viewall");
     setUsers(response.data);
  }
  useEffect(() => {
    getData();
  }, []);

  

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
        backgroundColor: "#000"
      }}
    >
      <div className="container w-75 mt-5">
        <div className="card">
          <div className="card-header text-center d-flex align-items-center justify-content-between">
            <i className="bi bi-arrow-left icon ms-2"></i>
            <h2 className="m-0">My Services</h2>
            <div className="d-flex align-items-center">
              <i className="bi bi-person-circle me-1 text-primary profile-icon"></i>
              <strong className="me-2">Employee ID: {employee?.id || '101'}</strong>
            </div>
          </div>

          <div className="card-body">
            <div className="d-flex justify-content-between mb-2 bg-primary rounded-2">
              <strong className="p-3">{employee?.name || 'Kishore G'}</strong>
            </div>

            {/* Current Service Table */}
            <div className="card mb-3">
              <div className="card-header">
                <h5 className="m-0">Customer ID:</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered table-hover text-center">
                  <thead>
                    <tr>
                      <th>Appointment Date & Time</th>
                      <th>Customer Name</th>
                      <th>Contact Number</th>
                      <th>Customer City</th>
                      <th>Vehicle Model</th>
                      <th>Registration Number</th>
                      <th>Service Type</th>
                      <th>Bill Amount</th>
                      <th>Status</th>
                      <th>Completion Date & Time</th> {/* Moved to last */}
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
                      <td></td>
                      <td></td>
                      <td>
                        <select className="form-select">
                          <option className="completed">Completed</option>
                          <option className="pending">Started</option>
                          <option className="not-started">Not Started</option>
                        </select>
                      </td>
                      <td></td> {/* Completion date now last */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Previous Works Table */}
            <div className="mt-4">
              <h5 className="text-secondary">Previous Works</h5>
              <div className="card mt-2">
                <div className="card-body">
                  <table className="table table-striped table-bordered table-hover text-center">
                    <thead>
                      <tr>
                        <th>Appointment Date & Time</th>
                        <th>Customer Name</th>
                        <th>Contact Number</th>
                        <th>Customer City</th>
                        <th>Vehicle Model</th>
                        <th>Registration Number</th>
                        <th>Service Type</th>
                        <th>Bill Amount</th>
                        <th>Status</th>
                        <th>Completion Date & Time</th> {/* Moved to last */}
                      </tr>
                    </thead>
                    <tbody>
                       {users.map((work, index) => (
                        <tr key={index}>
                          <td>{work.appointmentDateTime}</td>
                          <td>{work.customerName}</td>
                          <td>{work.contactNumber}</td>
                          <td>{work.customerCity}</td>
                          <td>{work.vehicleModel}</td>
                          <td>{work.registrationNumber}</td>
                          <td>{work.serviceType}</td>
                          <td>₹{work.billAmount}</td>
                          <td>{work.status}</td>
                          <td>{work.completionDateTime}</td>
                        </tr>
                      ))}
                      {users.length === 0 && (
                        <tr>
                          <td colSpan="10" className="text-center">No previous works found.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;



