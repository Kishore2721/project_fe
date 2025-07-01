
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

function UserCarDetails() {
  const navigate = useNavigate();

  // Include appointmentDateTime in user state
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    vehicleModel: "",
    vehicleNumber: "",
    serviceType: "",
    place: "",
    appointmentDateTime: "" // added
  });

  const [appointmentDate, setAppointmentDate] = useState(null); // for date picker UI

  async function handleSubmit(event) {
    event.preventDefault();

    if (!appointmentDate) {
      return alert("Please select a date & time");
    }

    const iso = appointmentDate.toISOString();  // "2025-06-25T18:30:00.000Z"
    const trimmed = iso.slice(0, 16);           // "2025-06-25T18:30"

    // Set appointmentDateTime in user object
    const updatedUser = { ...user, appointmentDateTime: trimmed };
    setUser(updatedUser);

    try {
      const response = await axios.post("http://localhost:9090/emp/addCar", updatedUser);
      if (response.status === 201) {
        alert("Appointment booked!");

        // Reset form fields
        setUser({
          userName: "",
          userEmail: "",
          userPhone: "",
          vehicleModel: "",
          vehicleNumber: "",
          serviceType: "",
          place: "",
          appointmentDateTime: ""
        });

        setAppointmentDate(null); // Clear the date picker
      }
    } catch (err) {
      console.error(err.response?.data, err.message);
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  }

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
              <i className="bi bi-arrow-left me-2"></i>Go Back
            </button>
            <div className="flex-grow-1 text-center">
              <h1 className="m-0 fs-4">Welcome, please fill in the details</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} method="post">
            <div className="card-body">
              <input
                type="text"
                name="userName"
                placeholder="Enter your registered name"
                className="form-control mb-2"
                value={user.userName}
                onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
              />

              <input
                type="email"
                name="userEmail"
                value={user.userEmail}
                placeholder="Enter your registered email"
                className="form-control mb-2"
                required
                onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
              />

              <input
                type="number"
                name="userPhone"
                value={user.userPhone}
                placeholder="Enter your mobile number"
                className="form-control mb-2"
                required
                onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
              />

              <input
                type="text"
                name="vehicleModel"
                value={user.vehicleModel}
                placeholder="Enter your Vehicle Model"
                className="form-control mb-2"
                required
                onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
              />

              <input
                type="text"
                name="vehicleNumber"
                value={user.vehicleNumber}
                placeholder="Vehicle registration number"
                className="form-control mb-2"
                required
                onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
              />

              <select
                name="serviceType"
                value={user.serviceType}
                className="form-control mb-2"
                required
                onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
              >
                <option value="" disabled>
                  Select Service Type
                </option>
                <option value="Periodic">Periodic</option>
                <option value="Engine Issues">Engine Issues</option>
                <option value="Brake Problems">Brake Problems</option>
                <option value="Electrical Fault">Electrical Fault</option>
                <option value="AC Not Working">AC Not Working</option>
                <option value="Battery Replacement">Battery Replacement</option>
                <option value="Oil Change">Oil Change</option>
                <option value="Suspension Issues">Suspension Issues</option>
                <option value="Transmission Trouble">Transmission Trouble</option>
                <option value="Fuel System Problem">Fuel System Problem</option>
                <option value="Noise or Vibration">Noise or Vibration</option>
                <option value="Tyre Replacement">Tyre Replacement</option>
                <option value="Wheel Alignment">Wheel Alignment</option>
                <option value="Coolant Leak">Coolant Leak</option>
                <option value="Overheating Issue">Overheating Issue</option>
                <option value="Steering Problem">Steering Problem</option>
                <option value="Clutch Issue">Clutch Issue</option>
                <option value="Horn Not Working">Horn Not Working</option>
                <option value="Headlight Issue">Headlight Issue</option>
                <option value="Wiper Malfunction">Wiper Malfunction</option>
                <option value="Dashboard Warning Light">Dashboard Warning Light</option>
                <option value="Door Lock Problem">Door Lock Problem</option>
                <option value="Paint or Scratch Repair">Paint or Scratch Repair</option>
                <option value="Windshield Damage">Windshield Damage</option>
                <option value="Sensor Malfunction">Sensor Malfunction</option>
                <option value="Exhaust Smoke">Excessive Exhaust Smoke</option>
              </select>

              <input
                type="text"
                name="place"
                value={user.place}
                placeholder="Enter your place"
                className="form-control mb-2"
                required
                onChange={(event) => setUser({ ...user, [event.target.name]: event.target.value })}
              />

              <DatePicker
                selected={appointmentDate}
                onChange={(date) => setAppointmentDate(date)}
                className="form-control mb-2"
                placeholderText="Select Appointment Date & Time"
                dateFormat="yyyy-MM-dd h:mm aa"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                name="appointmentDate"
              />
            </div>

            <div className="card-footer text-center d-flex flex-column gap-2">
              <button className="btn btn-primary" type="submit">
                Click here to take Appointment
              </button>
              <a href="/UserStatus">
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

