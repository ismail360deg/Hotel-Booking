import React, { useContext } from "react";
import { FaPlane, FaBed, FaServicestack } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Context/UserContext";

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  // const handleLogOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  // };
  return (
    <div>
      <nav class="navbar d-lg-block d-none  navbar-expand-lg pt-3 ">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
                <Link class="nav-link" aria-current="page" to="/findFlights">
                  <FaPlane className="me-1" />
                  Find Flights
                </Link>
              </li> */}
              <li class="nav-item">
                <Link class="nav-link" to="/findHotels">
                  {" "}
                  <FaBed /> Find Stay{" "}
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/facilities">
                  {" "}
                  <FaServicestack /> Facilities{" "}
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/packages">
                  {" "}
                  <FaServicestack /> Packages{" "}
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link class="nav-link" to="/aboutus">
                  {" "}
                  <FaServicestack /> About Us{" "}
                </Link>
              </li> */}
            </ul>

            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              {" "}
              <Link class="navbar-brand" to="/">
                <img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="" />
              </Link>
            </div>

            <div className="d-sm-none d-lg-block d-md-block d-none">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/findFlights">
                    <FaPlane className="me-1" />
                    Find Flights
                  </Link>
                </li> */}
                {/* <li class="nav-item">
                  <Link class="nav-link" to="/findStays">
                    {" "}
                    <FaBed /> Find Stay{" "}
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link class="nav-link" to="/favourites">
                    {" "}
                    <FaServicestack /> Favourites{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/aboutus">
                    {" "}
                    <FaServicestack /> About Us{" "}
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard">
                    {" "}
                    <FaServicestack /> Dashboard{" "}
                  </Link>
                </li>
                {/* {user?.email ? ( */}
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to="/profile">
                      {" "}
                      <FaServicestack /> Profile{" "}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">
                      {/* onClick={handleLogOut} */} <FaServicestack /> Logout{" "}
                    </Link>
                  </li>
                </>
                {/* ) : ( */}
                <li class="nav-item">
                  <Link class="nav-link" to="/Signup">
                    {" "}
                    <FaServicestack /> Sign in{" "}
                  </Link>
                </li>
                {/* )} */}
              </ul>
              {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link onClick={handleLogOut} to="/login" class="nav-link">
                        Logout
                      </Link>
                    </li>
                  </ul> */}
              {/* {user?.email ? (
                <div className="">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link onClick={handleLogOut} to="/login" class="nav-link">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div>
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link to="/login" class="nav-link">
                        Login
                      </Link>
                    </li>
                    <li class="nav-item ">
                      <Link to="/signin" class="nav-link">
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </nav>

      {/* offcanvas navbar */}

      <nav class="navbar d-lg-none d-xl-none  fixed-top">
        <div class="container">
          <Link class="navbar-brand" to="#">
            <img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="" />
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="#">
                    <FaPlane className="me-1" />
                    Find Flights
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="#">
                    {" "}
                    <FaBed /> Find Stay{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/facilities">
                    {" "}
                    <FaServicestack /> Facilities{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/aboutus">
                    {" "}
                    <FaServicestack /> About Us{" "}
                  </Link>
                </li>

                {/* {user?.email ? ( */}
                <div>
                  <li class="nav-item">
                    {/* onClick={handleLogOut}  */}
                    <Link to="/login" class="nav-link">
                      Log out
                    </Link>
                  </li>
                </div>
                {/* ) : ( */}
                <div>
                  <li class="nav-item ">
                    <Link to="/login" class="nav-link sign-up-button ">
                      Login
                    </Link>
                  </li>
                  <li class="nav-item ">
                    <Link to="/signin" class="nav-link sign-up-button ">
                      Sign up
                    </Link>
                  </li>
                </div>
                {/* )} */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
