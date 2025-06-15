import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ForgetPass() {
  const navigate = useNavigate();

  // Dummy email for demonstration. Replace this with actual logic (e.g., from route param or context)
  const email = "user@example.com";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simulate password reset logic
    alert("Password reset successfully.");
    navigate("/LoginPage");
  };

  return (
    <div>
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <div
        style={{
          backgroundImage: 'url("https://wallpaperaccess.com/full/2085201.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          marginTop:"40px"

        }}
      >
 <div className="card"
  style={{
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: "10px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 0 15px rgba(0,0,0,0.3)",
  }}
>
      <div className="card-header" style={{
                backgroundColor: "#124363",
   color: "white",}}>
        <div className="d-flex align-items-center"> 
          <i className="bi bi-arrow-left" style={{fontSize:"25px"}}  onClick={() => navigate(-1)}></i>
          <h2 className="text-center fw-bold">Reset Your Password</h2>
        </div>
      </div>


        

          <form onSubmit={handleSubmit}>
          <div className="card-body">
              <p className="text-muted mb-4">
            Your identity has been verified. Please enter a new password to reset your account.
            <br />
            
          </p>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                readOnly
                />
            </div>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                />
            </div>

            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </div>

            <div className="d-grid gap-3">
              <button type="submit" className="btn btn-primary btn-lg">
                Confirm
              </button>
              
            </div>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPass;
