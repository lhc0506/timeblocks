import React, { useState, useEffect } from "react";
import Header from "./component/Header";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [totalDate, setTotalDate] = useState([]);

  const setCalendar = (year, month) => {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    const prevLastDate = new Date(year, month - 1, 0).getDate();
    const dateArray = [];

    if (firstDay !== 0) {
      for (let i = 0; i < firstDay; i++) {
        dateArray.push(prevLastDate - firstDay + i + 1);
      }
    }

    for (let i = 1; i <= lastDate; i++) {
      dateArray.push(i);
    }

    const leftDays = 42 - dateArray.length;

    for (let i = 1; i <= leftDays; i++) {
      dateArray.push(i);
    }

    return dateArray;
  };

  useEffect(() => {
    setTotalDate(setCalendar(currentYear, currentMonth));
  }, [currentYear, currentMonth]);

  return (
    <div className="App">
      <Header month={currentMonth} year={currentYear} setMonth={setCurrentMonth} setYear={setCurrentYear} />
    </div>
  );
}

export default App;
