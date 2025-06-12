

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import UserCarDetails from './components/UserCarDetails';
import UserStatus from './components/UserStatus';
import Employee from './components/Employee';
import UpdateEmployee from './components/UpdateEmployee';




function App() {
  return(
    <div>

   {/*</div> <div style={{ minHeight: "200vh",  minWidth:"200vh"}}>*/}
  <Router>
    <Routes>
       
         
          <Route path='/UserCarDetails' element={<UserCarDetails/>}></Route>
          <Route path='/UserStatus' element={<UserStatus/>}></Route>
        <Route path='/' element={<Employee/>}></Route>
          <Route path='/UpdateEmployee' element={<UpdateEmployee/>}></Route>
         
    </Routes>
  </Router>
 </div>
  )
}

export default App;
