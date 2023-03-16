import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AllHotelListing from '../Home/AllHotelListing';
// import SearchBar from './SearchBar';
import '../../Styles/HotelListing.css';

const SearchResult = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);
  return (
    <>
    {/* <SearchBar></SearchBar> */}
    <section  className='container mt-4'>

    {/* <div className="row">


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
            <select class="form-select" aria-label="Default select example">
               
            </select>
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
             <select class="form-select" aria-label="Default select example">
               
              </select>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label class="form-check-label" for="flexCheckIndeterminate">
                  Free breakfast
                  </label>
                </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label class="form-check-label" for="flexCheckIndeterminate">
                  Free breakfast
                  </label>
                </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label class="form-check-label" for="flexCheckIndeterminate">
                  Free breakfast
                  </label>
                </div>
                <hr />

                <h5 className='filter'>Amenities</h5>
             <select class="form-select" aria-label="Default select example">
               
              </select>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label class="form-check-label" for="flexCheckIndeterminate">
                  Free breakfast
                  </label>
                </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label class="form-check-label" for="flexCheckIndeterminate">
                  Free breakfast
                  </label>
                </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                  <label class="form-check-label" for="flexCheckIndeterminate">
                  Free breakfast
                  </label>
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
             <p>Showing 4 of 257 places</p>
              <p>Sort by Recommended</p>
             </div>

                <div class="card mb-3 mt-4" >
                  <div class="row g-0">


                  <div class="card mb-3 mt-4" >
                  <div class="row g-0">
    { data.length === 0 ? ( 
                <h4 className='text-center'>No tour found</h4>
                ) : (
                  data?.map(hotelName => (
                    <Col lg='3' className='mb-4' key={hotelName._id}>
                    <AllHotelListing hotelName={hotelName}></AllHotelListing>
                    </Col>
                  ))
                )}
                </div>
      </div>

                  </div>
                </div>

             

            </div>



    </div> */}






    <div class="card mb-3 mt-4" >
                  <div class="row g-0">
    { data.length === 0 ? ( 
                <h4 className='text-center'>No tour found</h4>
                ) : (
                  data?.map(hotelName => (
                    <Col lg='3' className='mb-4' key={hotelName.id}>
                    <AllHotelListing hotelName={hotelName}></AllHotelListing>
                    </Col>
                  ))
                )}
                </div>
      </div>
      
    </section>
    </>
  )
}

export default SearchResult