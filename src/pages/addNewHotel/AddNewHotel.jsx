import './addNewHotel.css';
import React, { useState } from 'react';
import Contact from '../../components/contact/Conatct';
import Header from '../../components/LOGIN_SIGNUP/header/LS-Header';

export default function HotelAddingPage(){
  const [img, setImg] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [typeOfHotel, setTypeOfHotel] = useState('');
  const [description, setDescription] = useState('');
  const [hotelRating, setHotelRating] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [distance, setDistance] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access all the form values using the state variables above
    console.log({
      img,
      hotelName,
      typeOfHotel,
      description,
      hotelRating,
      price,
      address,
      city,
      distance
    });
  };

  return (
    <div className="newContainer">
      <Header />
      <div className="hotel-adding-page">
        <h2>Add a New Hotel</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="img-input">
            <label htmlFor="img">Image:</label>
            <img src={img} alt="Hotel" />
            <input
              type="img"
              id="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="hotelName-input">
            <label htmlFor="hotelName">Hotel Name:</label>
            <input
              type="text"
              id="hotelName"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
            />
          </div>
          <div className="typeOfHotel-input">
            <label htmlFor="typeOfHotel">Type of Hotel:</label>
            <input
              type="text"
              id="typeOfHotel"
              value={typeOfHotel}
              onChange={(e) => setTypeOfHotel(e.target.value)}
            />
          </div>
          <div className="description-input">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="hotelRating-input">
            <label htmlFor="hotelRating">Hotel Rating:</label>
            <input
              type="number"
              id="hotelRating"
              value={hotelRating}
              onChange={(e) => setHotelRating(e.target.value)}
            />
          </div>
          <div className="price-input">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="address-input">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="city-input">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="distance-input">
            <label htmlFor="distance">Distance:</label>
            <input
              type="number"
              id="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />
          </div>
          <button type="submit">Add Hotel</button>
        </form>
      </div>
      <Contact />
    </div>
  );
};

