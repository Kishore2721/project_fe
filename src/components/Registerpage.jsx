import { useNavigate } from "react-router-dom"


function Registerpage(){
    const navigate=useNavigate()
    return(
         <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'url("https://media.istockphoto.com/id/1892179107/photo/cars-open-bonnet-parked-in-garage-for-repair-and-maintenance-service.jpg?s=612x612&w=0&k=20&c=wMIlCxuCPfCl-uWfUF_W1IzGZPPlIUUkbQq68kpKtvo=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
            
    <div className="container w-75 mt-5 pt-5">
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
               <button
                className="btn btn-warning"
                onClick={() => navigate('/')}
              >
                <i className="bi bi-arrow-left me-2"></i>Go Back
              </button>
          <h1 >Register Here</h1>
          
          <i className="bi bi-table btn btn-info"> already registered?,then click here to go to Loginpage</i>
        </div>
        <form className="form" method="post" >
          <div className="card-body">
            <input
              type="text"
              name="userName" 
              placeholder="Enter your name"
              className="form-control mb-1"
              
            />
            <input
              type="email"
              name="userEmail" 
              placeholder="Enter your email"
              className="form-control mb-1"
             
            />
            <input
              type="number"
              name="userNumber" 
              placeholder="Enter your contact number"
              className="form-control"
              
            />
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    )
    }

    export default Registerpage