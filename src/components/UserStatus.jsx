/*import { useNavigate } from "react-router-dom";

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
                  <th>registration Time and Date</th>
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

export default UserStatus;*/

import { useNavigate } from "react-router-dom";
import './Employee.css'; // reuse same styling

function UserStatus() {
  const navigate = useNavigate();

  const userAppointments = [
    {
      appointmentDate: "2025-05-25 10:30 AM",
      customerName: "Vishnu Dethan",
      contactNumber: "9876543210",
      city: "Trivandrum",
      vehicleModel: "Ford Figo",
      registrationNumber: "KL21Q3860",
      serviceType: "General Service",
      status: "Completed",
      completionDate: "2025-05-26 12:30 PM",
      billAmount: "2500"
    },
  ];

  const previousWorks = [
    {
      appointmentDate: "2024-12-12 09:00 AM",
      customerName: "Vishnu Dethan",
      contactNumber: "9876543210",
      city: "Trivandrum",
      vehicleModel: "Ford Figo",
      registrationNumber: "KL21Q3860",
      serviceType: "Engine Tuning",
      status: "Completed",
      completionDate: "2024-12-12 01:00 PM",
      billAmount: "1800"
    },
    {
      appointmentDate: "2024-04-10 11:00 AM",
      customerName: "Vishnu Dethan",
      contactNumber: "9876543210",
      city: "Trivandrum",
      vehicleModel: "Ford Figo",
      registrationNumber: "KL21Q3860",
      serviceType: "Brake Pad Replacement",
      status: "Completed",
      completionDate: "2024-04-10 02:00 PM",
      billAmount: "2200"
    }
  ];

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
      <div className="container w-75 mt-5">
        <div className="card">
          <div className="card-header text-center d-flex align-items-center justify-content-between">
            <button className="btn btn-warning ms-2" onClick={() => navigate("/LoginPage")}>
              <i className="bi bi-arrow-left me-2"></i>Go Back
            </button>
            <h2 className="m-0">Appointment Status</h2>
            <div style={{ width: '120px' }}></div>
          </div>

          <div className="card-body">
            {/* Current Appointment Table */}
            <div className="card mb-4">
              <div className="card-header bg-primary text-white">
                <h5 className="m-0">Customer ID:</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered table-hover text-center">
                  <thead>
                    <tr>
                      <th>Appointment Date & Time</th>
                      <th>Customer Name</th>
                      <th>Contact Number</th>
                      <th>Customer City</th>
                      <th>Vehicle Model</th>
                      <th>Registration Number</th>
                      <th>Service Type</th>
                      <th>Bill Amount</th>
                      <th>Status</th>
                      <th>Completion Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userAppointments.map((appointment, index) => (
                      <tr key={index}>
                        <td>{appointment.appointmentDate}</td>
                        <td>{appointment.customerName}</td>
                        <td>{appointment.contactNumber}</td>
                        <td>{appointment.city}</td>
                        <td>{appointment.vehicleModel}</td>
                        <td>{appointment.registrationNumber}</td>
                        <td>{appointment.serviceType}</td>
                        <td>{appointment.billAmount}</td>
                        <td>{appointment.status}</td>
                        <td>{appointment.completionDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Previous Works Table */}
            <div className="card mb-3">
              <div className="card-header bg-dark text-white">
                <h5 className="m-0">Previous Works</h5>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered table-hover text-center">
                  <thead>
                    <tr>
                      <th>Appointment Date & Time</th>
                      <th>Customer Name</th>
                      <th>Contact Number</th>
                      <th>Customer City</th>
                      <th>Vehicle Model</th>
                      <th>Registration Number</th>
                      <th>Service Type</th>
                      <th>Bill Amount</th>
                      <th>Status</th>
                      <th>Completion Date & Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {previousWorks.map((work, index) => (
                      <tr key={index}>
                        <td>{work.appointmentDate}</td>
                        <td>{work.customerName}</td>
                        <td>{work.contactNumber}</td>
                        <td>{work.city}</td>
                        <td>{work.vehicleModel}</td>
                        <td>{work.registrationNumber}</td>
                        <td>{work.serviceType}</td>
                        <td>{work.billAmount}</td>
                        <td>{work.status}</td>
                        <td>{work.completionDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card-footer text-end">
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserStatus;

