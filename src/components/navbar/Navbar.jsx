import './navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navContainer">
        <span className="logoName logo">Smile<span className="logoType logo">Booking</span></span>
        <div className="navItems">
          <button className="navButton">Signup</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

