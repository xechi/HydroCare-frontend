import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import axios from "axios";

// Protected route component
const PrivateRoute = ({ element: Element, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null to show loading while checking
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setIsAuthenticated(false);
                setIsLoading(false);
                return;
            }

            try {
                // Lakukan request ke server untuk memverifikasi token
                const response = await axios.post(
                    "http://localhost:4000/protected", 
                    {},  // Body request kosong karena token ada di header
                    {
                        headers: {
                            "Authorization": `Bearer ${token}`, // Token di header
                            "Content-Type": "application/json", // Pastikan header sudah benar
                        },
                    }
                );

                if (response.data.isValid) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Token verification failed", error);
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        verifyToken();
    }, []);

    // Tampilkan loading spinner atau message jika token masih dalam proses validasi
    if (isLoading) {
        return <div>Loading...</div>; // Bisa diganti dengan loading spinner atau skeleton UI
    }

    // Jika sudah tervalidasi, alihkan sesuai kondisi
    return isAuthenticated ? Element : <Navigate to="/login" />;
};

export default PrivateRoute;