import React, {  useEffect, useState } from "react";
import AddReviews from "../../Components/AddReviews/AddReviews";
import DisplayPackage from "../DisplayPackage/DisplayPackage";
import UserReviews from "../Home/UserReviews/UserReviews";
// import { ApiContext } from "../../DataContext.js/DataContext";
import "./Packages.css";

const Packages = () => {
  // const { packages } = useContext(ApiContext);
  // console.log(packages);
  const [packages, setPackages] = useState([]);
  const [IntFilter, setIntFilter] = useState(false);
  const [dmsFilter, setdmsFilter] = useState(false);
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  useEffect(() => {
    // let query = { IntFilter,dmsFilter};
    let Inter, domes;

    if (IntFilter) {
      Inter = "true";
    } else if (!IntFilter) {
      Inter = "false";
    }
    if (dmsFilter) {
      domes = "true";
    } else if (!dmsFilter) {
      domes = "false";
    }

    fetch(`http://localhost:5000/packages?IntFilter=${Inter}&dmsFilter=${domes}`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        console.log(data);
      });
  }, [IntFilter, dmsFilter]);

  // const filter = (event) => {
  //   // event.preventDefault();
  //   // console.log(object);
  //   if (event.target.name === "international") {
  //     setIntFilter(event.target.checked);
  //   }

  //   if (event.target.name === "domestic") {
  //     setdmsFilter(event.target.checked);
  //   }

  //   // console.log(event.target.checked);
  // };

  console.log(IntFilter, dmsFilter);

  return (
    <div>
      <section className="package-section">
        <div>
          <h2>Let's go places together</h2>
          <p>
            Discover the latest offers and news and start planning your next
            trip with us.
          </p>
        </div>
      </section>
      <section className="row container m-auto mt-5 mb-5">
        <div className="checkbox-container mt-5 mb-5 pt-3 col-2">
          <p className="text-primary-emphasis">Filters</p>
          <hr className="text-dark" />
          <div>
            <input
              type="checkbox"
              name="international"
              id=""
              checked={IntFilter}
              onClick={() => setIntFilter(!IntFilter)}
            />
            <span className="input-filter-text">International</span> <br />
          </div>
          <div>
            <input
              type="checkbox"
              name="domestic"
              id=""
              checked={dmsFilter}
              onClick={() => setdmsFilter(!dmsFilter)}
            />
            <span className="input-filter-text" >Domestic</span> <br />
          </div>
        </div>

        <div className="col-10">
          <div className=" mt-5">
            <span className="text-dark-emphasis fs-3">
              See Your Favorite Packages Here
            </span>{" "}
            <span className="ms-3 text-warning packages-length ">
              {packages.length} packages here{" "}
            </span>
          </div>
          <hr />

          <div>
            {packages.slice(0, visible).map((pk) => (
              <DisplayPackage pk={pk}></DisplayPackage>
            ))}
          </div>
        </div>
        <div className="text-center mt-4" onClick={showMore}>
          <button className="btn btn-light ">show more</button>
        </div>
      </section>
      <section>
        <UserReviews></UserReviews>
        <AddReviews></AddReviews>
      </section>

   
    </div>
  );
};

export default Packages;



// app.get("/packages", async (req, res) => {
//     let query = {};
//     console.log(req.query.IntFilter, req.query.dmsFilter);
//     if (req.query.IntFilter === "true" && req.query.dmsFilter === "false") {
//       query = {
//         tourCategory: "International",
//       };
//     }
//     if (req.query.IntFilter=== "false" && req.query.dmsFilter === "true") {
//       query = {
//         tourCategory: "Domestic",
//       };
//     }
//     const packages = await packagesCollection.find(query).toArray();
//     res.send(packages);
//     // console.log(tourGuide);
//   });

// EJn18hja7JxLPLOx
// EJn18hja7JxLPLOx