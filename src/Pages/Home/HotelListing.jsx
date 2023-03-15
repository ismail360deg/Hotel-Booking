import React, { useEffect, useState } from 'react';
import '../../Styles/HotelListing.css';
import { useLocation} from 'react-router-dom';
import axios from 'axios';
import AllHotelListing from './AllHotelListing';
import SearchBar from '../SearchBar/SearchBar';
// import hotelImg from '../../assets/images/hotel-img01.png';

const HotelListing = () => {


const [brfFilter, setBrfFilter] = useState(false);
const [frIntFilter, setFrIntFilter] = useState(false);
// const [freeAirportShuttle, setFreeAirportShuttle] = useState(false);
// const [airConditioned, setAirConditioned] = useState(false);
// const [fitness, setFitness] = useState(false);
// const [pool, setPool] = useState(false);

console.log(brfFilter,frIntFilter);

// const filter = (event) => {
//     // event.preventDefault();
//     // console.log(object);
//     if (event.target.name === "breakFast") {
//       setBrfFilter(event.target.checked);
//     }

//     if (event.target.name === "internet") {
//       setFrIntFilter(event.target.checked);
//     }

//     console.log(event.target.checked);
//   };


// useEffect(() => {
//   // let query = { IntFilter,dmsFilter};
//   let breakFast, freeNet;
  
//   if (brfFilter) {
//     breakFast = "true";
//   } else if (!brfFilter) {
//     breakFast = "false";
//   }
//   if (frIntFilter) {
//     freeNet = "true";
//   } else if (!frIntFilter) {
//     freeNet = "false";
//   }

//   fetch(`http://localhost:5000/category?freeBreakFast=${breakFast}&freeInternet=${freeNet}`)
//     .then((res) => res.json())
//     .then((data) => {
//       setCategory(data);
//       console.log(data);
//     });
// }, [brfFilter, frIntFilter]);


  // const { country,title,city,price,avgRating,cafe,photo  } = hotelName;

  const location = useLocation();
  const [hotelNames, setHotelNames] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {

    let breakFast, freeNet;
  
    if (brfFilter) {
      breakFast = "true";
    } else if (!brfFilter) {
      breakFast = "false";
    }
    if (frIntFilter) {
      freeNet = "true";
    } else if (!frIntFilter) {
      freeNet = "false";
    }


    if (location?.search) {
        axios.get(`http://localhost:5000/category${location?.search}&freeBreakFast=${breakFast}&freeInternet=${freeNet}`)
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
}, [location, hotelNames,brfFilter, frIntFilter]);
   
  return (
       <>
       <SearchBar></SearchBar>

        <section className='container mt-4'>
        <div className="row">
            <div className="col-4">
              <h5 className='filter'>Filters</h5>
              <div>
              <select class="form-select" aria-label="Default select example">
               
              </select>
              <input type="range" class="form-range" id="customRange1" />
             <div className='d-flex justify-content-between'>
             <p>$50</p>
              <p>$1200</p>
             </div>
             <hr />
              </div>

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
              onClick={() => setBrfFilter(!brfFilter)}
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
              onClick={() => setFrIntFilter(!frIntFilter)}
            />
            <span className="input-filter-text">Free internet</span> <br />
          </div>
{/* 
          <div>
            <input
              type="checkbox"
              name="freeAirportShuttle"
              id=""
              checked={freeAirportShuttle}
              // value="International"
              onClick={() => setFreeAirportShuttle(!freeAirportShuttle)}
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
              checked={airConditioned}
              // value="International"
              onClick={() => setAirConditioned(!airConditioned)}
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
              onClick={() => setFitness(!fitness)}
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
              onClick={() => setPool(!pool)}
            />
            <span className="input-filter-text">Pool</span> <br />
          </div> */}

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
             <p>Showing 4 of 257 places</p>
              <p>Sort by Recommended</p>
             </div>

                <div class="card mb-3 mt-4" >
                  <div class="row g-0">


                          {
                            hotelNames.map(hotelName => <AllHotelListing
                            key={hotelName._id}
                            hotelName={hotelName}
                            category={category}
                            ></AllHotelListing>)
                          }
                             {/* <SearchResult></SearchResult> */}

                  </div>
                </div>

             

            </div>






        </div>
        </section>
       </>

         
   
   
     
  )
}

export default HotelListing