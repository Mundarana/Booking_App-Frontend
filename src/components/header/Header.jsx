import "./header.css";
import { useRef } from "react";
import { FaHotel } from "react-icons/fa";
import { BiSolidHotel } from "react-icons/bi";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { BsCalendar3, BsFillPersonFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { DateRange } from "react-date-range";
import { useState, useContext } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function Header({ type, resultRef }) {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { logout, token } = useContext(AuthContext);

  const handleClick = () => {
    localStorage.removeItem("token");
    logout();
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "hotel" ? "headerContainer hotelMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <AiFillHome />
            <NavLink to="/" exact activeClassName="current">
              Home Page
            </NavLink>
          </div>
          <div className="headerListItem">
            <FaHotel />
            <NavLink to="/hotels" exact activeClassName="current">
              Hotels
            </NavLink>
          </div>

          {token !== null && (
            <div className="headerListItem">
              <AiOutlineAppstoreAdd />
              <div>
                <NavLink to="/hotels/add" exact activeClassName="current">
                  Add New
                </NavLink>
              </div>
            </div>
          )}
          {/* <NavLink to='/hotels/add' exact activeClassName='current' >Add New</NavLink> */}

          <div className="headerListItem">
            <RiCustomerService2Fill />
            <NavLink
              onClick={() =>
                resultRef.current.scrollIntoView({ behavior: "smooth" })
              }
              exact
              activeClassName="current"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {type !== "hotel" && (
          <>
            <h1 className="headerTitle">
              A Lifetime of discount? If you Sign Up Now. It's valid till 8-July
              2023.
            </h1>
            <p className="headerDesc">
              Get rewarded for your bookings - unlock intant savings 10% or more
              with a free SmileBooking account
            </p>

            <div className="headerSearch">
              <div className="headerSearchItem">
                <BiSolidHotel />
                <input
                  type="text"
                  placeholder="City"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <BsCalendar3 />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <BsFillPersonFill />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>

                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button
                  className="headerBtn headerSearchBtn"
                  onClick={handleSearch}
                >
                  <AiOutlineSearch />
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
