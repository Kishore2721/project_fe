import { Card, CardBody, CardHeader, Container, Table } from "react-bootstrap";
import { useLocation, useNavigate} from "react-router-dom";
import './EmployeeDetails.css'

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const employee = location.state;
  return (
      <div className="min-vh-100 d-flex align-items-start emp-detaisl-bg">

    <Container className="w-75 mt-5 ">
      <Card>
        <Card.Header className="text-center d-flex align-items-center justify-content-between emp-details-header">
          <div className="d-flex align-items-center">
             <i className="bi bi-arrow-left icon me-2" onClick={()=>navigate('/admin')}></i>
           <h1>Work History</h1>
          </div>
          <strong> Employee ID : {employee.id}</strong>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between ms-2 me-2 mb-2">
            <span><i className="bi bi-person-fill"></i> <strong>Name : </strong>{" "}
            {employee.name}</span>
            <span><i className="bi bi-telephone-fill"></i> <strong>Phone : </strong>{" "}
            {employee.phone}</span>
            <span><i className="bi bi-calendar2-check"></i>{" "}
            <strong>Joined Date : </strong> {employee.joinDate}</span>
          </div>
         
         <Card>
             <CardHeader className='d-flex align-items-center justify-content-between emp-details-header-2'>
                <h5>Customer ID :</h5>
               
             </CardHeader>
             <CardBody>
                <Table striped bordered hover responsive className="text-center">
                    <thead>
              <tr>
                <th>Customer Name</th>
                <th>Contact Number</th>
                <th>Customer City</th>
                <th>Vehicle Model</th>
                <th>Appointment Date</th>
                <th>Service Type</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
                <tr>

                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <select>
                    <option className="text-success">Completed</option>
                  <option className="text-warning">Pending</option>
                  <option className="text-danger">Not Started</option>
                  </select>
                </td>
                </tr>
              </tbody>
                </Table>
             </CardBody>
         </Card>
        </Card.Body>
        
      </Card>
    </Container>
    
      </div>
  );
};

export default EmployeeDetails;
