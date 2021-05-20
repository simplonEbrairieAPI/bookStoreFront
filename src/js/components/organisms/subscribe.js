import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  // useEffect(
  //   () => {
  //     if (!email) {
  //       setEmailError("");
  //     } else {
  //       if (validateEmail(email)) {
  //         setEmailError("");
  //       } else {
  //         setEmailError("Please enter a valid email.");
  //       }
  //     }
  //   },
  //   [email]
  // )

  // const handleSubmit = async (e) => {
  //   // const body = {
  //   //   username: "coucou@gmail.com",
  //   //   password: "qwertyuiop"
  //   // }

  //   e.preventDefault()
  //   const result = await api.post('users', body)
  //   console.log('result', result)

  // }




  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }




  return (
    <div className="create" >
      <h2>Create an account</h2>
      <p>
        1st time on the Librairie? <br />
        Subscribe!
      </p>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input
          placeholder="First name"
          name="firstName"
          label="FirstName*"
          type="text"

        />


        {/* <div className="input">
          <input
            placeholder="First name"
            name="firstName"
            label="FirstName*"
            type="text"
          />


          <input
            placeholder="Name"
            name="lastName"
            label="Name *"
            type="text"

          />
          <input
            placeholder="E-mail"
            name="email"
            label="E-mail *"
            type="email"

          />
          <input placeholder="Password"
            label="Password *"
            name="password"
            type="password"

          /> */}
        {/* <div >Password must have at least 6 characteres</div> */}
        {/* < input
            placeholder="Confirmer mot de passe"
            name="confirmePassword"
            type="password"
          />
          
          <div style={{ marginBottom: '30px' }}>
            * required
          </div>
          <button>S’inscrire </button>

        </div> */}


      </form>
    </div >
  )
}