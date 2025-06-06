import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          {/* Left Arrow for Go Back */}
          <button
            className="btn btn-outline-light me-3"
            onClick={() => navigate(-1)}
          >
            ←
          </button>

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
        <div
          className="card"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            width: "50%",
            maxWidth: "450px",
            margin: "100px",
          }}
        >
          <h2 className="text-center mb-4 fw-bold">Welcome to FixMyRide</h2>

          <form>
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

            <div className=" d-flex justify-content-between">
              <label className="form-label fw-semibold">Password</label>
                {/* Forgot Password */}
              <span
                className="text-danger fw-semibold"
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


            <div className="d-grid mb-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate("/UserCarDetails")}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
