import React from "react";
import "../css/NavbarComponent.css"; // Hubungkan ke file CSS untuk styling
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate();
  
  // Check if the user is logged in by verifying the presence of a token in localStorage
  const isLoggedIn = localStorage.getItem("token") !== null;

  // Function to handle logout
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    
    // Redirect to login page after logout
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="src/assets/img/logo.png" alt="HydroCare Logo" />
        </div>

        {/* Menu navigasi */}
        <ul className="nav-links">
          <li>
            <a href="/">Beranda</a>
          </li>
          <li>
            <a href="/hydro-ai">Hydro.AI</a>
          </li>
          <li>
            <a href="/edukasi">Edukasi</a>
          </li>
          <li>
            <a href="/#berita">Berita</a>
          </li>
          <li>
            <a href="/#contact">Bantuan</a>
          </li>
        </ul>

        {/* Tombol Login/Logout */}
        <div className="login-button">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;