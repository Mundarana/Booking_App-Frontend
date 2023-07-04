import './App.css';
import { Routes, Route,  Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import Home from './pages/home/Home';
import Hotels from './pages/hotels/Hotels';
import Hotel from './pages/hotel/Hotel';
import Login from './components/LOGIN_SIGNUP/login/Login';
import Signup from './components/LOGIN_SIGNUP/signup/Signup';
import AddNewHotel from './pages/addNewHotel/AddNewHotel';

function App() {
  const { token } = useContext(AuthContext);
  
  return (

    <div className="App">

      {/* {token ? (
              <div>
                <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/hotels/add' element={<AddNewHotel />} />
                </Routes>
              </div>
            ) : (
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/hotels' element={<Hotels />} />
                <Route path='/hotels/:id' element={<Hotel />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
              </Routes>
            )} */}


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:id' element={<Hotel />} />
        <Route path='/login' element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path='/signup' element={!token ? <Signup /> : <Navigate to="/" />} />
        <Route path='/hotels/add' element={!token ? <AddNewHotel /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
