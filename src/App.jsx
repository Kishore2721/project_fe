
<<<<<<< HEAD
import Registerpage from './components/RegisterPage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';

import FixMyRideHomepage from './components/FixMyRideHomepage';
import Forgotpass from './components/Forgotpass';
import "bootstrap/dist/css/bootstrap.min.css";
=======

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import UserCarDetails from './components/UserCarDetails';
import UserStatus from './components/UserStatus';
import Employee from './components/Employee';
import UpdateEmployee from './components/UpdateEmployee';
>>>>>>> 29450c74f640e4964da434ee2a66d8d0a116f907




function App() {

  return(
    <div>

   
  <Router>
    <Routes>
<<<<<<< HEAD
         <Route path='/' element={<FixMyRideHomepage/>}></Route>
         <Route path='/Registerpage' element={<Registerpage/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}></Route>
         
<Route path='/ForgotPass' element={<Forgotpass/>}></Route>
=======
       
         
          <Route path='/UserCarDetails' element={<UserCarDetails/>}></Route>
          <Route path='/UserStatus' element={<UserStatus/>}></Route>
        <Route path='/' element={<Employee/>}></Route>
          <Route path='/UpdateEmployee' element={<UpdateEmployee/>}></Route>
         
>>>>>>> 29450c74f640e4964da434ee2a66d8d0a116f907
    </Routes>
  </Router>
 </div>

  )
}

export default App;
