import { useNavigate } from "react-router-dom";

function UserStatus() {
    const navigate=useNavigate();
  const userAppointments = [
    {
      userName: "Vishnu Dethan",
      vehicleModel: "Ford Figo",
      workCompleted: "Yes",
      willBeCompletedBy: "2025-06-05",
    },
    {
      userName: "Rahul Menon",
      vehicleModel: "Suzuki Swift",
      workCompleted: "No",
      willBeCompletedBy: "2025-06-10",
    },
    {
      userName: "Vishnu Dethan",
      vehicleModel: "Ford Figo",
      workCompleted: "Yes",
      willBeCompletedBy: "2025-06-05",
    },
    {
      userName: "Vishnu Dethan",
      vehicleModel: "Ford Figo",
      workCompleted: "Yes",
      willBeCompletedBy: "2025-06-05",
    },
    {
      userName: "Vishnu Dethan",
      vehicleModel: "Ford Figo",
      workCompleted: "Yes",
      willBeCompletedBy: "2025-06-05",
    },
    {
      userName: "Vishnu Dethan",
      vehicleModel: "Ford Figo",
      workCompleted: "Yes",
      willBeCompletedBy: "2025-06-05",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary fw-bold">Appointment Status</h2>
           <button
              className="btn btn-warning me-3"
              onClick={() => navigate("/LoginPage")}
            >go back
              </button>
          <div className="table-responsive">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th className="bg-white">User Name</th>
                  <th className="bg-white">Vehicle Model</th>
                  <th colSpan={2} className="bg-white">Status</th>
                </tr>
                <tr>
                  <th className="bg-white"></th>
                  <th className="bg-white"></th>
                  <th style={{ backgroundColor: "#e6f9ec", color: "green" }}>Work Completed</th>
                  <th style={{ backgroundColor: "#e6f0ff", color: "#0d6efd" }}>Will be Completed by</th>
                </tr>
              </thead>
              <tbody>
                {userAppointments.map((appointment, index) => (
                  <tr key={index}>
                    <td>{appointment.userName}</td>
                    <td>{appointment.vehicleModel}</td>
                    <td
                      style={{
                        backgroundColor: appointment.workCompleted === "Yes" ? "#e6f9ec" : "#fff3f3",
                        color: appointment.workCompleted === "Yes" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {appointment.workCompleted}
                    </td>
                    <td
                      style={{
                        backgroundColor: "#e6f0ff",
                        color: "#0d6efd",
                        fontWeight: "bold",
                      }}
                    >
                      {appointment.willBeCompletedBy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;
