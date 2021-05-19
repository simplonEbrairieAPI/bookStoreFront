import React, { useState, useEffect } from "react";

export default function Subscribe() {
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
    // const body = {
    //   username: "coucou@gmail.com",
    //   password: "qwertyuiop"
    // }

    e.preventDefault()
    const result = await api.post('users', body)
    console.log('result', result)

  }



  return (
    <div className="create" >
      <h2>Create an account</h2>
      <p>
        1st time on the Librairie? <br />
        Subscribe!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            placeholder="First name"
            label="FirstName*"
            type="text"
            required

          />
          <input
            placeholder="Name"
            label="Name *"
            type="text"
            required
          />
          <input
            placeholder="E-mail"
            label="E-mail *"
            type="email"
            required
          />
          <input placeholder="Password"
            label="Password *"
            type="password"
            required
          />
          <div >Password must have at least 6 characteres</div>
          <input placeholder="Confirmer mot de passe" type="password" />
          <div style={{ marginBottom: '30px' }}>
            * required
          </div>
          <button>S’inscrire</button>
        </div>
      </form>
    </div>
  )
}