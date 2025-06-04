import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/AdminPage/Admin'
import ServiceRequest from './components/AdminPage/ServiceRequest'
import ServiceTeam from './components/AdminPage/ServiceTeam'
import EmployeeDetails from './components/AdminPage/EmployeeDetails'
import AddEmployee from './components/AdminPage/AddEmployee'
import HomePage from './components/HomePage/HomePage'

function App() {
  

  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/servicerequest" element={<ServiceRequest />}></Route>
          <Route path='/serviceteam' element={<ServiceTeam />}> </Route>
          <Route path='/employee' element={<EmployeeDetails />}></Route>
          <Route path='/addemployee' element={<AddEmployee />}></Route>
      </Routes>
   </BrowserRouter>
   
  )
}

export default App
