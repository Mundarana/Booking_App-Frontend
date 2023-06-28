import './hotels.css';
import Navbar from '../../components/navbar/Navbar';
import Header from "../../components/header/Header";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SearchItem from '../../components/searchItem/SearchItem';
import Contact from '../../components/contact/Conatct';

export default function Hotels() {

  const location = useLocation();
  
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  
  return (
    <div>
      <Navbar />
      <Header type='hotel'/>
      
      <div className="hContainer">
        <div className='hoWrap'>
        <div className="hWrapper">
          <div className="hotelsSearch">

            <h1 className="hsTitle">Search</h1>

            <div className="hsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="hsItem">
              <label htmlFor="">Check-in Date</label>
              <span 
                onClick={() => setOpenDate(!openDate)} 
                className="headerSearchText">
                  {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
             
            </div>

            <div className="hsItem">

              <label  className="info" htmlFor="">Info</label>

              <div className="hsInfo">

                <div className="hsInfoItem">

                  <span className="hsInfoText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className='hsInfoInput' />

                </div>
                <div className="hsInfoItem">

                  <span className="hsInfoText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className='hsInfoInput' />

                </div>
                <div className="hsInfoItem">

                  <span className="hsInfoText">
                    Adult
                  </span>
                  <input type="number" min={1} className='hsInfoInput' placeholder={options.adult} />

                </div>
                <div className="hsInfoItem">

                  <span className="hsInfoText">
                    Children
                  </span>
                  <input type="number" min={0} className='hsInfoInput' placeholder={options.children}/>

                </div>
                <div className="hsInfoItem">

                  <span className="hsInfoText">
                    Room 
                  </span>
                  <input type="number" min={1} className='hsInfoInput' placeholder={options.room} />

                </div>

              </div>

            </div>

              <button>Search</button>
              
          </div>

          <div className="hotelsResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        
        </div>
       </div>

      </div>
          <Contact />
    </div>
  )
}
