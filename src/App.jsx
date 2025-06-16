
import Registerpage from './components/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import FixMyRideHomepage from './components/FixMyRideHomepage';
import Forgotpass from './components/Forgotpass';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>

          <Route path='/Registerpage' element={<Registerpage />}></Route>
          <Route path='/LoginPage' element={<LoginPage />}></Route>
          <Route path='/' element={<FixMyRideHomepage />}></Route>

           
          <Route path='/ForgotPass' element={<Forgotpass />}></Route>
        </Routes>
      </Router>
    </div>

  )
}

export default App;
