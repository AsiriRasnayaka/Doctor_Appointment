import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Doctor from './pages/Doctor';
import DoctorDetails from './pages/DoctorDetails';
import MyAppointments from './pages/MyAppointments';
import Profile from './pages/Profile';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/doctor-details/:id" element={<DoctorDetails />} />
      <Route path="/my-appointments" element={<MyAppointments />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    </div>
    
  )
}

export default App