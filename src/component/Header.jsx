import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  .prev-button,
  .next-button {
    width: 20px;
    height: 20px;
    margin: 0 10px;
  }
`;

const Month = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-left: 10px;
`;

const Year = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

export default function Header({ month, year, setMonth, setYear }) {
  const handlePrevButtonClick = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <Container>
      <Month>
        <img
          src="./left.svg"
          onClick={handlePrevButtonClick}
          className="prev-button"
          alt="left"
        />
        {month}</Month>
      <img
        src="./right.svg"
        onClick={handleNextButtonClick}
        className="next-button"
        alt="right"
      />
      <Year>{year}</Year>
    </Container>
  );
}
