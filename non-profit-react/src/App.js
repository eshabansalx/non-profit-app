
import React, { useState } from "react";
import logo from './images/logo.svg';
import './App.css';
import Layout from "../src/Layout";
import Login from "../src/pages/Login.js";
import Signup from "../src/pages/Signup.js";
import Home from "../src/pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = { <Layout></Layout> }>
            <Route index element = { <Login></Login> }></Route>
            <Route path = "/signup" element = { <Signup></Signup> } ></Route>
            <Route path = "/home" element = { <Home></Home> }></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">

  //       <nav>
  //       <ul>
  //         <li><a href="index.html">GivingGarden      </a></li>
  //         <li><a href="home.html">Home</a></li>
  //         <li><a href="favorites.html">Favorites</a></li>
  //         <li><a href="garden.html">Garden        </a></li>
  //         <li><a href="basket.html">Basket</a></li>
  //         <li><a href="profile.html">Profile</a></li>
          
  //       </ul>
  //       </nav>

  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload. Soon, this will be Giving Garden.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
}

export default App;