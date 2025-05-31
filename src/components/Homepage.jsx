const HomePage = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://media.istockphoto.com/id/1036660912/vector/auto-service-logo-car-repair-icon-vector.jpg?s=612x612&w=0&k=20&c=nAATsiOyMv5UKUC3T-nIMj-WDou3kSEx1-x2tVHjsaY="
        alt="Car Service Logo"
        style={styles.logo}
      />
      <h1 style={styles.title}>Multibrand Car Service Management System</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Login as User</button>
        <button style={styles.button}>Login as Admin</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    margin: 0,
    backgroundImage:
      'url("https://t4.ftcdn.net/jpg/00/39/81/53/360_F_39815360_uuXSwoHazDlAvmY21ikaVrFh5qDKA9dv.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: 0,
  },
  logo: {
    width: '300px',            
    marginBottom: '30px',
  },
  title: {
    fontSize: '48px',          
    marginBottom: '50px',
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  button: {
    padding: '18px 36px',      
    fontSize: '22px',          
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
  },
};



export default HomePage;