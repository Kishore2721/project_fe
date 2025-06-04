import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ForgetPass() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link has been sent to your email.");
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://up.yimg.com/ib/th?id=OIP.rtcPWo7pAM3_LTb03xj0OgAAAA&pid=Api&rs=1&c=1&qlt=95&w=185&h=101")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
        }}
      >
        <h2 className="text-center mb-4 fw-bold">Password Forgotten</h2>
        <p className="text-muted mb-4">
          Please enter your email address below, and we will send you a link. With this link,
          you can create a new ID and password.
          <br />
          <strong>
            Please note that by resetting your password, you will be automatically logged out from
            all the connected devices 
          </strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="d-grid gap-3">
            <button type="submit" className="btn btn-primary btn-lg">
              Request Link
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => navigate("/LoginPage")}
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgetPass;
