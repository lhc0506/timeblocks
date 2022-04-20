import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

const Date = styled.div`
  font-size: 30px;
`;

const ConfirmButton = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100px;
  background-color: #2096f3;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  cursor: pointer;
`;

export default function Dialog({ onClick }) {
  const event = useRef();
  const handleClick = () => {
    console.log(event.current.value)
    onClick();
  };
  return (
    <Container>
      <Date>123</Date>
      <input type="text" ref={event} placeholder="Event Title" />
      <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
    </Container>
  );
}
