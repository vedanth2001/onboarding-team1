// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import RestaurantListing from './components/RestaurantListing';
import RestaurantDetails from './components/RestaurantDetails';
import ReviewBookingPage from './components/ReviewBookingPage';
import ConfirmationPage from './components/ConfirmationPage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Blurred Background */}
        <div className="background-container"></div>

        {/* Content Container */}
        <div className="content-container">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/restaurant-listing" element={<RestaurantListing />} />
              <Route path="/restaurant/:restaurantId" element={<RestaurantDetails />} />
              <Route path="/restaurant/:restaurantId/booking/:slotId/review" element={<ReviewBookingPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
