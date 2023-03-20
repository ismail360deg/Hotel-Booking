import React from "react";
import "../../Styles/Recent.css";

const Recent = ({ hotelName }) => {
  const { photo, country, places } = hotelName;
  return (
    <div>
      <section className="place-section">
        <div class="card shadow mb-3">
          <div class="row g-0">
            <div class="col-3 text-center">
              <img
                src={photo}
                className=" rounded p-2"
                alt="..."
                style={{ width: "112px", height: "121px" }}
              />
            </div>
            <div class="col-9">
              <div class="card-body ms-4">
                <h6 class="card-title1">{country}</h6>
                <p class="card-text1">{places} places</p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recent;
