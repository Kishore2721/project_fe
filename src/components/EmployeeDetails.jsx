import React from "react";
import { useNavigate } from "react-router-dom";

function EmployeeDetails() {
    const navigate=useNavigate();
  const advisors = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aiswarya" },
    { id: 3, name: "Kiran" },
    { id: 4, name: "Kishore" },
    { id: 5, name: "Vishnu" },
  ];

  const handleSelect = (advisor) => {
    alert(`You selected ${advisor.name} (ID: ${advisor.id})`);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Service Advisors</h2>
      <div className="row g-3 justify-content-center">
        <button
              className="btn btn-warning me-3"
              onClick={() => navigate("/EmployeeLogin")}
            >Go Back
            </button>
            <button
              className="btn btn-warning me-3"
              onClick={() => navigate("/")}
            >Go Back homepage
            </button>
        {advisors.map((advisor) => (
          <div key={advisor.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h5 className="card-title">{advisor.name}</h5>
                <p className="card-text">ID: {advisor.id}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSelect(advisor)}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeDetails;
