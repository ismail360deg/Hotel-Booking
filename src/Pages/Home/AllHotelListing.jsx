import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { BsFillCupFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../Styles/AllHotelListing.css";

const AllHotelListing = ({ hotelName, category }) => {
  // console.log(category)

  const { title, city, price, avgRating, cafe, photo, createdAt } = hotelName;

  return (
    <div className="hotel_listing_card">
      <div class="card mb-3" style={{ "max-width": "840px" }}>
        <div class="row g-0">
          <div class="col-md-5">
            <img
              src={photo}
              class="img-fluid "
              alt="..."
              style={{ height: "298.50px" }}
            />
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <div className="d-flex justify-content-between align-items-center">
                {" "}
                <h5 class="card-title1 title">{title}</h5>
                <h5 class="card-title1 price-dollar">${price}</h5>
              </div>
              <p class="card-text1">
                {" "}
                <MdLocationPin /> {city}
              </p>
              <div className="d-flex justify-content-start align-items-center ">
                <div className="star">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
                <p class="card-text1 stay mt-2 ms-1">
                  {avgRating} start reviews
                </p>
              </div>
              {/* <div className="d-flex align-content-center justify-content-between">
                <p className="mt-3">
                  <BsFillCupFill className="me-2" />
                  {cafe}+ Aminities
                  {createdAt}
                </p>
                <h5 class="package-price">{pk.tourCategory}</h5>
              </div> */}
              <hr />
              {/* <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p> */}
              <p class="mt-2 d-flex justify-content-start align-items-center gap-3">
                <Link to="/" className="border rounded-2 ps-2 pe-2">
                  <FaHeart />
                </Link>{" "}
                <Link
                  to={`/category/${hotelName._id}`}
                  class=" btn btn-info package-details-button"
                  style={{ width: "428px", height: "38px" }}
                >
                  View Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*              
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
                       <p>love icon </p>
                       <Link to={`/category/${hotelName._id}`}>
                       <button className=''>View please</button>
                       </Link>
                       </div>
                      </div>
                    </div> */}
    </div>
  );
};

export default AllHotelListing;
