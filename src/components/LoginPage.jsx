import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/1892179107/photo/cars-open-bonnet-parked-in-garage-for-repair-and-maintenance-service.jpg?s=612x612&w=0&k=20&c=wMIlCxuCPfCl-uWfUF_W1IzGZPPlIUUkbQq68kpKtvo=")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="container w-75 mt-5 pt-5">
        <div className="card">
          <div className="card-header d-flex align-items-center">
            <button
              className="btn btn-warning me-3"
              onClick={() => navigate("/RegisterPage")}
            >Go Back
            </button>
            <button
              className="btn btn-warning me-3"
              onClick={() => navigate("/")}
            >Go Back homepage
            </button>
            <div className="flex-grow-1 text-center">
              <h1 className="m-0">Welcome to the Loginpage</h1>
            </div>
          </div>

          
            <div className="card-body">
              <input
                type="text"
                name="userName"
                placeholder="Enter your registered name"
                className="form-control mb-2"
              />
              <input
                type="email"
                name="userEmail"
                placeholder="Enter your registered email"
                className="form-control mb-2"
              />
              <input
                type="password"
                name="userPassword"
                placeholder="Enter your password"
                className="form-control mb-2"
              />
            </div>
            <div className="card-footer">
                <button className="btn btn-primary" onClick={()=>navigate('/UserCarDetails')} >Login</button>
              
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
