import React from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <Container className="w-50">
        <Card>
          <Card.Header className="d-flex align-items-center">
            <i className="bi bi-arrow-left btn btn-warning me-2"></i>
            <h1>Admin</h1>
          </Card.Header>

          <Card.Body>
            <h3 className="text-center mb-4">
              Manage Service Team and Request
            </h3>
            <div className=" d-flex justify-content-around mb-4">
              <button
                className="btn btn-primary rounded-3"
                onClick={() => navigate("/serviceteam")}
              >
                Service Team
              </button>
              <button
                className="btn btn-primary rounded-3"
                onClick={() => navigate("/servicerequest")}
              >
                Service Request
              </button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Admin;
