import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ServiceRequest from './components/ServiceRequest';
import ServiceTeam from './components/ServiceTeam';
import EmployeeDetails from './components/EmployeeDetails';
import AddEmployee from './components/AddEmployee';
import Admin from "./components/Admin"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/servicerequest' element={<ServiceRequest />}></Route>
        <Route path='/serviceteam' element={<ServiceTeam />}></Route>
        <Route path='/employeedetails' element={<EmployeeDetails />}></Route>
        <Route path='/addemployee' element={<AddEmployee />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
