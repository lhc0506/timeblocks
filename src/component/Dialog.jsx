import React, { useRef, useContext } from "react";
import styled from "styled-components";
import { WEEK, MONTH } from "../constants";
import { TodosContext } from "../store/todos";

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

const DateBox = styled.div`
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

const getRandomColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const getRandomDays = () => {
  return Math.floor(Math.random() * 6);
}

export default function Dialog({ onClick, index, dateString }) {
  const event = useRef();
  const context = useContext(TodosContext);
  const { todos, setTodos } = context;
  const year = dateString.slice(0, 4);
  const month = dateString.slice(4, 6);
  const date = dateString.slice(6);

  const handleClick = () => {
    if (!event.current.value) {
      return;
    }

    const newTodos = { ...todos };
    const color = getRandomColor();
    const term = getRandomDays();
    const newTodo = {
      todo: event.current.value,
      color,
    };

    for (let i = 0; i <= term; i++) {
      const dateForm = `${year}${String(month).padStart(2, "0")}${String(Number(date) + i).padStart(2, "0")}`
      newTodos[dateForm] ? newTodos[dateForm].push(newTodo) : newTodos[dateForm] = [newTodo];
    }
    setTodos(newTodos);
    onClick();
  };

  return (
    <Container>
      <DateBox>{WEEK[index % 7]}, {date} {MONTH[month - 1]}</DateBox>
      <input type="text" ref={event} placeholder="Event Title" />
      <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
    </Container>
  );
}
