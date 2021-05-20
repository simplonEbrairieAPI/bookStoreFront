import { Fragment } from 'react';
import styled from "styled-components";

const InputStyle = styled.div`
.label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  color: secondary;
  text-align: left;
  margin-bottom: 11px;
  margin-top: 34px;
}

.input {
  width: 100%;
  height: 62px;
  border: none;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 30px rgba(93, 74, 57, 0.078);
  padding: 22px;
  font-size: 16px;
  color: secondary;
}

.input:focus, .textarea:focus {
  outline: none;
  border: 1px solid primary;
  border-radius: 10px;
}

/*CURVED INPUT*/

.curvedContainer {
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  border-radius: 30px;
}

.curved {
  width: 100%;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 16px;
  outline: none;
  background-color: white;
}

.button {
  width: 150px;
  background-color: primary;
  border: none;
  border-radius: 30px;
  height: 40px;
  margin: 5px 7px;
  color: white;
  font-size: 16px;
  padding: 5px;
  cursor: pointer;
}

.curved:focus, .button:focus {
  outline: none;
}

.button:focus {
  background-color: #f45f29;
}

/*TEXTAREA*/

.textarea {
  width: 100%;
  border: none;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 3px 30px rgba(93, 74, 57, 0.078);
  padding: 22px;
  font-size: 16px;
  font-family: 'Helvetica Neue', sans-serif;
  resize: none;
  color: secondary;
}

.textarea::-webkit-input-placeholder {
  color: #bfbfbf;
}

.textarea:-moz-placeholder {
  /* Firefox 18- */
  color: #bfbfbf;
}

.textarea:-ms-input-placeholder {
  color: #bfbfbf;
}

.textarea::placeholder {
  color: #bfbfbf;
}

.input::-webkit-input-placeholder {
  color: #bfbfbf;
}

.input:-moz-placeholder {
  /* Firefox 18- */
  color: #bfbfbf;
}

.input:-ms-input-placeholder {
  color: #bfbfbf;
}

.input::placeholder {
  color: #bfbfbf;
}

`



export default function Input(props) {
  return (
    <Fragment>
      <InputStyle>
        <label className="label">{props.label}</label>
        <input className="input" {...props} />
      </InputStyle>
    </Fragment>
  );
}