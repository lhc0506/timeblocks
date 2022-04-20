import React from "react";
import styled from "styled-components";
import Datebox from "./Datebox";

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-left: 50px;
  margin-right: 50px;
`;

const DateContainer = styled.div`
  text-align: center;
  font-size: 12px;
  border: 1px solid grey;
`;

const WEEK = ["일", "월", "화", "수", "목", "금", "토"];

export default function Calendar({ dates, month, year }) {
  console.log(dates);
  const makeCalendarHeader = () => {
    return WEEK.map(day => {
      return <DateContainer key={day}>{day}</DateContainer>
    })
  }
  const makeCalendar = () => {
    return dates.map((date, index) => {
      return <Datebox date={date} key={index} index={index} />
    });
  };

  return (
    <CalendarContainer>
      {makeCalendarHeader()}
      {dates.length !== 0 && makeCalendar()}
    </CalendarContainer>
  )
}
