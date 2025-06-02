import { useNavigate } from "react-router-dom";
const HomePage1 = () => {
  const navigate=useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        height: '100vh',
        width: '100vw',
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/00/39/81/53/360_F_39815360_uuXSwoHazDlAvmY21ikaVrFh5qDKA9dv.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img
        src="https://media.istockphoto.com/id/1036660912/vector/auto-service-logo-car-repair-icon-vector.jpg?s=612x612&w=0&k=20&c=nAATsiOyMv5UKUC3T-nIMj-WDou3kSEx1-x2tVHjsaY="
        alt="Car Service Logo"
        style={{ width: '200px', marginBottom: '30px' }}
      />
      <h1 >Multibrand Car Service Management System</h1>
      <div className="d-flex gap-3">
        <button className="btn btn-primary btn-lg" onClick={()=>navigate('/RegisterPage')}>Login as User</button>
        <button className="btn btn-success btn-lg"onClick={()=>navigate('/AdminLogin')}>Login as Admin</button>
         <button className="btn btn-success btn-lg" onClick={()=>navigate('/EmployeeLogin')}>Login as Employee</button>
      </div>
    </div>
  );
};

export default HomePage1;
