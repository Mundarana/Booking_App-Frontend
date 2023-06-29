import './signup.css';
import { useState, useContext } from 'react';
import { AuthContext } from '../../../context/authContext';
import Contact from '../../contact/Conatct';
import Navbar from '../../LOGIN_SIGNUP/navbar/NavbarLS';
import Header from '../../header/Header'
// import LoadingOverlay from "react-loading-overlay";

//we need to haver two variables, one for fetching from the frontend and one for the backend, like so:
const localUrl = "http://localhost:8600";
 const deployedUrl = "https://booking-app-eqel.onrender.com/"

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch(localUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      localStorage.setItem("token", data.token);
      setIsLoading(false);
      login(data.token);
    }
  };

  return (
    // <LoadingOverlay active={isLoading} spinner text="Signing in...">
    <div className="signupContainer">
      <Navbar />
      <Header type='hotel' />
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        

        <label>email: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
      <Contact />
      </div>
    // </LoadingOverlay>
  );
}

