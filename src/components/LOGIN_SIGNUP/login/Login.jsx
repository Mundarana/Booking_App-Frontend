import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/authContext';
import './login.css';
//we need to haver two variables, one for fetching from the frontend and one for the backend, like so:

 const localUrl = "http://localhost:8600";
 const deployedUrl = "https://booking-app-eqel.onrender.com/"

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useContext(AuthContext)

  const submitForm = async (e) => {
    e.preventDefault()
    setIsLoading(true);
    setError(null);

    const response = await fetch(localUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${'token'}`
      },
      body: JSON.stringify({email, password})
    });

    const data = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error)
    }

    if (response.ok) {
      setTimeout(() => {
        localStorage.setItem("token", data.token);
        setIsLoading(false);
        login(data.token);
      }, 5000);
    }

  } 
  
  return (
    <div className='login'>
      <div className="loginContainer">
      <form className='login' onSubmit={submitForm}>
        <h3>Log in</h3>
        <label >Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label >Pasword</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginBtn">Log in</button>
        {error && <div className='error'>{error}</div>}
      </form>
      </div>
    </div>
  )
}
