import './App.css';
import Auth from "./Component/Auth/Auth";
import Register from "./Component/Register/Register";
import Home from "./Component/Home/Home";
import React from 'react';
import Header from './Component/Header_and_footer/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/register" element={<Register />} />
                    {/* <Route path="/profile" element={<ProfilePage/>}/> */}
                    {/* <Route path="/home/user/checkout" element={<Checkout/>}/>
                    <Route path="/home/LoginPage/ForgotPassword" element={<ForgotPassword/>}/> */}
                </Routes>
            </Router>
    </div>
  );
}

export default App;
