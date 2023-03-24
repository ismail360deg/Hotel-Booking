import React from "react";
import "../../Styles/HotelSearch.css";
import Banner from "../../assets/images/Frame 36.png";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import HotelInfos from "./HotelInfos";
import Recent from "./Recent";
import { Link } from "react-router-dom";

const HotelSearch = () => {
  const { data: hotelNames, isLoading = [] } = useQuery({
    queryKey: ["hotelPlace"],
    queryFn: async () => {
      const res = await fetch(
        "https://hotel-flow-server.vercel.app/hotelPlace"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="">
      <div className="banner">
        <img src={Banner} alt="" />
      </div>

      {/* <div className="container flying">
        <div className="row">
          <h3 className="mb-4">Where are you flying</h3>
          <div className="col-12 d-flex align-items-center justify-content-between">
            <div className="input-container">
              <input
                type="text"
                id="form3Example1m"
                className="input destination"
                placeholder="Enter Destination"
              />
            </div>
            <div>
              <input
                type="text"
                id="form3Example1m"
                className="input"
                placeholder="Check In"
              />
            </div>
            <div>
              <input
                type="text"
                id="form3Example1m"
                className="input"
                placeholder="Check Out"
              />
            </div>
            <div>
              <input
                type="text"
                id="form3Example1m"
                className="input"
                placeholder="Rooms"
              />
            </div>
          </div>

          <div className="d-flex mt-4 align-items-center justify-content-end">
            <h6 className="promo__code">+ Add Promo code </h6>
            <button className="show__btn">Show Places</button>
          </div>
        </div>
      </div> */}

      {/* =======================Your recent searches==================== */}
      <div className="container">
        <h3 className="fw-bold text-dark mb-4">Your recent searches</h3>
        <div className="home-card-container">
          {hotelNames?.map((hotelName) => (
            <Recent key={hotelName._id} hotelName={hotelName}></Recent>
          ))}
        </div>
      </div>

      {/* ====================Fall into travel======================= */}

      <section className=" container">
        <h3 className="fw-bold text-dark mt-5">Fall into travel</h3>
        <p className="mb-4">
          Going somewhere to celebrate this season? Whether you’re going home or
          somewhere to roam, we’ve got <br /> the travel tools to get you to
          your destination.
        </p>
        <div className="row row-cols-1 row-cols-md-4 g-4 travel__card">
          {hotelNames?.map((hotelName) => (
            <HotelInfos key={hotelName._id} hotelName={hotelName}></HotelInfos>
          ))}
        </div>
      </section>

      {/* ======================== extra-section =======================*/}

      <section className="extra-section container">
        <div className="container mt-5 pt-5 mb-4 fall-into-travel-header">
          <h3 className="fw-bold text-dark ">Fall into travel</h3>
          <p className="text-dark-emphasis ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam, we’ve got the travel tools to get you to your
            destination.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
              <div class="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 class="card-title">Backpacking Sri Lanka</h5>
                  <h3 className="text-white text-end">$275</h3>
                </div>
                <p class="card-text">
                  Traveling is a unique experience as it's the best way to
                  unplug from the pushes and pulls of daily life. It helps us to
                  forget about our problems, frustrations, and fears at home.
                  During our journey, we experience life in different ways. We
                  explore new places, cultures, cuisines, traditions, and ways
                  of living.
                </p>
                <Link to="/" class="btn btn-light">
                  Book Flight
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div className="extra-img">
              <div>
                <img
                  src="https://i.ibb.co/VBthY6H/Rectangle-3-3.png"
                  className="img"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/4dKN9dN/Rectangle-3-2.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/wK1kzX6/Rectangle-3-1.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
              <div>
                <img
                  src="https://i.ibb.co/wh24VB5/Rectangle-3.png"
                  alt=""
                  style={{ width: "260px", height: "165px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HotelSearch;
