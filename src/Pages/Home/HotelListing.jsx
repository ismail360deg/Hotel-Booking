import React, { useEffect, useRef, useState } from 'react';
import '../../Styles/HotelListing.css';
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import AllHotelListing from './AllHotelListing';
// import SearchBar from '../SearchBar/SearchBar';
import { FaSearch } from 'react-icons/fa';
// import { Col } from 'react-bootstrap';
const HotelListing = () => {

const location = useLocation();
const [hotelNames, setHotelNames] = useState([]);
const [category, setCategory] = useState([]);
const [brfFilter, setBrfFilter] = useState(false);
const [frIntFilter, setFrIntFilter] = useState(false);
const [freeAirFilter, setFreeAirFilter] = useState(false);
const [airConFilter, setAirConFilter] = useState(false);
const [fitness, setFitness] = useState(false);
const [pool, setPool] = useState(false);
  
  // const location = useLocation();

  // const [data] = useState(location.state);

  // console.log(data);

  // const navigate = useNavigate();

  const priceRef = useRef(0);

  const searchPrice = async () =>{
    const price = priceRef.current.value

    console.log(price)

    if(price === ''){
        return alert('All fields are required!')
    }

    const res = await fetch(`http://localhost:5000/category/search/getHotelBySearch?price=${price}`);

    if(!res.ok) alert('Something went wrong');

    const result = await res.json();
    console.log(result.data)
    setHotelNames(result.data)

};

  const [visible, setVisible] = useState(4);

  const showMore = () => {
    setVisible((preValue) => preValue + 2);
  };



useEffect(() => {
 
  fetch(`http://localhost:5000/category/filter/v2?brfFilter=${brfFilter || ""}&frIntFilter=${frIntFilter || ""}&freeAirFilter=${freeAirFilter || ""}&airConFilter=${airConFilter || ""}&fitness=${fitness || ""}&pool=${pool || ""}`)
    .then((res) => res.json())
    .then((data) => {
      setHotelNames(data);
      console.log(data);
    });
}, [brfFilter, frIntFilter,freeAirFilter,airConFilter,fitness, pool]);


  // const { country,title,city,price,avgRating,cafe,photo  } = hotelName;

  useEffect(() => {
    if (location?.search) {
        axios.get(`http://localhost:5000/category${location?.search}`)
            .then(res => {
                if (res.data) {
                  setHotelNames(res.data)
                }
                setCategory(res.data)
            })
            .catch(error => {
                console.log(error)
            });
    }
}, [location]);



const cityRef = useRef('');
const roomRef = useRef(0);

const searchHandler = async () =>{
    const city = cityRef.current.value
    const room = roomRef.current.value
    

    console.log(city,room)

    if(city === '' || room === ''){
        // return alert('All fields are required!')
    }

    const res = await fetch(`http://localhost:5000/category/search/getHotelBySearch?city=${city}&room=${room}`);

    if(!res.ok) alert('Something went wrong');

    const result = await res.json();
    console.log(result)
    setHotelNames(result.data)

    // navigate(`/hotel-listing/search?city=${city}&room=${room}`,{state: result.data} );

};

   
  return (
       <>
<section className='container flying__input'>
        <form>
            <div className="col-12 d-flex align-items-center justify-content-evenly">

                <div className='input-container'>
                <input type="text" id="form3Example1m" className="enter__destination" placeholder="Enter Destination" ref={cityRef}/>
                </div>
                <div>
                <input type="text" id="form3Example1m" className="input__box" placeholder="Check In"/>
                </div>
                <div>
                <input type="text" id="form3Example1m" className="input__box" placeholder="Check Out "/>
                </div>
                <div>
                <input type="number" id="form3Example1m" className="input__box" placeholder="Rooms & Guests" ref={roomRef}/>
                </div>
                <FaSearch className='search' type='submit' onClick={searchHandler}></FaSearch>
            </div>
        </form>
        </section>
       {/* <SearchBar></SearchBar> */}

        <section className='container mt-4'>
        <div className="row">
            <div className="col-4">
              <h5 className='filter'>price</h5>

             <form className='mt-2 mb-2'>
             <input type="number" id="form3Example1m" className="price__box" placeholder="price" ref={priceRef}/>
             <FaSearch className='price__search' type='submit' onClick={searchPrice} ></FaSearch>
             </form>

            <h5 className='filter'>Rating</h5>
            <div className='d-flex justify-content-between'>
            <p>0+</p>
            <p>1+</p>
            <p>2+</p>
            <p>3+</p>
            <p>4+</p>
            <p>5+</p>
             </div>
             <hr />

             <h5 className='filter'>Freebies</h5>

             <div>
            <input
              type="checkbox"
              name="breakFast"
              id=""
              checked={brfFilter}
              // value="International"
              onClick={(e) => setBrfFilter(e.target.checked)}
            />
            <span className="input-filter-text">Free breakfast</span> <br />
          </div>

          <div>
            <input
              type="checkbox"
              name="internet"
              id=""
              checked={frIntFilter}
              // value="International"
              onClick={(e) => setFrIntFilter(e.target.checked)}
            />
            <span className="input-filter-text">Free internet</span> <br />
          </div>

          <div>
            <input
              type="checkbox"
              name="freeAirportShuttle"
              id=""
              checked={freeAirFilter}
              // value="International"
              onClick={(e) => setFreeAirFilter(e.target.checked)}
            />
            <span className="input-filter-text">Free airport shuttle</span> <br />
          </div>

                <hr />

                <h5 className='filter'>Amenities</h5>

          <div>
            <input
              type="checkbox"
              name="airConditioned"
              id=""
              checked={airConFilter}
              // value="International"
              onClick={(e) => setAirConFilter(e.target.checked)}
            />
            <span className="input-filter-text">Air-conditioned</span> <br />
          </div>

          <div>
            <input
              type="checkbox"
              name="fitness"
              id=""
              checked={fitness}
              // value="International"
              onClick={(e) => setFitness(e.target.checked)}
            />
            <span className="input-filter-text">Fitness</span> <br />
          </div>

          <div>
            <input
              type="checkbox"
              name="pool"
              id=""
              checked={pool}
              // value="International"
              onClick={(e) => setPool(e.target.checked)}
            />
            <span className="input-filter-text">Pool</span> <br />
          </div>

            </div>


            <div className="col-8">
              <div className='hotels d-flex justify-content-between'>
                <div>
                  <h6>Hotels</h6>
                  <p>257 places</p>
                </div>
                <div>
                  <h6>Hotels</h6>
                  <p>257 places</p>
                </div>
                <div>
                  <h6>Hotels</h6>
                  <p>257 places</p>
                </div>
              </div>

              <div className='d-flex justify-content-between mt-4'>
             <p>Showing {hotelNames.length} of 16 places</p>
              <p>Sort by Recommended</p>
             </div>

                <div class="card mb-3 mt-4" >
                  <div class="row g-0">

                        {/* {
                          hotelNames && hotelNames?(
                            {
                            hotelNames ?  hotelNames.slice(0,visible).map(hotelName => <AllHotelListing
                              key={hotelName._id}
                              hotelName={hotelName}
                              category={category}
                              ></AllHotelListing>)
                            }
                          )
                        } */}

                          {/* {
                            hotelNames.slice(0,visible).map(hotelName => <AllHotelListing
                            key={hotelName._id}
                            hotelName={hotelName}
                            category={category}
                            ></AllHotelListing>)
                          } */}
                             {/* <SearchResult></SearchResult> */}

                             <div class="card mb-3 mt-4" >
                  <div class="row g-0">
                 { hotelNames.length === 0 ? ( 
                <h4 className='text-center'>No hotel found</h4>
                ) : (
                  hotelNames.slice(0,visible).map(hotelName => <AllHotelListing
                    key={hotelName._id}
                    hotelName={hotelName}
                    category={category}
                    ></AllHotelListing>)
                  // data?.map(hotelName => (
                  //   <Col lg='3' className='mb-4' key={hotelName.id}>
                  //   <AllHotelListing hotelName={hotelName}></AllHotelListing>
                  //   </Col>
                  
                )}
                </div>
                 </div>

                  </div>
                </div>

                <div className="text-center mt-4" onClick={showMore}>
                   <button className="btn btn-light ">show more</button>
                </div>

             

            </div>






        </div>
        </section>
       </>

         
   
   
     
  )
}

export default HotelListing