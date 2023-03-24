import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
import "../../Styles/HotelListing.css";

const SearchBar = () => {
  const cityRef = useRef("");
  const roomRef = useRef(0);
  // const navigate = useNavigate();

  const searchHandler = async () => {
    const city = cityRef.current.value;
    const room = roomRef.current.value;

    console.log(city, room);

    if (city === "" || room === "") {
      // return alert('All fields are required!')
    }

    const res = await fetch(
      `https://hotel-flow-server.vercel.app/category/search/getHotelBySearch?city=${city}&room=${room}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();
    console.log(result);

    // navigate(`/category/search?city=${city}&room=${room}`,{state: result.data} );
  };

  return (
    <>
      <section className="container flying__input">
        <form>
          <div className="col-12 d-flex align-items-center justify-content-evenly">
            <div className="input-container">
              <input
                type="text"
                id="form3Example1m"
                className="enter__destination"
                placeholder="Enter Destination"
                ref={cityRef}
              />
            </div>
            <div>
              <input
                type="text"
                id="form3Example1m"
                className="input__box"
                placeholder="Check In"
              />
            </div>
            <div>
              <input
                type="text"
                id="form3Example1m"
                className="input__box"
                placeholder="Check Out "
              />
            </div>
            <div>
              <input
                type="number"
                id="form3Example1m"
                className="input__box"
                placeholder="Rooms & Guests"
                ref={roomRef}
              />
            </div>
            <FaSearch
              className="search"
              type="submit"
              onClick={searchHandler}
            ></FaSearch>
          </div>
        </form>
      </section>
    </>
  );
};

export default SearchBar;
