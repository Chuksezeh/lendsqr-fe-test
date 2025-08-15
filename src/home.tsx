import React, { useState } from "react";
import loginImage from "./Images/vector-serc-removebg-preview.png"; 
import lendsqrLogo from "./Images/lendsqr-logo-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import "./home.scss";
const Home: React.FC = () => {

    const navigate = useNavigate();

const handleNavigateDasgboard = () => {
navigate("/dashboard");

}


    return (
        <>

            <section className=" container container-login">
                        
                <div className="image-section">
                    <div className="logo-section-header">
                      <img src={lendsqrLogo } style={{width:"70px"}}/> <span className="lendBrand-name"> lendsqr</span> 

                    </div>
                    
                    <div className="image-wrapper">
                         <img src={loginImage} alt="" className="login-main-image"/>
                          </div>
                  
                        
                       
                   
                </div>

                <div className="form-section">
                    <div className="form-wrapper">
                        

                        <h1 className="welcome-text">Welcome! </h1>
                        <div className="enter-details-text">Enter details to login</div>
                        <br/>

                        <div className="input-container">
                            <div className="form-group">
                                {/* <label >Email</label> */}
                                <input className="loginpage-input" type="email" id="email" placeholder="Email" />
                            </div>
                            <br/>
                            <div className="form-group">
                                {/* <label >Password</label> */}
                                <input type="password" id="password" className="loginpage-input"   placeholder="Password"/>
                            </div>
                        </div>

                        <div className="remember-forgot">
                            {/* <div className="remember-me">
                                <input type="checkbox" value="remember-me" id="remember-me" />
                                <label >Remember me</label>
                            </div> */}

                            <h3 className="forgot-pass-text">FORGOT PASSWORD?</h3>
                        </div>

                        <button className="login-btn" onClick={handleNavigateDasgboard }>LOG IN</button>


                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;