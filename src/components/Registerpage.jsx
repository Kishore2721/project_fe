import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function RegisterPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    
    userName: "",
    userEmail: "",
   
    userPassword: "",
    mobileNumber:"",
    userPlace:""
  });
 async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post("http://localhost:9090/user/add", user);
    if (response.data.userId !== null && response.status == 201) {
      alert("user added successfully");
      setUser({
       userName: "",
    userEmail: "",
   
    userPassword: "",
    mobileNumber:"",
    userPlace:""
      })
    }
  }
const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        
          <div className="card-header " style={{
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
              value={user.userName}
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
              value={user.userEmail}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              />
          </div>

          <div className="mb-3">
            <label className="form-label">Contact Number</label>
            <input
              type="number"
              name="mobileNumber"
              className="form-control"
              value={user.mobileNumber}
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
              value={user.userPassword}
              onChange={handleChange}
              placeholder="Set your password"
              required
              />
          </div>
           <div className="mb-3">
            <label className="form-label">Place</label>
            <input
              type="text"
              name="userPlace"
              className="form-control"
              value={user.userPlace}
              onChange={handleChange}
              placeholder="enter your place"
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
