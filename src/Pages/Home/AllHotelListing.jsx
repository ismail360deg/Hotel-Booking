import React from 'react'
import { Link } from 'react-router-dom';

const AllHotelListing = ({hotelName,setCategory}) => {

    const {_id, country,title,city,price,avgRating,cafe,photo  } = hotelName;

  return (
    <div>

             
                    <div class="col-4">
                      <img src={photo} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-8">
                      <div class="card-body hotel-list">
                      
                       <div>
                       <div className='starting d-flex align-items-center justify-content-end'>
                        <h5 class="card-title title">{title}</h5>
                        <h6>starting from <br />${price}/night <br />excl.tax</h6>
                        </div>
                       </div>
                      
                        <p class="card-text text">{city}</p>
                        <div className='d-flex justify-content-between mt-4'>
                        <p>{avgRating} 5star Hotel </p>
                        <h6>{cafe}+ Aminities</h6>
                        </div>
                        <h5>Very Good 371 reviews</h5> 
                        <hr />
                       <div className='d-flex justify-content-between'>
                       <p>love icon {country}</p>
                       <Link to={`/hotelDetails/${_id}`}>
                       <button className=''>View please</button>
                       </Link>
                       </div>
                      </div>
                    </div>
                

    </div>
  )
}

export default AllHotelListing