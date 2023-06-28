import './hotel.css';
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Contact from '../../components/contact/Conatct';
import {ImLocation2} from 'react-icons/im';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import {RxExit} from 'react-icons/rx';

export default function Hotel () {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1'
    }
  ];

  const handleOpen = (i) => {
    setSlideNumber(i); 
    setOpen(true)
  }
  return (
    <div>
      <Navbar />
      <Header type='hotel'/>
     
      <div className="hotelContainer">

        {
          open &&
          <div className="slider">
            
          </div>
        }

        <div className="hotelWrapper">

          <button className="bookNow">Book Now</button>
          <h1 className="hotelTitle">Hotel Post</h1>
          <div className="hotelAddress">
            <ImLocation2 />
            <span className="">Eliesen Str 2 63743, Aschaffenburg</span>
          </div>
          <span className='hotelDistance'>Excellent location - 1km from City-Center </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() =>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">BestHotel in the City</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis sit perspiciatis magnam sequi dolores facilis, quo aut error voluptas ratione corporis illum? Saepe impedit distinctio explicabo perferendis animi laborum, corporis eum provident minus praesentium, consectetur eos fugiat culpa pariatur, tempore laudantium accusamus beatae nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quod odio, recusandae exercitationem, officiis similique fuga velit in laudantium inventore, illum quidem id blanditiis ducimus repellat aspernatur eaque enim? Nostrum.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for summer-vication</h1>
              <span>
                Location in the center of the City. You can go to any Places Within a 15-30 min walk
              </span>
              <h2>
                <b>745€</b>(7 nights)
              </h2>
              <button>Book Know</button>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};
