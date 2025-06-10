import { useNavigate } from "react-router-dom";

function UserStatus() {
  const navigate = useNavigate();

  const userAppointments = [
    {
      userName: "Vishnu Dethan",
      vehicleModel: "Ford Figo",
      workCompleted: "Yes",
      willBeCompletedBy: "2025-06-05",
      workHistory: [
        {
          date: "2024-04-12",
          description: "Oil Change and General Service",
        },
        {
          date: "2023-12-03",
          description: "Brake Pad Replacement",
        },
      ],
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
          >
            Go Back
          </button>
          <div className="table-responsive mt-3">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>User Name</th>
                  <th>Vehicle Model</th>
                  <th>Work Completed</th>
                  <th>Will be Completed by</th>
                </tr>
              </thead>
              <tbody>
                {userAppointments.map((appointment, index) => (
                  <>
                    <tr key={index}>
                      <td>{appointment.userName}</td>
                      <td>{appointment.vehicleModel}</td>
                      <td
                        style={{
                          backgroundColor:
                            appointment.workCompleted === "Yes"
                              ? "#e6f9ec"
                              : "#fff3f3",
                          color:
                            appointment.workCompleted === "Yes"
                              ? "green"
                              : "red",
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
                    <tr key={`history-${index}`}>
                      <td colSpan="4" className="text-start bg-light">
                        <strong>Previous Work History:</strong>
                        <ul className="mb-0 mt-2">
                          {appointment.workHistory.map((work, i) => (
                            <li key={i}>
                              <strong>{work.date}</strong>: {work.description}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </>
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
