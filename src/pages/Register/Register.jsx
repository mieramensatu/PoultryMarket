import React, { useState } from "react"; // Pastikan useState diimpor di sini
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  axios.defaults.withCredentials = false;

  // Inisialisasi state dengan useState
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // Handler untuk perubahan input
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.name || !values.phone || !values.email || !values.password) {
      Swal.fire({
        title: "Error",
        text: "All fields are required!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    axios
      .post(
        "https://farmmonitoring-7f23543656d8.herokuapp.com/register",
        values
      )
      .then((response) => {
        if (response.data.success) {
          Swal.fire({
            title: "Registration Successful",
            text: "You have successfully registered!",
            icon: "success",
            confirmButtonText: "Login",
          }).then(() => {
            window.location.href = "/login";
          });
        } else {
          Swal.fire({
            title: "Registration Failed",
            text: response.data.message || "Something went wrong!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.response?.data?.message || "Something went wrong!",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <>
      <div className="register-container">
        <div className="register-card">
          <h2 className="register-card__title">Please fill in your details</h2>
          <h1 className="register-card__subtitle">Create an account</h1>

          <form className="register-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="register-form__label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="register-form__input"
                placeholder="Enter your full name"
                name="name"
                onChange={handleInputChange}
                value={values.name}
              />
            </div>

            <div>
              <label htmlFor="phone" className="register-form__label">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                className="register-form__input"
                placeholder="Enter your phone number"
                name="phone"
                onChange={handleInputChange}
                value={values.phone}
              />
            </div>

            <div>
              <label htmlFor="email" className="register-form__label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="register-form__input"
                placeholder="Enter your email"
                name="email"
                onChange={handleInputChange}
                value={values.email}
              />
            </div>

            <div>
              <label htmlFor="password" className="register-form__label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="register-form__input"
                placeholder="Enter your password"
                name="password"
                onChange={handleInputChange}
                value={values.password}
              />
            </div>

            <button type="submit" className="register-form__button">
              Register
            </button>
          </form>

          <p className="register-card-footer">
            Do you have an account?
            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
