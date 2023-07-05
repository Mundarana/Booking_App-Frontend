import "./searchItem.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsTrash3 } from "react-icons/bs";

import axios from "axios";

const localUrl = "http://localhost:8600/hotels";
const deployedUrl = "https://booking-app-eqel.onrender.com/hotels/";

export default function SearchItem() {
  const [hotels, setHotels] = useState([]);
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(deployedUrl);
        console.log("API Response:", response.data);

        if (response.status === 200) {
          setHotels(response.data);
        }
      } catch (error) {
        console.log("Error fetching hotels:", error);
      }
    };

    fetchData();
  }, [flag]);

  console.log("Hotels:", hotels);

  if (!hotels) {
    return <p>Loading hotels...</p>;
  }

  const getHotelImage = (typeOfProperty) => {
    switch (typeOfProperty) {
      case "Hotel":
        return "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=";
      case "Apartment":
        return "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg";
      case "Resorts":
        return "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg";
      case "Villas":
        return "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg";
      case "Cabins":
        return "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg";
      default:
        return "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1";
    }
  };

  const handaleDeleteHotels = async (e) => {
    try {
      console.log("e.currentTarget.value", e.currentTarget.value);
      const response = await fetch(`${deployedUrl}${e.currentTarget.value}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const deletedHotels = await response.json();
        console.log(deletedHotels);
      } else {
        const errorData = await response.json();
        console.log(errorData.error);
      }
    } catch (error) {
      console.error("An error occurred while deleting Hotel:", error);
    }
    setFlag(!flag)
  };

  function getRatingText(rating) {
    if (rating >= 4) {
      return "Excellent";
    } else if (rating >= 3) {
      return "Good";
    } else if (rating >= 2) {
      return "Average";
    } else if (rating >= 1) {
      return "Poor";
    } else {
      return "No Rating";
    }
  }

  return (
    <div className="siContainer">
      {hotels.data?.map((hotel) => {
        return (
          <div key={hotel.id} className="si">
            <img
              src={
                hotel.photos && hotel.photos.length
                  ? hotel.photos[0].url
                  : getHotelImage(hotel.typeOfProperty)
              }
              alt=""
              className="siImg"
            />

            {/* <img
            src={hotel.img}
            alt=""
            className="siImg"
          /> */}

            <div className="siDesc">
              <h1 className="siName">{hotel.name}</h1>
              <span className="siAddress">{hotel.address}</span>
              <span className="siCity">{hotel.city}</span>
              <span className="siDistanc">
                {hotel.distanceFromCityCenter}km
              </span>
              <span className="siTitle">{hotel.title}</span>
              <p className="siText">{hotel.desc}</p>
            </div>

            <div className="siDetail">
              <div className="siRating">
                <span>{getRatingText(hotel.rating)}</span>
                <button>{hotel.rating}</button>
              </div>
              <div className="siDeletBtn">
                <button
                  sx={{ p: 1 }}
                  value={hotel._id}
                  onClick={handaleDeleteHotels}
                >
                  <BsTrash3 />
                </button>
              </div>
              <div className="isDetailRoomText">
                {hotel.rooms.map((room) => (
                  <span>{room.desc}</span>
                ))}
              </div>

              <div className="siDetailText">
                <span className="siPrice">{hotel.rooms[0]?.price}€</span>
                <span className="siTax">Includes taxes and fees</span>
                <Link to={`/hotels/${hotel._id}`} className="siCheckButton">
                  See Availability
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className='si'>
        <img src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siName">Hotel Post</h1>
          <span className='siAddress'>Eliesen Str.2 63743</span>
          <span className="siCity">Aschaffenburg</span>
          <sapn className="siDistanc">1km</sapn>
          <span className="siTitle">Best Hotel</span>
          <p className='siText'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptatum!</p>
          
        </div>

        <div className="siDetail">
          <div className="siRating">
            <span>Good</span>
            <button>3.9</button>
          </div>
          <div className="siDetailText">
            <span className="siPrice">110€</span>
            <span className="siTax">Includes taxes and fees</span>
            <Link to={`/hotels/_id`} className="siCheckButton">
              See Availability
            </Link>
        </div>
        </div>
      </div>  */}
    </div>
  );
}
