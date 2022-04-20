import React from "react";
import styled from "styled-components";
import Portal from "../../Portal";

const Background = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Child = styled.div`
  position: relative;
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 5px;
  background: white;
`;

export default function Modal({ children, onClick, width, height }) {
  return (
    <Portal>
      <Background onClick={() => onClick()}>
        <Child
          width={width}
          height={height}
          onClick={event => event.stopPropagation()}
        >
          <div>{children}</div>
        </Child>
      </Background>
    </Portal>
  );
}
