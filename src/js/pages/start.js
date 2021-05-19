
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StartWrap = styled.div`
font-family: "Nunito";
background-color: #D2B48C;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.startText {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      <span className="startText">Tap Screen to Start</span>
    </ StartWrap>
  );
};

export default Start;
