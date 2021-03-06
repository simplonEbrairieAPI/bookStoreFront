import React, { useState, useEffect } from "react";
import SignIn from "../components/organisms/signIn"
import Subscribe from "../components/organisms/subscribe"
import styled from "styled-components";
// import api from '../../utils/api'

// import Input from "../components/input"
// import Button from "../components/button"

export default function Authentification() {

  useEffect(() => {
    document.title = "login page";
  }, []);

  return (
    <ContainerStyle>
      <SignIn />
      <Subscribe />
    </ContainerStyle>
  );
}

// CSS
const ContainerStyle = styled.div`
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr);
      margin: 113px 0%;
      font-family:"Nunito";

      h2 {
        font-size: 40px;
      color: secondary;
      text-align: center;
      }

      p {
        font-size: 20px;
      color: secondary;
      text-align: center;
      }

      
      .login {
        border-right: 1px solid #7f7f7f;
}

.left{
  width: 70%;
  margin: auto;
}
  .create{
    width: 70%;
    margin: auto; 
}

.error_filled{
  color: #bf1650;
}

.error_filled::before {
  display: inline;
  content: "⚠ ";
}
      .input{
        display:flex;
      flex-direction: column;
align-items: center;
}
      input {
      display: block;
      min-width: 90%;
      margin: 1em;
      padding: 1em;
      width: 35em;
      border-radius: 8px;
      border-style: none;
      border: 1px solid #e4e6e8;
      transition: 0.1s ease;
}

      input:hover {
        border - color: palevioletred;
}

      button {
        width:50%;
        margin: 0.8em;
      padding: 1em;
      border: 1px solid #e4e6e8;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.1s ease-in;
}

      button:hover {
        background-color: palevioletred;
      color: white;
}
.error {
  color: tomato;
  margin-bottom: 10px;
  height: 8px;
  font-size: 13px;
}

`