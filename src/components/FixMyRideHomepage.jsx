import React from "react";
import "./FixMyRideHomepage.css";
import { useNavigate } from "react-router-dom";





export default function FixMyRideHomepage() {
    const navigate=useNavigate();
  return (
    <div>
      {/* Carousel */}
      <div id="carCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        
        <div className="carousel-inner">
         {/* <audio
       src="/car background music.mp3"
        autoPlay
        loop
        controls={false}
        style={{ display: "none" }}
      />*/}
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?cs=srgb&dl=pexels-mikebirdy-190537.jpg&fm=jpg"
              className="d-block w-100"
              alt="Car 1"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
         <div className="carousel-item">
  <video
    src="/car-video1.mp4"
    autoPlay
    muted
    
    loop
    style={{
      width: "100%",
      height: "100vh",
      objectFit: "cover",
    }}
  >
    Your browser does not support the video tag.
  </video>
</div>

          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/batmobile-concept-car-with-neon-lights_23-2151649875.jpg?semt=ais_hybrid&w=740"
              className="d-block w-100"
              alt="Car 2"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F20f8100f-49e9-4198-b8b7-d83ac8cf4afb_1792x1024.webp"
              className="d-block w-100"
              alt="Car 2"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/1364951753/photo/auto-service-interior-background-with-cars-on-the-lift.jpg?s=612x612&w=0&k=20&c=jd3IpV-koWUZrSHkwSwSdcA-s7bCRwcY233pSQafUJ4="
              className="d-block w-100"
              alt="Car 2"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/06/41/73/20/360_F_641732036_if4Eq4gHSoPiDmmxIcim0FDPkjWGYlOq.jpg"
              className="d-block w-100"
              alt="Car 3"
              style={{ height: "90vh", objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      {/* Hero Overlay Section */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to FixMyRide</h1>
          <p className="lead">Your trusted partner for complete car care solutions</p>
          <a href="#services" className="btn btn-outline-light mt-3">
            Explore Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light" id="about">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center w-75 mx-auto">
            At FixMyRide, we specialize in reliable, transparent, and fast automotive
            maintenance. With expert technicians and modern tools, your vehicle is in safe hands.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-5" id="services">
        <div className="container">
          <h2 className="text-center mb-5">Our Services</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-tools display-4 text-primary mb-3"></i>
                  <h5 className="card-title">General Service</h5>
                  <p className="card-text">Oil change, filters, and 40-point inspection.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-gear-fill display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Engine Repair</h5>
                  <p className="card-text">Complete diagnostics and engine tune-ups.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className="bi bi-battery-charging display-4 text-primary mb-3"></i>
                  <h5 className="card-title">Electrical Services</h5>
                  <p className="card-text">Battery, lighting, and wiring checks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-dark text-white py-5" id="contact">
        <div className="container text-center">
          <h2 className="mb-3">Get In Touch</h2>
          <p>📍 Trivandrum | ☎️ +91-9876543210 | 📧 support@fixmyride.com</p>
          <a href="#" className="btn btn-outline-light mt-3" onClick={()=>navigate('/RegisterPage')}>
            Book a Service
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-3">
        <small>&copy; 2025 FixMyRide. All rights reserved.</small>
      </footer>
    </div>
  );
}
