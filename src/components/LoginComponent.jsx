import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "../css/LoginComponent.css";

// Import gambar
import BgLogin from "../assets/img/bglogin.png";

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); 
    const [messageType, setMessageType] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the API
            const response = await axios.post("http://localhost:4000/login", {
                email,
                password
            });

            // Set the success message
            setMessage(response.data.message);
            setMessageType("success");

            // Optionally store the token (e.g., in localStorage or state)
            localStorage.setItem("token", response.data.token);

            // Redirect user to a different page after successful login
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            console.error("Error during login:", error);
            // Set the error message
            setMessage("Login failed. Please check your credentials.");
            setMessageType("error");
        }
    };

    return (
        <div className="login-container" style={{ backgroundImage: `url(${BgLogin})`, backgroundSize: "cover" }}>
            <div className="login-form">
                <h1>Login here!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn-login">Login</button>
                </form>

                {message && (
                    <span
                        className={messageType === "success" ? "success-message" : "error-message"}
                    >
                        {message}
                    </span>
                )}

                <div className="signup-container">
                    Don’t have an account?{" "}
                    <Link to="/register" className="signup-link">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;