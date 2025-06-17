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
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <img src="car-logo.png" width={50} alt="carLogo" />
          <a className="navbar-brand fw-bold" href="#">FixMyRide</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" onClick={() => navigate('/')}>Home</a></li>
            </ul>
          </div>
        </div>
      </nav>

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
      <div  className="card"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "8px",
          maxWidth: "1000px",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        }}
        >
        {/* Top Row: Go Back button + Heading */}
        
          <div className="card-header" style={{
            backgroundColor: "#124363",
            color: "white",
            
          }}>


        <div className="d-flex align-items-center mb-3">
               <i className="bi bi-arrow-left me-2" style={{
                fontSize:"25px",
               }} onClick={() => navigate("/")}></i>
          <h2 className="fw-bold mb-0">Car Service Registration</h2>
        </div>
          </div>

        <form onSubmit={handleSubmit}>
          <div className="card-body">

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
                </div>
        </form>
        
      </div>
    </div>
                </div>
  );
}

export default RegisterPage;
