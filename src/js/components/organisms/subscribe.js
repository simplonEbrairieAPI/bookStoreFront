import React, { useState, useEffect } from "react";
import api from "../../../utils/api"
// import validateEmail from "../../functions/validateEmail";
// import usePasswordValidator from "../../functions/usePasswordValidor";

export default function Subscribe() {
  // const [password, setPassword, passwordError] = usePasswordValidator({
  //   min: 8,
  //   max: 15
  // });
  // const [passwordRepeat, setPasswordRep] = useState("")

  const [subscribing, setSubscribing] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    errorMessage: null,
    isSubmitting: false,
    passwordConfirm: false
  })

  const handleChange = (e) => {
    setSubscribing({ ...subscribing, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setSubscribing({
        ...subscribing,
        isSubmitting: true,
        passwordConfirm: true
      });

      const result = await api.post('users', subscribing)

      if (result.status === 201) {
        return (
          setSubscribing({
            ...subscribing,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordRepeat: "",
            errorMessage: null
          })
        );
      }
    }
    catch (error) {
      setSubscribing({
        ...subscribing,
        isSubmitting: false,
        errorMessage: error
      });
    }
  };

  return (
    <div className="create" >
      <h2>Create an account</h2>
      <p>
        1st time on the Librairie? <br />
        Subscribe!
      </p>
      <form
        method="POST"
        action="users"
        onSubmit={handleSubmit}
      >
        <div className="input">
          <input
            value={subscribing.firstName}
            onChange={handleChange}
            placeholder="First name"
            name="firstName"
            label="FirstName*"
            type="text"
            name="firstName"
          />
          {/* {errors?.firstName?.type === "required" && <p>This field is required</p>}

          {errors?.firstName?.type === "maxLength" && (
            <p className="error_filled">First name cannot exceed 20 characters</p>
          )}

          {errors?.firstName?.type === "pattern" && (
            <p className="error_filled">Alphabetical characters only</p>
          )} */}

          <input
            value={subscribing.lastName}
            onChange={handleChange}
            placeholder="Name"
            name="lastName"
            label="Name *"
            type="text"
            name="lastName"
            required
          />
          <input
            value={subscribing.email}
            onChange={handleChange}
            placeholder="E-mail"
            name="email"
            label="E-mail *"
            type="email"
            name="email"
            required
          />
          <input
            value={subscribing.password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
            label="Password *"
            name="password"
            type="password"

          />

          <div>{subscribing.errorMessage}</div>

          <button type="submit" name="submitting" onClick={handleSubmit}>Subscribe</button>
        </div>
      </form>
    </div >
  )
}