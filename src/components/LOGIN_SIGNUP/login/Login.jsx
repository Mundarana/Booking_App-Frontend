import { useState, useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import Contact from "../../contact/Conatct";
import Navbar from "../../LOGIN_SIGNUP/navbar/NavbarLS";
import Header from "../../header/Header";
import "./login.css";
import LoadingOverlay from "react-loading-overlay";

//we need to haver two variables, one for fetching from the frontend and one for the backend, like so:
const localUrl = "http://localhost:8600/user/login";
const deployedUrl = "https://booking-app-eqel.onrender.com/user/login";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login, token } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    const response = await fetch(deployedUrl, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("response:", data);

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
    <LoadingOverlay active={isLoading} spinner text="Logging in...">
      <div className="loginContainer">
        <Navbar />
        <Header type="hotel" />
        <form className="login" onSubmit={handleSubmit}>
          <h3>Log in</h3>
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

          <button>Log in</button>
          {error && <div className="error">{error}</div>}
        </form>
        <Contact />
      </div>
    </LoadingOverlay>
  );
}
