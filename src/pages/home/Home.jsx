import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import City from '../../components/city/City';
import HotelList from '../../components/hotelList/HotelList';
import Hotel from '../../components/hotel/Hotel';
import Contact from '../../components/contact/Conatct';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <h1 className='homeTitle'>Where do I want to go next?</h1>
          <City />
        <h1 className='homeTitle'>I can find any Type of Place to Stay.</h1>
          <HotelList />
        <h1 className='homeTitle'>Best Offer</h1>
          <Hotel />
      </div>
      <Contact />
      
    </div>
  )
}
