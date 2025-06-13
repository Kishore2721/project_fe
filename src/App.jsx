import { BrowserRouter,Route, Routes } from 'react-router-dom'
import UserCarDetails from './components/UserCarDetails'
import UserStatus from './components/UserStatus'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserCarDetails/>}/>
      <Route path="/status" element={<UserStatus/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
