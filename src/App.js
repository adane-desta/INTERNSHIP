import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // ✅ Adjust paths to match your folder
import Properties from './pages/Properties';
import Welcome from './pages/Welcome';
import Register from './pages/Register';
import Login from './pages/Login';
import Notification from './pages/Notification';
import Companies from './pages/Companies';  
import Forgetpassword from './pages/Forgetpassword';
import PropertyDetail from './pages/PropertyDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
