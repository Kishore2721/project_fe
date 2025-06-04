import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userNumber: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    console.log(formData);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://thumbs.dreamstime.com/b/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "5vh",
        width: "100vw",
        paddingTop: "60px",
        paddingBottom: "60px",
        display: "flex",
        justifyContent: "center",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "450px",
          width: "100%",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        }}
      >
        <h2 className="mb-3 fw-bold">Car Service Registration</h2>
        <p className="text-muted">
          Already have an account?{" "}
          <button
            className="btn btn-link p-0 m-0 align-baseline"
            onClick={() => navigate("/LoginPage")}
          >
            Login here
          </button>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="userEmail"
              className="form-control"
              value={formData.userEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="number"
              name="userNumber"
              className="form-control"
              value={formData.userNumber}
              onChange={handleChange}
              placeholder="Enter your number"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="userPassword"
              className="form-control"
              value={formData.userPassword}
              onChange={handleChange}
              placeholder="Set your password"
              required
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <button
          className="btn btn-secondary mt-3"
          onClick={() => navigate("/")}
        >
          <i className="bi bi-arrow-left me-2"></i> Go Back
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;

