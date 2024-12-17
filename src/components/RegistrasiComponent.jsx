import React, { useState } from "react";
import "../css/RegistrasiComponent.css";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for routing

// Import gambar
import BgLogin from "../assets/img/bglogin.png";

const RegistrasiComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState(""); 
    const [messageType, setMessageType] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to the API
            const response = await axios.post("http://localhost:4000/register", {
                name,
                email,
                password
            });

            // Clear the form if registration is successful
            setName("");
            setEmail("");
            setPassword("");

            // Set the success message
            setMessage("Registration successful!");
            setMessageType("success");
        } catch (error) {
            console.error("Error during registration:", error);
            // Set the error message
            setMessage("Registration failed. Please try again.");
            setMessageType("error");
        }
    };

    return (
        <div className="login-container" style={{ backgroundImage: `url(${BgLogin})` }}>
            <div className="login-form">
                <h1>Register here!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
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
                    <button type="submit" className="btn-login">Sign up</button>
                </form>

                {message && (
                    <span
                        className={messageType === "success" ? "success-message" : "error-message"}
                    >
                        {message}
                    </span>
                )}

                <div className="signin-container">
                    <p>Already have an account?{" "}
                        <Link to="/login" className="signin-link">Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegistrasiComponent;