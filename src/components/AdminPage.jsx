import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
  backgroundImage: `url("https://wallpapers.com/images/hd/full-hd-car-black-lamborghini-tahul7hyi0cfet43.jpg")`,
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
            onClick={() => navigate("/")}
          >
            ⬅ Go Back
          </button>
        </div>

        <h1 className="text-center mb-5 fw-bold text-dark">
          🚗 Admin Panel – Manage Appointments
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
                <th>Employee</th>
                <th>Action</th>
                <th>Status</th>
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
                  <select className="form-select">
                    <option value="">Select</option>
                    <option value="Rahul">Rahul</option>
                    <option value="Aiswarya">Aiswarya</option>
                    <option value="Kiran">Kiran</option>
                    <option value="Kishore">Kishore</option>
                    <option value="Vishnu">Vishnu</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-success btn-sm me-2 shadow-sm" onClick={()=>alert("Proceeded to employee ")}>
                    ✅ Proceed
                  </button>
                  <button className="btn btn-danger btn-sm shadow-sm" onClick={()=>alert("rejected")}>
                    ❌ Reject
                  </button>
                </td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
              </tr>
               <tr>
                <td>Ford Figo</td>
                <td>Engine Check</td>
                <td>2025-06-10</td>
                <td>Vishnu Dethan</td>
                <td>9876543210</td>
                <td>
                  <select className="form-select">
                    <option value="">Select</option>
                    <option value="Rahul">Rahul</option>
                    <option value="Aiswarya">Aiswarya</option>
                    <option value="Kiran">Kiran</option>
                    <option value="Kishore">Kishore</option>
                    <option value="Vishnu">Vishnu</option>
                  </select>
                </td>
                <td>
                  <button className="btn btn-success btn-sm me-2 shadow-sm" onClick={()=>alert("Proceeded to employee ")}>
                    ✅ Proceed
                  </button>
                  <button className="btn btn-danger btn-sm shadow-sm" onClick={()=>alert("rejected")}>
                    ❌ Reject
                  </button>
                </td>
                <td>
                  <span className="badge bg-warning text-dark">Pending</span>
                </td>
              </tr>
              
            </tbody>
          </table>
          <button class="btn btn-info" onClick={()=>navigate('/EmployeeWorkStatusPage')}>Work Status</button>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
