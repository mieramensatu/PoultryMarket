import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Login() {
  axios.default.withCredentials = true;
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://farmmonitoring-7f23543656d8.herokuapp.com/login", values)
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: response.data.message || "You have successfully logged in!",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.href = "/product";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: response.data.message || "Incorrect email or password!",
            confirmButtonText: "Try Again",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response?.data?.message || "Something went wrong!",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-card__title">Please enter your details</h2>
          <h1 className="login-card__subtitle">Welcome back</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="login-form__label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="login-form__input"
                placeholder="Enter your email"
                name="email"
                onChange={handleInputChange}
                value={values.email}
              />
            </div>
            <div>
              <label htmlFor="password" className="login-form__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="login-form__input"
                placeholder="Enter your password"
                name="password"
                onChange={handleInputChange}
                value={values.password}
              />
            </div>
            <button type="submit" className="login-form__button">
              Login
            </button>
          </form>
          <p className="login-card__footer">
            Don’t have an account?
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
