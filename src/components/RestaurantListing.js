// src/components/RestaurantListing.js
import React, { useState } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';

const RestaurantListing = () => {
  const [cuisineType, setCuisineType] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');

  // Dummy restaurant data (replace this with actual data from your backend)
  const restaurants = [
    { id: 1, name: 'Restaurant A', cuisine: 'Italian', location: 'City Center', image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Ftoohotel.com%2Fwp-content%2Fuploads%2F2022%2F09%2FTOO_restaurant_Panoramique_vue_Paris_nuit_v2-scaled.jpg&tbnid=9NgHjxUjWdi-rM&vet=12ahUKEwiEvtXs2fWDAxXfQmwGHUJhBz8QMygKegUIARCHAQ..i&imgrefurl=https%3A%2F%2Ftoohotel.com%2Fen%2Ftoo-restaurant-en%2F&docid=DUqTn5OiOG00GM&w=2560&h=1707&q=restaurant&ved=2ahUKEwiEvtXs2fWDAxXfQmwGHUJhBz8QMygKegUIARCHAQ" },
    { id: 2, name: 'Restaurant B', cuisine: 'Mexican', location: 'Downtown', image: 'restaurant_b_image_url' },
    { id: 3, name: 'Restaurant C', cuisine: 'Asian Fusion', location: 'Suburbia', image: 'restaurant_c_image_url' },
    { id: 4, name: 'Restaurant D', cuisine: 'Indian', location: 'Gurgaon', image: 'restaurant_c_image_url' },
  ];

  // Filter restaurants based on search criteria
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const cuisineMatch = restaurant.cuisine.toLowerCase().includes(cuisineType.toLowerCase());
    const locationMatch = restaurant.location.toLowerCase().includes(location.toLowerCase());
    const titleMatch = restaurant.name.toLowerCase().includes(title.toLowerCase());
    return cuisineMatch && locationMatch && titleMatch;
  });

  return (
    <div>
      <h2>RESTAURANT LISTING</h2>
      {/* Search Bar */}
      <div className="search-rest">
        <input
          type="text"
          placeholder="Search by Cuisine Type"
          value={cuisineType}
          onChange={(e) => setCuisineType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* Display filtered restaurants */}
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id}>
            <RestaurantCard restaurant={restaurant} />
            {/* Link to the RestaurantDetails page with the restaurantId parameter */}
            {/* <Link to={`/restaurant/${restaurant.id}`}>Restaurant Details</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListing;
