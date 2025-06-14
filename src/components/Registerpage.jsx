import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
        backgroundImage: 'url("https://wallpaperaccess.com/full/2085201.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",
        padding: "20px",
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
        {/* Top Row: Go Back button + Heading */}
        <div className="d-flex align-items-center mb-3">
          <button
            className="btn btn-warning me-2"
            onClick={() => navigate("/")}
          >
            <i className="bi bi-arrow-left me-2"></i>
          </button>
          <h2 className="fw-bold mb-0">Car Service Registration</h2>
        </div>

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

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Register
          </button>

          <p className="text-muted text-center">
            Already have an account?{" "}
            <button
              className="btn btn-link p-0 m-0 align-baseline"
              onClick={() => navigate("/LoginPage")}
            >
              Login here
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
