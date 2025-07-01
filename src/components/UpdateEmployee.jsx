
import React from "react";
import { useNavigate } from "react-router-dom";
import './Employee.css';

const UpdateEmployee = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate('/Employee');
  };

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
      <div className="container mt-5 outer-width">
        <div className="card">
          <div className="card-header d-flex align-items-center">
            <i className="bi bi-arrow-left icon me-2" onClick={goback} style={{ cursor: "pointer" }}></i>
            <h2 className="m-0">Hai Kishore, Update Your Details</h2>
          </div>

          <form className="font-bold fs-5 p-3">
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="emailId" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="email"
                  placeholder="Email"
                  readOnly
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  minLength={8}
                />
                <div className="invalid-feedback">
                  Password must be at least 8 characters.
                </div>
              </div>
            </div>

            <div className="card-footer text-center">
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
