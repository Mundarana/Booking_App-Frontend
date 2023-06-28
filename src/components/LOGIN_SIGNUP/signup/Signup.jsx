import './signup.css';

export default function Signup() {
  return (
    <div className='signup'>
      <div className="signupContainer">
          <form >
            <h3>Signup</h3>
            <label >Email</label>
            <input type='email' />
            <label >Pasword</label>
            <input type="password" />
            <button className="signupBtn">Signup</button>
          </form>

      </div>
    </div>
  )
}
