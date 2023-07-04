import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { Link } from "react-router-dom";
import { useJwt } from "react-jwt";
import './navbarLS.css';

export default function NavbarLS() {
  const { logout, token } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
  };

  const { decodedToken } = useJwt(token);

  return (
    <div className=" navbar">
      <div className="navWrapper">
      <div className="navContainer">
        <Link to="/"><span> <img src="" alt="" /> </span><span className="logoName logo">Smile<span className="logoType logo">Booking</span></span></Link>
      </div>
      <nav>
        {token !== null && (
          <div className="navLogout">
            <span className="navSpan" style={{ padding: "10px" }}>Hello, User {decodedToken?.email}</span>
            <button className="navButton" onClick={handleClick}>Log out</button>
          </div>
        )}
        {token === null && (
          <div className="navItems">
            <Link to="/signup"><button className="navButton">Signup</button></Link>
            <Link to="/login"><button className="navButton">Login</button></Link>
          </div>
        )}
      </nav>
      </div>
    </div>
  );
}