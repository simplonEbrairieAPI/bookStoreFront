import React, { useState, useEffect } from "react";
import api from '../../../utils/api'
import { useHistory } from "react-router-dom";


export default function SignIn() {
<<<<<<< Updated upstream
=======
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch()
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
>>>>>>> Stashed changes



<<<<<<< Updated upstream
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const saveUserData = (e) => {
    e.preventDefault()

    if (!userEmail.trim()) {
      console.log('mail vide')
      return
    }
    if (!userPassword.trim()) {
      console.log('password vide')
      return
    }

    login()

  }


  const history = useHistory();

  const login = async (e) => {
    const user = {
      email: userEmail,
      password: userPassword
    }

    try {
      const result = await api.post('http://localhost:3011/user/authenticate', user)
      if (result.data.success === true) {
        history.push("/home")
      }

    } catch (error) { console.log(error) }

=======
    e.preventDefault()
    const result = await api.post('http://localhost:3011/user/authenticate', body)
    console.log('result', result)
    dispatch()
>>>>>>> Stashed changes
  }

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="login">
<<<<<<< Updated upstream
      <h2>Connexion</h2>
      <p>Connect to your account</p>
      <form onSubmit={saveUserData}>
        <div className="input">
          <input
            placeholder="E-mail"
            label="E-mail *"
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            label="Password *"
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button>Connect</button>
        </div>
      </form>
=======
      <div className="left">
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
            <button>Connect</button>
          </div>
        </form>
      </div>
>>>>>>> Stashed changes
    </div>
  )
}

