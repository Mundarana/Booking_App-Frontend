import './contact.css';
import Footer from '../footer/Fotter';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className="contactContainer">
        <div className="contactText">
          <h1>Cotact Us</h1>
        </div>
        <div className="conatactForm">
          <form action="">
            <div className='contactClintInfo'>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
            <div className='contactMsg'>
              <div className='contactMsgText'>
                <label>Message</label>
                <textarea name="message" />
              </div>
              <button className='conatctButton'>Submit</button>
            </div>
            
          </form>
        </div>
      </div>

    <Footer />

    </div>
  )
}