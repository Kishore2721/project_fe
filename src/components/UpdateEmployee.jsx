import React from "react";
import { Container, Card, CardHeader, Form, CardBody, CardFooter, Button } from "react-bootstrap";
import './Employee.css'
import { useNavigate } from "react-router-dom";
const UpdateEmployee = () => {
    const navigate = useNavigate();
    const goback =()=>{
    navigate('/Employee')
  };
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
    <Container className="mt-5 outer-width">
      <Card>
        <CardHeader className="d-flex align-items-center">
          <i className="bi bi-arrow-left icon me-2" onClick={goback}></i>
          <h2>Hai Kishore, Update Your Details</h2>
        </CardHeader>
        <Form className="font-bold  fs-5">
          <CardBody>
            <Form.Group controlId="firstName" className="m-2">
              <Form.Label>First name :</Form.Label>
              <Form.Control
                required
                name="firstName"
                // value={addNewEmp.firstName}
                type="text"
                placeholder="First name"
                // onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="lasttName" className="m-2">
              <Form.Label>Last name :</Form.Label>
              <Form.Control
                required
                name="firstName"
                // value={addNewEmp.firstName}
                type="text"
                placeholder="Last name"
                // onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="emailId" className="m-2">
              <Form.Label>Email :</Form.Label>
              <Form.Control
                required
                name="email"
                // value={addNewEmp.email}
                type="email"
                placeholder="Email"
                readOnly
                // onChange={handleChange}
              />
              <Form.Group controlId="password" className=" m-2">
                <Form.Label>Password :</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                //   value={addNewEmp.password}
                  placeholder="Enter password"
                  required
                  minLength={8}
                //   onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 8 characters.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Group>
          </CardBody>
          <CardFooter className="text-center">
             <Button className="btn btn-success" type="submit">Update</Button>
          </CardFooter>
        </Form>
      </Card>
    </Container>
    </div>
  );
};

export default UpdateEmployee;