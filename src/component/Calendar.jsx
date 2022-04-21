import React from "react";
import styled from "styled-components";
import Datebox from "./Datebox";
import { WEEK } from "../constants";

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

export default function Calendar({ dates }) {
  const makeCalendarHeader = () => {
    return WEEK.map(day => {
      return <DateContainer key={day}>{day}</DateContainer>;
    });
  }
  const makeCalendar = () => {
    return dates.map((date, index) => {
      return <Datebox dateString={date} key={index} index={index} />
    });
  };

  return (
    <CalendarContainer>
      {makeCalendarHeader()}
      {dates.length !== 0 && makeCalendar()}
    </CalendarContainer>
  );
}
