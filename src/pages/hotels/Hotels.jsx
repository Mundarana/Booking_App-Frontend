import './hotels.css';
import Navbar from '../../components/LOGIN_SIGNUP/navbar/NavbarLS';
import Header from "../../components/header/Header";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SearchItem from '../../components/searchItem/SearchItem';
import Contact from '../../components/contact/Conatct';
import { useRef } from 'react';
import LoadingOverlay from "react-loading-overlay";

const cityList = [
  { name: "Amsterdam", country: "NL" },
  { name: "Athens", country: "GR" },
  { name: "Barcelona", country: "ES" },
  { name: "Berlin", country: "DE" },
  { name: "Brussels", country: "BE" },
  { name: "Budapest", country: "HU" },
  { name: "Copenhagen", country: "DK" },
  { name: "Dublin", country: "IE" },
  { name: "Edinburgh", country: "GB" },
  { name: "Florence", country: "IT" },
  { name: "Geneva", country: "CH" },
  { name: "Istanbul", country: "TR" },
  { name: "Lisbon", country: "PT" },
  { name: "London", country: "GB" },
  { name: "Madrid", country: "ES" },
  { name: "Milan", country: "IT" },
  { name: "Munich", country: "DE" },
  { name: "Oslo", country: "NO" },
  { name: "Paris", country: "FR" },
  { name: "Prague", country: "CZ" },
  { name: "Rome", country: "IT" },
  { name: "Stockholm", country: "SE" },
  { name: "Vienna", country: "AT" },
  { name: "Warsaw", country: "PL" },
  { name: "Zurich", country: "CH" },
];

export default function Hotels() {
  const resultRef = useRef(null);
  const location = useLocation();

  const [destination, setDestination] = useState(location.state?.destination);
  const [date, setDate] = useState(location.state?.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state?.options);

  const handleSearch = () => {
    // Perform search based on destination, date, and options
    // You can implement your search functionality here
  };

  return (
    <div>
      <LoadingOverlay>
        <Navbar />
        <Header type="hotel" resultRef={resultRef} />

        <div className="hContainer">
          <div className="hoWrap">
            <div className="hWrapper">
              <div className="hotelsSearch">
                <h1 className="hsTitle">Search</h1>

                <div className="hsItem">
                  <label htmlFor="">Destination</label>
                  <input
                    placeholder="Enter a city"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="hsItem">
                  <label htmlFor="">Check-in Date</label>
                  {date && (
                    <span
                      onClick={() => setOpenDate(!openDate)}
                      className="headerSearchText"
                    >
                      {`${format(
                        date[0]?.startDate,
                        'MM/dd/yyyy'
                      )} to ${format(date[0]?.endDate, 'MM/dd/yyyy')}`}
                    </span>
                  )}
                  {openDate && (
                    <DateRange
                      classNames="hsDateRange"
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}
                </div>

                <div className="hsItem">
                  <label className="info" htmlFor="">
                    Info
                  </label>

                  <div className="hsInfo">
                    <div className="hsInfoItem">
                      <span className="hsInfoText">
                        Min price <small>per night</small>
                      </span>
                      <input type="number" className="hsInfoInput" />
                    </div>
                    <div className="hsInfoItem">
                      <span className="hsInfoText">
                        Max price <small>per night</small>
                      </span>
                      <input type="number" className="hsInfoInput" />
                    </div>
                    <div className="hsInfoItem">
                      <span className="hsInfoText">Adult</span>
                      <input
                        type="number"
                        min={1}
                        className="hsInfoInput"
                        placeholder={options ? options.adult : 1}
                      />
                    </div>
                    <div className="hsInfoItem">
                      <span className="hsInfoText">Children</span>
                      <input
                        type="number"
                        min={0}
                        className="hsInfoInput"
                        placeholder={options ? options.children : 0}
                      />
                    </div>
                    <div className="hsInfoItem">
                      <span className="hsInfoText">Room</span>
                      <input
                        type="number"
                        min={1}
                        className="hsInfoInput"
                        placeholder={options ? options.room : 1}
                      />
                    </div>
                  </div>
                </div>

                <button className="hsBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>

              <div className="hotelsResult">
                <SearchItem />
              </div>
            </div>
          </div>
        </div>
        <Contact ref={resultRef} />
      </LoadingOverlay>
    </div>
  );
}