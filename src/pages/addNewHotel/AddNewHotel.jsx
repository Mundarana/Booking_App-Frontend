import "./addNewHotel.css";
import React, { useEffect, useState, useContext } from "react";
import Contact from "../../components/contact/Conatct";
import NavbarLS from "../../components/LOGIN_SIGNUP/navbar/NavbarLS";
import Header from "../../components/header/Header";
import UploadPhoto from "../../components/uploadPhotos/UploadPhoto";
import { useRef } from "react";
import LoadingOverlay from "react-loading-overlay";
import AuthContext from "../../context/authContext";
import axios from "axios";

const localUrl = "http://localhost:8600/hotels";
const deployedUrl = "https://booking-app-eqel.onrender.com/hotels";

const HotelAddingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    typeOfProperty: "",
    city: "",
    address: "",
    telephone: "",
    distanceFromCityCenter: "",
    photos: [],
    title: "",
    desc: "",
    rating: 0,
    rooms: [],
    cheapestPrice: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRoomInputChange = (index, event) => {
    const { name, value } = event.target;
    setFormData((prevData) => {
      const updatedRooms = [...prevData.rooms];
      updatedRooms[index][name] = value;
      return {
        ...prevData,
        rooms: updatedRooms,
      };
    });
  };

  const handleAddRoom = () => {
    setFormData((prevData) => {
      return {
        ...prevData,
        rooms: [
          ...prevData.rooms,
          {
            roomTitle: "",
            price: "",
            maxPeople: "",
            roomDesc: "",
          },
        ],
      };
    });
  };

  const handleRemoveRoom = (index) => {
    setFormData((prevData) => {
      const updatedRooms = [...prevData.rooms];
      updatedRooms.splice(index, 1);
      return {
        ...prevData,
        rooms: updatedRooms,
      };
    });
  };

  // PICTURES HAVE TO BE ADDED FROM THIS FUNCTION RATHER THAN THEIR OWN COMPONENT
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("FORM DATA RIGHT BEFORE SUBMISSION", formData);
    try {
      const response = await fetch(localUrl, {
        method: "POST", // Adjust the method as per your backend API
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        // If the response is successful, display a success message or handle the success scenario.
        console.log("Hotel data submitted successfully!");
        // Reset form data
        setFormData({
          name: "",
          typeOfProperty: "",
          city: "",
          address: "",
          telephone: "",
          distanceFromCityCenter: "",
          photos: [],
          title: "",
          desc: "",
          rating: 0,
          rooms: [],
          cheapestPrice: 0,
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error occurred while submitting hotel data:", error);
      setIsLoading(false);
    }
  };

  const resultRef = useRef(null);

  return (
    <LoadingOverlay active={isLoading} className="hdpContainer">
      <NavbarLS />
      <Header type="hotel" resultRef={resultRef} />
      <div className="HotelAddingPage">
        <form onSubmit={handleSubmit}>
          <div className="hapItems">
            <h2>Add Hotel</h2>
            <div className="hapItem">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="hapItem">
              <label htmlFor="title">Name of the Owner:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="hapItem">
              <label htmlFor="typeOfProperty">Type of Property:</label>
              <input
                type="text"
                id="typeOfProperty"
                name="typeOfProperty"
                value={formData.typeOfProperty}
                onChange={handleInputChange}
                required
                list="propertyTypes"
              />
              <datalist id="propertyTypes">
                <option value="Hotel" />
                <option value="Apartment" />
                <option value="Resorts" />
                <option value="Villas" />
                <option value="Cabins" />
                <option value="Other" />
              </datalist>
            </div>
            <div className="hapItem">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="hapItem">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="hapItem">
              <label htmlFor="telephone">Telephone:</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="hapItem">
              <label htmlFor="distanceFromCityCenter">
                Distance from City Center:
              </label>
              <input
                type="text"
                id="distanceFromCityCenter"
                name="distanceFromCityCenter"
                value={formData.distanceFromCityCenter}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="hapItem">
              <UploadPhoto />

              {/* <label htmlFor="photos">Photos:</label>
            <input
              type="file"
              id="photos"
              name="photos"
              multiple
              onChange={(event) => {
                const files = event.target.files;
                if (!files) {
                 setFormData((prevData) => ({
                  ...prevData,
                  photos: null,
                }));
                }
                const photoUrls = [];
                for (let i = 0; i < files.length; i++) {
                  const url = URL.createObjectURL(files[i]);
                  photoUrls.push(url);
                }
                setFormData((prevData) => ({
                  ...prevData,
                  photos: photoUrls,
                }));
              }}
            /> */}
            </div>
            {/* <div className="hapItem">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div> */}
            <div className="hapItem">
              <label htmlFor="desc">Description:</label>
              <textarea
                id="desc"
                name="desc"
                value={formData.desc}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="hapItem">
              <label htmlFor="rating">Rating:</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={Number(formData.rating)}
                min={0}
                max={5}
                onChange={handleInputChange}
              />
            </div>
            <div className="hapItem">
              <label>Rooms:</label>
              {formData.rooms.map((room, index) => (
                <div key={`room-${index}`} className="roomItem">
                  <span>Room {index + 1}</span>
                  <div className="roomItemInner">
                    <div className="hapItem">
                      <label htmlFor={`roomTitle-${index}`}>Room Type:</label>
                      <input
                        className="riiInput"
                        type="text"
                        id={`roomTitle-${index}`}
                        name="roomTitle"
                        value={room.roomTitle}
                        onChange={(event) =>
                          handleRoomInputChange(index, event)
                        }
                        required
                      />
                    </div>
                    <div className="hapItem">
                      <label htmlFor={`price-${index}`}>Price:</label>
                      <input
                        className="riiInput"
                        type="number"
                        id={`price-${index}`}
                        name="price"
                        value={room.price}
                        onChange={(event) =>
                          handleRoomInputChange(index, event)
                        }
                        required
                      />
                    </div>
                    <div className="hapItem">
                      <label htmlFor={`maxPeople-${index}`}>Max People:</label>
                      <input
                        className="riiInput"
                        type="number"
                        id={`maxPeople-${index}`}
                        name="maxPeople"
                        value={room.maxPeople}
                        onChange={(event) =>
                          handleRoomInputChange(index, event)
                        }
                        required
                      />
                    </div>
                    <div className="hapItem">
                      <label htmlFor={`roomDesc-${index}`}>
                        Room Description:
                      </label>
                      <textarea
                        className="riiInput"
                        id={`roomDesc-${index}`}
                        name="roomDesc"
                        value={room.roomDesc}
                        onChange={(event) =>
                          handleRoomInputChange(index, event)
                        }
                        required
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveRoom(index)}
                    >
                      Remove Room
                    </button>
                  </div>
                </div>
              ))}
              <button type="button" onClick={handleAddRoom}>
                Add Room
              </button>
            </div>
            <div className="hapItem">
              <label htmlFor="cheapestPrice">Cheapest Price:</label>
              <input
                type="number"
                id="cheapestPrice"
                name="cheapestPrice"
                value={formData.cheapestPrice}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Contact ref={resultRef} />
    </LoadingOverlay>
  );
};

export default HotelAddingPage;
