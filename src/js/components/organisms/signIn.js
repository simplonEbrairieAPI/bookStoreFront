import React, { useState, useEffect } from "react";
import api from '../../../utils/api'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  useEffect(
    () => {
      if (!email) {
        setEmailError("");
      } else {
        if (validateEmail(email)) {
          setEmailError("");
        } else {
          setEmailError("Please enter a valid email.");
        }
      }
    },
    [email]
  )

  const handleSubmit = async (e) => {
    const body = {
      username: "coucou1@gmail.com",
      password: "coucou1"
    }

    e.preventDefault()
    const result = await api.post('users/authentificate', body)
    console.log('result', result)
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="login">
      <h2>Connexion</h2>
      <p>Connect to your account</p>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            placeholder="E-mail"
            label="E-mail *"
            type="email"
            required
          />
          <input
            placeholder="Password"
            label="Password *"
            type="password"
            required
          />
          <button>Se connecter</button>
        </div>
      </form>
    </div>
  )
}

