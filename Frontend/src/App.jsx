import React from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css";
import React from 'react'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <workoutSessions/>
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
