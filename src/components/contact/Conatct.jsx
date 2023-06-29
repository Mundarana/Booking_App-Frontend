import './contact.css';
import Footer from '../footer/Fotter';
import { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <div className='contact' id='contact' ref={ref} >
      <div className="contactContainer">
        <div className="contactText">
          <h1>Contact Us</h1>
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
                <textarea className='classMsgTextArea' name="message" />
              </div>
              <button className='conatctButton'>Submit</button>
            </div>
            
          </form>
        </div>
      </div>

    <Footer />

    </div>
  )
})

export default Contact