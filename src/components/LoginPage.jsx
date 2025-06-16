import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <img src="car-logo.png" className="img-w" alt="carLogo" />
          <a className="navbar-brand fw-bold" href="#">FixMyRide</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate('/')}>Home</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Login Card Section */}
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
          // className="card-header"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            // backgroundColor:"red",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            width: "50%",
            maxWidth: "450px",
            margin: "100px",
          }}
        >
          <div className="card-header" style={{
                backgroundColor: "#124363",
   color: "white",}}> 

          <div className=" d-flex align-items-center mb-3">

          {/* Left Arrow for Go Back */}
          <i className="bi bi-arrow-left me-2" onClick={() => navigate('/')} style={{
            fontSize:"25px"
          }} ></i>
          <h2 className="text-center  fw-bold">Welcome to FixMyRide</h2>
          </div>
          </div>

          <form>
            <div className="card-body">

            <div className="mb-3">
              <label className="form-label fw-semibold">Registered Name</label>
              <input
                type="text"
                name="userName"
                placeholder="Enter your registered name"
                className="form-control"
                />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                name="userEmail"
                placeholder="Enter your registered email"
                className="form-control"
                />
            </div>
          <div className="mb-3">

            <div className=" d-flex justify-content-between">
              <label className="form-label fw-semibold">Password</label>
                {/* Forgot Password */}
              <span
                className="text-primary fw-semibold"
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => navigate("/ForgotPass")}
                >
                Forgot Password?
              </span>
              
            </div>
            <input
                type="password"
                name="userPassword"
                placeholder="Enter your password"
                className="form-control"
                />
                </div>


            <div className="d-grid mb-4">
              <button
                type="button"
                padding ="50px"
                className="btn btn-primary"
                onClick={() => navigate("/UserCarDetails")}
                >
                Login
              </button>
            </div>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;    