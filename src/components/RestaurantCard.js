// src/components/RestaurantCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import Restaurant from '../images/restauranta.avif'
const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card">
      <img src={Restaurant} alt={restaurant.name} className="card-image" />
      <div className="card-details">
        <h3>{restaurant.name}</h3>
        <p>Cuisine: {restaurant.cuisine}</p>
        <p>Location: {restaurant.location}</p>
        {/* Use Link to navigate to the RestaurantDetails page with the restaurantId parameter */}
        <Link to={`/restaurant/${restaurant.id}`} className="details-button">
          Restaurant Details
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
