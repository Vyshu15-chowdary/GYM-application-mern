import React from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css";
import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import WorkoutSessions from "./components/Workoutsession"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICaluculator/>
      <Footer/>
      <ToastContainer theme = 'dark' position = 'top-center'/>

    </Router>
  )
}

export default App
