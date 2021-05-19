import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from '../../utils/api'
import Input from "../components/input"
// import Button from "../components/button"

const Container = styled.div`
display: grid;
justify-content: center;
grid-template-columns: repeat(2, 1fr);
margin: 113px 10%;
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
  padding-right: 20%;
  border-right: 1px solid #7f7f7f;
}

.create{
  padding-left: 20%;
}

.input{
  display:flex;
  flex-direction: column;
}

`


export default function Authentification() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = "login page";
  }, []);

  const handleSubmit = async (e) => {
    const body = {
      username: "coucou@gmail.com",
      password: "qwertyuiop"
    }

    e.preventDefault()
    const result = await api.post('http://localhost:4000/users/authentificate', body)
    console.log('result', result)
  }

  return (
    <Container>
      <div className="login">
        <h2>Connexion</h2>
        <p>Connectez-vous à votre compte</p>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              placeholder="E-mail"
              label="E-mail *"
              type="email"
              required
            />
            <input
              placeholder="Mot de passe"
              label="Mot de passe *"
              type="password"
              required
            />
            <button>Se connecter</button>
          </div>
        </form>
      </div>

      <div className="create" >
        <h2>Créer un compte</h2>
        <p>
          1ère fois sur la Librairie? <br />
          Inscrivez-vous !
        </p>
        <div className="input">
          <input
            placeholder="Prénom"
            label="Prénom *"
            type="text"
            required

          />
          <input
            placeholder="Nom"
            label="Nom *"
            type="text"
            required
          />
          <input
            placeholder="E-mail"
            label="E-mail *"
            type="email"
            required
          />
          <input placeholder="Mot de passe"
            label="Mot de passe *"
            type="password"
            required
          />
          <div >Les mots de passe doivent avoir au moins 6 caractères</div>
          <input placeholder="Confirmer mot de passe" type="password" />
          <div style={{ marginBottom: '30px' }}>
            * Champs obligatoires
          </div>
          <button>S’inscrire</button>
        </div>
      </div>
    </Container>




  );
}
