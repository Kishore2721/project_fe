import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Form, Row } from 'react-bootstrap'

const AddEmployee = () => {
  return (
    <Container className='w-50 mt-5'>
        <Card>
            <CardHeader className='text-center'>
                Add New Employee
            </CardHeader>
            <Form>
                <CardBody >
                    <Row >
                        <Col md={6} className="d-flex flex-column align-items-center">
                            <Form.Group className="w-100 m-2">

                            <Form.Control type='text' placeholder='Enter Employee Id'></Form.Control>
                             </Form.Group>
                          <Form.Group className="w-100 m-2">

                            <Form.Control type='text' placeholder='Enter Employee Name'></Form.Control>
                             </Form.Group>
                             <Form.Group className="w-100 m-2">

                            <Form.Control type='number' placeholder='Contact Number'></Form.Control>
                             </Form.Group>
                             <Form.Group className="w-100 m-2">

                            <Form.Control type='text' placeholder='Place'></Form.Control>
                             </Form.Group>
                        </Col>
                        <Col md={6} className="d-flex flex-column align-items-center">

                            <Form.Group className="w-100 m-2">

                            <Form.Control type='date' placeholder='Joining Date'></Form.Control>
                             </Form.Group>
                             <Form.Group className="w-100 m-2">

                            <Form.Control type='text' placeholder='Enter Employee Name'></Form.Control>
                             </Form.Group>
                             <Form.Group className="w-100 m-2">

                            <Form.Control type='text' placeholder='Enter Employee Name'></Form.Control>
                             </Form.Group>
                             <Form.Group className="w-100 m-2">

                            <Form.Control type='text' placeholder='Enter Employee Name'></Form.Control>
                             </Form.Group>
                                        
                        </Col>
                        </Row>
                
                </CardBody>
            </Form>
        </Card>
    </Container>
  )
}

export default AddEmployee
