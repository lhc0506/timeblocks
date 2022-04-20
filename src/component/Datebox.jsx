import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal/Modal";
import Dialog from "./Dialog";

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

export default function Datebox({ date, index }) {
  const [showModal, setShowModal] = useState(false);
  let division = "thisMonth";
  if (index < 7 && date > index) {
    division = "prevMonth";
  } else if (index > 30 && date < 15) {
    division = "nextMonth";
  } else if (index % 7 === 0 || index % 7 === 1) {
    division = "weekend";
  }

  return (
    <>
      <DateContainer onClick={() => setShowModal(true)}>
        <div className={division}>{date}</div>
      </DateContainer>
      {showModal && (
        <Modal
          onClick={() => setShowModal(!showModal)}
          height="200px"
          width="200px"
        >
          <Dialog
            onClick={() => setShowModal(!showModal)}
          />
        </Modal>
      )}
    </>
  );
}
