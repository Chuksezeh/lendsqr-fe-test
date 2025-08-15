import React, { useState, useEffect } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";

const App: React.FC = () => {
 

  return (
    <>
    {/* <div className="app">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div> */}

  

  <Router>
      
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
             
            </Routes>
         
    </Router>



    </>
  );
};

export default App;
