import React from 'react';
import {AiFillHome, AiOutlineAppstoreAdd} from 'react-icons/ai';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {FaHotel} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function LSHeader() {
  return (
    <div className='header'>
      <div className="lshLogo">
        <span className="logoName logo ">Smile<span className="logoType logo ">Booking</span></span>
      </div>
      <div className="headerContainer">
        <div className="headerList">
        <div className="headerListItem exact active">
            <AiFillHome  />
            <NavLink to='/' exact activeClassName='current'>Home Page</NavLink>
          </div>
          <div className="headerListItem ">
            <FaHotel  />
            <NavLink to='/hotels' exact activeClassName='current'>Hotels</NavLink>
          </div>

          <div className="headerListItem">
            <AiOutlineAppstoreAdd  />
            <NavLink to='/hotels/add' exact activeClassName='current'>Add New</NavLink>
          </div>
    
          <div className="headerListItem">
            <RiCustomerService2Fill  />
            <NavLink to='#contact' exact activeClassName='current'>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
