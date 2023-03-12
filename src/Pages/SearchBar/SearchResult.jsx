import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import AllHotelListing from '../Home/AllHotelListing';

const SearchResult = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  console.log(data);
  return (
    <>
    <section>


      
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
    </section>
    </>
  )
}

export default SearchResult