import React from "react";
import styled from "styled-components";
import Loading from "../icons/loading.svg";

const LoaderStyle = styled.div`
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export default function Loader() {
  return (
    <LoaderStyle>
      <img height="100" alt="loader" src={Loading}></img>
    </LoaderStyle>
  );
}