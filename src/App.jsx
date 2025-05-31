import Homepage1 from './components/Homepage1';
import Registerpage from './components/Registerpage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return(
    <div style={{ minHeight: "200vh",  minWidth:"200vh"}}>
  <Router>
    <Routes>
      <Route path='/' element={<Homepage1/>}></Route>
         <Route path='/Registerpage' element={<Registerpage/>}></Route>
    </Routes>
  </Router>
 </div>
  )
}

export default App;
