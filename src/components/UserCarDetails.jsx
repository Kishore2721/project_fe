import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function UserCarDetails() {
  const navigate = useNavigate();
  const [appointmentDate, setAppointmentDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment submitted!");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundImage:
          'url("https://media.istockphoto.com/id/1892179107/photo/cars-open-bonnet-parked-in-garage-for-repair-and-maintenance-service.jpg?s=612x612&w=0&k=20&c=wMIlCxuCPfCl-uWfUF_W1IzGZPPlIUUkbQq68kpKtvo=")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "auto",
        padding: "2rem",
      }}
    >
      <div className="w-100" style={{ maxWidth: "700px" }}>
        <div className="card shadow-lg">
          <div className="card-header d-flex align-items-center">
            <button
              className="btn btn-warning me-3"
              onClick={() => navigate("/LoginPage")}
            >
              <i className="bi bi-arrow-left me-2"></i>
            </button>
            <div className="flex-grow-1 text-center">
              <h1 className="m-0 fs-4">Welcome, please fill in the details</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
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
                type="text"
                name="VehicleModel"
                placeholder="Enter your Vehicle Model"
                className="form-control mb-2"
              />

              <select
                name="ServiceType"
                className="form-control mb-2"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Service Type
                </option>
                <option value="General">General</option>
                <option value="Periodic">Periodic</option>
                <option value="Special Complaint">Special Complaint</option>
              </select>

              

              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                className="form-control mb-2"
                placeholderText="Select Appointment Date"
                dateFormat="yyyy-MM-dd"
                name="appointmentDate"
              />
            </div>

            <div className="card-footer text-center d-flex flex-column gap-2">
              <button className="btn btn-primary" type="submit">
                Click here to take Appointment
              </button>
              <a href="/UserStatus" className="btn btn-info">
                <i className="bi bi-table me-2"></i>
                Already registered for appointment? Click here to check your status
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserCarDetails;
