import './hotel.css';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/LOGIN_SIGNUP/navbar/NavbarLS';
import Header from '../../components/header/Header';
import Contact from '../../components/contact/Conatct';
import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import LoadingOverlay from "react-loading-overlay";
import { AuthContext } from "../../context/authContext";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from 'react-router-dom';

const localUrl = "http://localhost:8600/hotels";
const deployedUrl = "https://booking-app-eqel.onrender.com/hotels";

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [showTelephone, setShowTelephone] = useState(false);
  const [hotelData, setHotelData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const resultRef = useRef(null);

  const {id} = useParams()

  console.log("$$$$$$$$$&&&&&&&&§§§§§§§$$$$$$$$$$$$$$$", id)

  const fetchHotelData = async () => {
    try {
      const response = await fetch(`${deployedUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch hotel data');
      }
      const data = await response.json();
      setHotelData(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching hotel data:', error);
      setError('Failed to fetch hotel data');
      setLoading(false);
    }
  };

  console.log("HOTEL DATA",hotelData)

  useEffect(() => {
    fetchHotelData()
  }, []);



  const photos = [
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg'
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg'
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg'
    },
    {
      src: 'https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o='
    },
  ];

  const formattedPhotos = hotelData?.photos?.map((photoUrl) => ({
    src: photoUrl,
  }));

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };


  const handleBookNow = () => {
    if (showTelephone) {
      // Call the telephone number
      window.open(`tel:${hotelData.telephone}`, '_blank');
    } else {
      // Show the telephone number
      setShowTelephone(true);
    }
  };

  const toggleTelephone = () => {
    setShowTelephone(!showTelephone);
  };

  if (loading) {
    return (
      <div className='hotelLoading'>Loading...</div>
    );
  }

  if (error) {
    return (
      <div>Error: {error}</div>
    );
  }

  // Add a check for hotelData and photos
  if (!hotelData) {
    return (
      <div>No hotel data available</div>
    );
  }

  if (!hotelData) {
    return (
      <div>No hotel data available</div>
    );
  }

  return (
    <LoadingOverlay>
      <Navbar />
      <Header type='hotel' resultRef={resultRef} />

      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">{hotelData.name}</h1>
          <div className="hotelAddress">
            <ImLocation2 />
            <span className="">{hotelData.address},{hotelData.city}</span>
          </div>
          <div className="hotelTelno">
            <BsFillTelephoneFill />
            <span >{hotelData.telephone}</span>
          </div>
          <span className='hotelDistance'>Excellent location - {hotelData.distanceFromCityCenter}km from City-Center </span>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h4 className="hotelTitle">Owner:{hotelData.title}</h4>
              <p className="hotelDesc">
                {hotelData.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for summer-vication</h1>
              <span>
                {hotelData.location}
              </span>
              <h2>
                <b>{hotelData.price}</b>(7 nights)
              </h2>
              <button
                className="siCheckButton"
                onClick={handleBookNow}
              >
                {showTelephone ? 'Call Now' : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="imageGalleryWrapper">
        <ImageGallery
          // items={hotelData.photos}
          items={formattedPhotos.lenght > 0 ? formattedPhotos : photos}
          slideInterval={2000}
          startIndex={slideNumber}
          onSlide={setSlideNumber}
          showPlayButton={false}
          showFullscreenButton={true}
        />
      </div>

      <Contact ref={resultRef} />
    </LoadingOverlay>




    // <div>
    //   <Navbar />
    //   <Header type='hotel' resultRef={resultRef}/>
     
    //   <div className="hotelContainer">


    //     <div className="hotelWrapper">

    //       {/* <button className="bookNow">Book Now</button> */}
    //       <h1 className="hotelTitle">Hotel Post</h1>
    //       <div className="hotelAddress">
    //         <ImLocation2 />
    //         <span className="">Eliesen Str 2 63743, Aschaffenburg</span>
    //       </div>
    //       <span className='hotelDistance'>Excellent location - 1km from City-Center </span>
    //       {/* <div className="hotelImages">
    //         {photos.map((photo, i) => (
    //           <div className="hotelImgWrapper">
    //             <img onClick={() =>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
    //           </div>
    //         ))}
    //       </div> */}
    //       <div className="hotelDetails">
    //         <div className="hotelDetailsText">
    //           <h1 className="hotelTitle">BestHotel in the City</h1>
    //           <p className="hotelDesc">
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis sit perspiciatis magnam sequi dolores facilis, quo aut error voluptas ratione corporis illum? Saepe impedit distinctio explicabo perferendis animi laborum, corporis eum provident minus praesentium, consectetur eos fugiat culpa pariatur, tempore laudantium accusamus beatae nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quod odio, recusandae exercitationem, officiis similique fuga velit in laudantium inventore, illum quidem id blanditiis ducimus repellat aspernatur eaque enim? Nostrum.
    //           </p>
    //         </div>
    //         <div className="hotelDetailsPrice">
    //           <h1>Perfect for summer-vication</h1>
    //           <span>
    //             Location in the center of the City. You can go to any Places Within a 15-30 min walk
    //           </span>
    //           <h2>
    //             <b>745€</b>(7 nights)
    //           </h2>
    //           <button>Book Know</button>
    //         </div>
    //       </div>
    //       <div className="hotelImages">
    //         {photos.map((photo, i) => (
    //           <div className="hotelImgWrapper">
    //             <img onClick={() =>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <Contact ref={resultRef} />
    // </div>


  );
}
