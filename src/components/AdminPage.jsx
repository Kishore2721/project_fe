import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/1892179107/photo/cars-open-bonnet-parked-in-garage-for-repair-and-maintenance-service.jpg?s=612x612&w=0&k=20&c=wMIlCxuCPfCl-uWfUF_W1IzGZPPlIUUkbQq68kpKtvo=")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div className="container bg-white bg-opacity-75 p-4 rounded shadow">
        <div className="d-flex justify-content-start mb-3">
          <button className="btn btn-outline-dark" onClick={() => navigate('/')}>
            Go Back
          </button>
        </div>

        <h2 className="text-center mb-4">Admin - Manage Appointments</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-light">
              <tr>
                <th>Vehicle Model</th>
                <th>Service Type</th>
                <th>Appointment Date</th>
                <th>Owner Name</th>
                <th>Contact Number</th>
                <th>Employee Name</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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
                  <button className="btn btn-success btn-sm me-2">Proceed</button>
                  <button className="btn btn-danger btn-sm">Reject</button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
