import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServiceRequest from './components/ServiceRequest';
import ServiceTeam from './components/ServiceTeam';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import Admin from "./components/Admin"
import Registerpage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

import FixMyRideHomepage from "./components/FixMyRideHomepage";
import Forgotpass from "./components/Forgotpass";
import "bootstrap/dist/css/bootstrap.min.css";
import UserCarDetails from "./components/UserCarDetails";
import UserStatus from "./components/UserStatus";
import Employee from "./components/Employee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FixMyRideHomepage />}></Route>
          <Route path="/Registerpage" element={<Registerpage />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>

          <Route path="/ForgotPass" element={<Forgotpass />}></Route>

          <Route path="/UserCarDetails" element={<UserCarDetails />}></Route>
          <Route path="/UserStatus" element={<UserStatus />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/UpdateEmployee" element={<UpdateEmployee />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/servicerequest' element={<ServiceRequest />}></Route>
        <Route path='/serviceteam' element={<ServiceTeam />}></Route>
        <Route path='/employeedetails' element={<EmployeeDetails />}></Route>
        <Route path='/addemployee' element={<AddEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
