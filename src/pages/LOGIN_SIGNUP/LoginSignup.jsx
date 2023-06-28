import './loginSignup.css';
import Signup from '../../components/LOGIN_SIGNUP/signup/Signup'
import Login from '../../components/LOGIN_SIGNUP/login/Login'
import Contact from '../../components/contact/Conatct'
import LSHeader from '../../components/LOGIN_SIGNUP/header/LS-Header';

export default function LoginSignup() {
  return (
    <div className='loginSignup'>
      <LSHeader />
      <div className="loginSignupContainer">
        <Signup />
        <span className='log-SigText'>Or</span>
        <Login />
        <Contact />
      </div>
    </div>
  )
}
