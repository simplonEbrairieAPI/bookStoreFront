
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StartWrap = styled.div`
font-family: "Nunito";
// background-color: #D2B48C;
background-image: url("https://static.vecteezy.com/ti/photos-gratuite/p1/1416235-timelapse-of-starry-sky-gratuit-photo.jpeg");
background-repeat: no-repeat;
background-size: cover;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 999;
transition: all 0.3s ease-in;
animation-name: start;
animation-duration: 0.5s;

@keyframes start {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.startLogo {
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  text-shadow: 2px 2px 5px pink;
  position: absolute;
  font-size:45px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.startText {
  animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  font-size:20px;
  font-weight:bold;
  text-shadow: 1px 1px 3px pink;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// animation

@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }

`

const Start = props => {

  const [startVisible, setStartVisible] = useState(true)
  const history = useHistory();

  const routeChange = () => {
    let path = `/home`;
    history.push(path);
  }

  return (
    < StartWrap
      onClick={() => setStartVisible(false), routeChange}
      style={
        startVisible
          ? null
          : { opacity: 0, pointerEvents: "none", transform: "scale(1.2)" }
      }
    >
      <h1 className="startLogo">Welcome to the Library Store</h1>
      <span className="startText">Tap Screen to Begin</span>
    </ StartWrap>
  );
};

export default Start;
