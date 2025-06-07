import { useNavigate } from "react-router-dom";

function EmployeeWorkStatusPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(https://wallpapers.com/images/hd/full-hd-car-black-lamborghini-tahul7hyi0cfet43.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "white",
        backgroundColor: "#000",
      }}
    >
      <div className="container bg-light bg-opacity-75 p-5 rounded-4 shadow-lg">
        <div className="d-flex justify-content-start mb-4">
          <button
            className="btn btn-outline-dark btn-lg rounded-pill"
            onClick={() => navigate("/AdminPage")}
          >
            ⬅ Go Back
          </button>
        </div>

        <h1 className="text-center mb-5 fw-bold text-dark">
          🔧 Work Status – Service Summary
        </h1>

        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped align-middle text-center shadow-sm">
            <thead className="table-dark text-uppercase">
              <tr>
                <th>Vehicle Model</th>
                <th>Service Type</th>
                <th>Appointment Date</th>
                <th>Owner Name</th>
                <th>Contact Number</th>
                <th>Status</th>
                <th>Bill Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ford Figo</td>
                <td>Engine Check</td>
                <td>2025-06-10</td>
                <td>Vishnu Dethan</td>
                <td>9876543210</td>
                <td>
                  <span className="badge bg-success">✅ Done</span>
                </td>
                <td>₹5,000</td>
              </tr>
              <tr>
                <td>Maruti Swift</td>
                <td>Oil Change</td>
                <td>2025-06-08</td>
                <td>Aiswarya</td>
                <td>9876501234</td>
                <td>
                  <span className="badge bg-danger">❌ Not Done</span>
                </td>
                <td>₹0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeWorkStatusPage;
