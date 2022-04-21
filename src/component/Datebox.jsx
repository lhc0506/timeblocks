import React, { useState, useContext } from "react";
import styled from "styled-components";
import Modal from "./Modal/Modal";
import Dialog from "./Dialog";
import { TodosContext } from "../store/todos";

const DateContainer = styled.div`
  height: 100px;
  border: 1px solid grey;
  text-align: center;
  font-size: 12px;
  .prevMonth,
  .nextMonth {
    color: silver;
  }
  .weekend {
    color: red;
  }
`;

const Todo = styled.div`
  background-color: ${props => props.color};
`;

export default function Datebox({ dateString, index }) {
  const [showModal, setShowModal] = useState(false);
  const context = useContext(TodosContext);
  const todos = context.todos[dateString];
  const date = dateString.slice(6);
  let division = "thisMonth";

  if (index < 7 && date > index) {
    division = "prevMonth";
  } else if (index > 30 && date < 15) {
    division = "nextMonth";
  } else if (index % 7 === 0 || index % 7 === 1) {
    division = "weekend";
  }

  const showTodos = () => {
    return todos.map(todo => {
      return <Todo color={todo.color}>{todo.todo}</Todo>;
    });
  };

  return (
    <>
      <DateContainer onClick={() => setShowModal(true)}>
        <div className={division}>{date}</div>
        {todos && showTodos()}
      </DateContainer>
      {showModal && (
        <Modal
          onClick={() => setShowModal(!showModal)}
          height="200px"
          width="200px"
        >
          <Dialog
            onClick={() => setShowModal(!showModal)}
            index={index}
            dateString={dateString}
          />
        </Modal>
      )}
    </>
  );
}
