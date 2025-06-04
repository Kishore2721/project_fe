import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage:
          'url("https://tse2.mm.bing.net/th?id=OIP.Ew-oZpzctrJqAezZdUJIJgHaDQ&pid=Api&P=0&h=180")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        className="card"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <h2 className="text-center mb-4 fw-bold">Welcome to the FixMyRide</h2>

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

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="userPassword"
              placeholder="Enter your password"
              className="form-control"
            />
          </div>

          <div className="d-grid mb-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate("/UserCarDetails")}
            >
              Login
            </button>
          </div>

          <div className="text-center mb-3">
            <a
              className="text-danger fw-semibold"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/ForgotPass")}
            >
              Forgot Password?
            </a>
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/RegisterPage")}
            >
              Go Back
            </button>
            <button
              className="btn btn-outline-secondary"
              onClick={() => navigate("/")}
            >
              Homepage
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
