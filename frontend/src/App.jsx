import './App.css';
import Auth from "./Component/Auth/Auth";
import Register from "./Component/Register/Register";
import Home from "./Component/Home/Home";
import React from 'react';
import Header from './Component/Header_and_footer/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profilepage from './Component/userprofile/profile';
import Collection from './Component/Collection/collection';


function App() {
  return (
    <div className="App">
          <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile" element={<Profilepage/>}/>
                    <Route path="/collection" element={<Collection/>}/>
                    {/* <Route path="/home/user/checkout" element={<Checkout/>}/>
                    <Route path="/home/LoginPage/ForgotPassword" element={<ForgotPassword/>}/> */}
                </Routes>
            </Router>
    </div>
  );
}

export default App;
