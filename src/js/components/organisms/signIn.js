import React, { useState } from "react";
import api from '../../../utils/api'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";


export default function SignIn() {

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch()
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
        dispatch({ type: "SIGN_IN", payload: result.data.user })
        history.push("/home")
      }
    } catch (error) { console.log(error) }
  }

  return (
    <div className="login">
      <div className="left">
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
            <button>Se connecter</button>
          </div>
        </form>
      </div>
    </div >
  )
}
