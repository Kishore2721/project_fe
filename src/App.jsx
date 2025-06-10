
import Registerpage from './components/RegisterPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import UserCarDetails from './components/UserCarDetails';
import UserStatus from './components/UserStatus';
import EmployeeDetails from './components/EmployeeDetails';
import EmployeeLogin from './components/EmployeeLogin';
import AdminLogin from './components/AdminLogin';
import AdminPage from './components/AdminPage';
import FixMyRideHomepage from './components/FixMyRideHomepage';
import EmployeeWorkStatusPage from './components/EmployeeWorkStatusPage';
import Employee from './components/Employee';
import UpdateEmployee from './components/UpdateEmployee';




function App() {
  return(
    <div>

   {/*</div> <div style={{ minHeight: "200vh",  minWidth:"200vh"}}>*/}
  <Router>
    <Routes>
       
         <Route path='/Registerpage' element={<Registerpage/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}></Route>
          <Route path='/UserCarDetails' element={<UserCarDetails/>}></Route>
          <Route path='/UserStatus' element={<UserStatus/>}></Route>
          <Route path='/EmployeeLogin' element={<EmployeeLogin/>}></Route>
          <Route path='/EmployeeDetails' element={<EmployeeDetails/>}></Route>
          <Route path='/AdminLogin' element={<AdminLogin/>}></Route>
          <Route path='/AdminPage' element={<AdminPage/>}></Route>
             <Route path='/Employee' element={<Employee/>}></Route>
              <Route path='/UpdateEmployee' element={<UpdateEmployee/>}></Route>
          <Route path='/EmployeeWorkStatusPage' element={<EmployeeWorkStatusPage/>}></Route>
          <Route path='/' element={<FixMyRideHomepage/>}></Route>

    </Routes>
  </Router>
 </div>
  )
}

export default App;
