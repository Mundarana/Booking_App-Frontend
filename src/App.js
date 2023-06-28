import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotels from './pages/hotels/Hotels';
import Hotel from './pages/hotel/Hotel';
import LoginSignup from './pages/LOGIN_SIGNUP/LoginSignup';
import AddNewHotel from './pages/addNewHotel/AddNewHotel';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login&signup' element={<LoginSignup />} />
        <Route path='/hotels/add' element={<AddNewHotel />} />
      </Routes>
    </div>
  );
}

export default App;
