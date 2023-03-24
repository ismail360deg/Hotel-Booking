import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import "./Signup.css";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Context/UserContext";
// import { AuthContext } from "../../Context/UserContext";
// import UseContext, { AuthContext } from "../../Context/UseContext";

const Signup = () => {
  // const { signUp } = UseContext(AuthContext);

  //   const { createUser, signInWithGoogle, signInWithFacebook } =
  //     useContext(AuthContext);
  //   const [error, setError] = useState("");

  // <a href="https://ibb.co/NWDb9Rv"><img src="https://i.ibb.co/vLyR39F/Group-4.png" alt="Group-4" border="0"></a>
  {
    /* <a href="https://ibb.co/B4JbTdp"><img src="https://i.ibb.co/xmbWzPk/Group-5.png" alt="Group-5" border="0"></a> 
<a href="https://ibb.co/LCS62m5"><img src="https://i.ibb.co/0fqZdTt/Logo.png" alt="Logo" border="0"></a>
*/
  }

  //   const handleGoogleSignIn = () => {
  //     signInWithGoogle()
  //       .then((result) => {
  //         const user = result.user;
  //         // navigate('/courses')
  //         console.log(user);
  //         setError("");
  //       })
  //       .catch((error) => console.error(error));
  //     setError(error.message);
  //   };

  // const handleFacebookSignIn = () => {
  //   signInWithFacebook()
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //     })
  //     .catch((error) => console.error(error));
  //   setError(error.message);
  // };

  //   const handleFacebookSignIn = () => {
  //     signInWithFacebook()
  //       .then((result) => {
  //         const user = result.user;
  //         // console.log(user);
  //       })
  //       .catch((error) => console.error(error));
  //     setError(error.message);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     // handle form submission logic here
  //     const form = event.target;
  //     const firstName = form.firstName.value;
  //     const lastName = form.lastName.value;
  //     const email = form.email.value;
  //     const phone = form.phone.value;
  //     const password = form.password.value;
  //     const confirmPassword = form.confirmPassword.value;

  //     // console.log(firstName, lastName, email, phone, password, confirmPassword);

  //     createUser(email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         // console.log(user);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setError(err.message);
  //       });
  //   };

  return (
    <Container className="signIn-container">
      <div className="row g-0">
        <div className="col-xl-6 d-none d-xl-block">
          <img
            src="https://i.ibb.co/xmbWzPk/Group-5.png"
            alt="SamplePhoto"
            className="img-fluid"
          />
        </div>

        <form
          //   onSubmit={handleSubmit}
          className=" col-xl-6 col-sm-12 col-md-8  m-auto p-2"
        >
          <h2 className="mb-5 fw-bold">Sign Up Here!</h2>
          <div className="mb-3 text-start ">
            <div className="row ">
              <div className="col-md-6 mb-4">
                <div className="input-container">
                  <input
                    type="text"
                    id="firstName"
                    className="input"
                    placeholder=" "
                    name="firstName"
                    required
                  />
                  <label className="label">First Name</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="input-container">
                  <input
                    type="text"
                    id="lastName"
                    className="input"
                    placeholder=" "
                    name="lastName"
                    required
                  />
                  <label className="label">Last Name</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    className="input"
                    placeholder=" "
                    name="email"
                    required
                  />
                  <label className="label">Email</label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="input-container">
                  <input
                    type="text"
                    id="phone"
                    className="input"
                    placeholder=" "
                    name="phone"
                    required
                  />
                  <label className="label">Phone</label>
                </div>
              </div>
            </div>

            {/* password input field */}
            <div className="input-container password mb-4">
              <input
                type="password"
                id="password"
                className="input"
                placeholder=" "
                name="password"
                required
              />
              <label className="label">Password</label>
            </div>
            <div className="input-container password mb-4">
              <input
                type="password"
                id="confirmPassword"
                className="input"
                placeholder=" "
                name="confirmPassword"
              />
              <label className="label">Confirm Password</label>
            </div>
            <div className="text-start">
              <input type="checkbox" required />
              <label className="ms-1  agree ">
                I agree to all the Terms and Privacy Policies
              </label>
            </div>
            <div className="signUp">
              <button
                // type="button"
                className="btn 
                        create-account-button btn-light w-100"
              >
                create account
              </button>
            </div>
            <div className="text-center mt-3">
              <span className="text-muted fw-bold">
                Already Have an Account?
              </span>{" "}
              <Link to="/login" className="login-text text-decoration-none">
                Log in
              </Link>
            </div>
            <div className="mb-5">
              <hr className="mt-5" />
              <p className="text-center "> Or Sign up with</p>
            </div>

            <div className="social-signUP mt-5">
              <button
                // onClick={handleFacebookSignIn}
                className="btn btn-light  w-100 
              
              text-primary p-2"
              >
                <FaFacebook style={{ width: "22px", height: "22px" }} />
              </button>
              <button
                // onClick={handleGoogleSignIn}
                className="btn btn-light   w-100  p-2"
              >
                <FcGoogle style={{ width: "22px", height: "22px" }} />
              </button>
              <button className="btn btn-light   w-100  p-2">
                <FaApple style={{ width: "22px", height: "22px" }} />
              </button>
            </div>
          </div>
          {/* <div className="mb-3 text-start ">
          <label className="form-label " for="photoURL">
            photoURL
          </label>
          <input
            type="photoURL"
            className="form-control"
            id="photoURL"
            name="photoURL"
            placeholder=""
            required
          />
        </div> */}
          {/* <div className="mb-3 text-start ">
          <label className="form-label " for="email">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Your email address"
            required
          />
        </div> */}
          {/* <div className="mb-3 text-start">
          <label className="form-label" for="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
        </div> */}
          {/* <p className="text-danger">{passwordError}</p> */}
          {/* <div className="mb-3 text-center">
          <div>
            {" "}
            Already have an account? please,click here to{" "}
            <span>
              {" "}
              <Link to="/login" className="text-decoration-none fw-bold ">
                Log in
              </Link>
            </span>
          </div>
        </div> */}
          {/* <div className="text-danger">{}</div> */}
          {/* <div>
          
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full  ps-2 me-2 "
            >
              sign in with google
            </button>
           
            <button
              onClick={handleGithubSignIN}
              className="btn btn-primary w-full ps-2 ms-2"
            >
              sign in with github
            </button>
          </div>
        </div> */}
        </form>
      </div>
    </Container>
  );
};

export default Signup;
