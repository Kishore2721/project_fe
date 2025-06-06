import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, CardHeader } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserCarDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    vehicleModel: '',
    serviceType: 'General',
    complaint: '',
    appointmentDate: '',
    specialNotes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to an API
    console.log(formData);
    navigate('/status', { state: formData });
  };

  return (
    <div className="container ">
          <Card>
            <CardHeader >
              <Card.Title className="text-center ">Book Your Service Appointment</Card.Title>
             
            </CardHeader>
            <Card.Body>
              
              <Form onSubmit={handleSubmit}>
                
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control 
                        type="text"name="username" value={formData.username} onChange={handleChange} required placeholder="Enter your Username" />
                    </Form.Group>
                  </Col>
                  <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Vehicle Model / Number</Form.Label>
                      <Form.Control 
                      type="text" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required placeholder='Enter vehicle Model'/>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Service Type</Form.Label>
                      <Form.Select name="serviceType" value={formData.serviceType}onChange={handleChange}>
                        <option value="General">General</option>
                        <option value="Oil Change">Oil Change</option>
                        <option value="Tire Rotation">Tire Rotation</option>
                        <option value="Brake Service">Brake Service</option>
                        <option value="Engine Check">Engine Check</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  </Row>

                  <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Complaint / Issues</Form.Label>
                      <Form.Select name="complaint" value={formData.complaint} onChange={handleChange} required >
                        <option value="">Select an issue</option>
                        <option value="Engine Noise">Engine Noise</option>
                        <option value="Brake Problems">Brake Problems</option>
                        <option value="Electrical Issues">Electrical Issues</option>
                        <option value="Suspension Problems">Suspension Problems</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Appointment Date</Form.Label>
                      <Form.Control 
                        type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="submit" size="lg">
                    Book Appointment
                  </Button>
                </div>

                <div className="mt-3 text-center">
                  <p className="mb-2">Already filled the form?</p>
                  <Button 
                    variant="outline-secondary" 
                    onClick={() => navigate('/status')}
                  >
                    Check Service Status
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
    </div>
  );
};

export default UserCarDetails;