import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServiceRequest from './components/ServiceRequest/ServiceRequest';
import ServiceTeam from './components/ServiceTeam/ServiceTeam';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import AddEmployee from './components/AddEmployee/AddEmployee';
import Admin from "./components/AdminPage/Admin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Admin />}></Route>
        <Route path='/servicerequest' element={<ServiceRequest />}></Route>
        <Route path='/serviceteam' element={<ServiceTeam />}></Route>
        <Route path='/employeedetails' element={<EmployeeDetails />}></Route>
        <Route path='/addemployee' element={<AddEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
