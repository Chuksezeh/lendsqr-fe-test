import React, { useState } from "react";
import loginImage from "./Images/vector-serc-removebg-preview.png"; 
import lendsqrLogo from "./Images/lendsqr-logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import "./home.scss";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Clear error when user types
        if (errors[id as keyof typeof errors]) {
            setErrors(prev => ({
                ...prev,
                [id]: ""
            }));
        }
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            email: "",
            password: ""
        };

        if (!formData.email) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            navigate("/dashboard");
        }
    };

    const isButtonDisabled = 
        !formData.email ||
        !formData.password ||
        Boolean(errors.email) ||
        Boolean(errors.password);

    return (
        <section className="container container-login">
            <div className="image-section">
                <div className="logo-section-header">
                    <img src={lendsqrLogo} style={{width:"70px"}} alt="Lendsqr Logo" /> 
                    <span className="lendBrand-name">lendsqr</span> 
                </div>
                
                <div className="image-wrapper">
                    <img src={loginImage} alt="Login illustration" className="login-main-image"/>
                </div>
            </div>

            <div className="form-section">
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <h1 className="welcome-text">Welcome!</h1>
                    <div className="enter-details-text">Enter details to login</div>
                    <br/>

                    <div className="input-container">
                        <div className="form-group">
                            <input 
                                className={`loginpage-input ${errors.email ? "input-error" : ""}`}
                                type="email" 
                                id="email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email" 
                                required
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>
                        <br/>
                        <div className="form-group">
                            <input 
                                className={`loginpage-input ${errors.password ? "input-error" : ""}`}
                                type="password" 
                                id="password" 
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                required
                                minLength={6}
                            />
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                    </div>

                    <div className="remember-forgot">
                        <h3 className="forgot-pass-text">FORGOT PASSWORD?</h3>
                    </div>

                    <button 
                        type="submit"
                        className={`login-btn ${isButtonDisabled ? "disabled" : ""}`}
                        disabled={isButtonDisabled}
                    >
                        LOG IN
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Home;