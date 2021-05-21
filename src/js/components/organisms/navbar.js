import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useSelector } from 'react-redux'

export default function Navbar(props) {

  const appState = useSelector(state => state)

  return (
    <Nav>
      <Left>
        <Link className="item" to="/home">Home</Link>
      </Left>

      {
        appState.user.isAuthenticated
          ? <Right>
            <Link className="item" to="/profile">
              profil
              {appState.user.userFirstName}
            </Link>
          </Right>
          : <Right>
            <Link className="item" to="/authentification">
              Sign-in/Sign-up
            </Link>
          </Right>
      }
    </Nav>
  )
}

const Nav = styled.div`
display:flex;
width: 100%;
background-color:#D2B48C;
height:40px;
font-family:"Nunito";


ul {
  list-style: none;
  padding: 0;
}

.item{
  display: flex;
  align-items:center;
  padding: 5px 8px;
  text-decoration: none;
  color: white;
  cursor: pointer;
}
`
const Left = styled.div`
display:flex;
width:50%;
margin-left: 20px;

`
const Right = styled.div`
display:flex;
width:50%;
justify-content: flex-end;
margin-right: 20px;
`