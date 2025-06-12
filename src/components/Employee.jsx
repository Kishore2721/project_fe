import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Employee.css';

const Employee = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state;

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
                      <th>Status</th>
                      <th>Completion Date&Time</th>
                      <th>Bill Amount</th>
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
                      <td>
                        <select className="form-select">
                          <option className="completed">Completed</option>
                          <option className="pending">Pending</option>
                          <option className="not-started">Not Started</option>
                        </select>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card-footer">
            <button className="btn btn-primary">Assigned works</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
