import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/NavBar';
import { differenceInCalendarDays, parseISO } from 'date-fns';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

const datesToAddClassTo  = ['03/30/2022'];

function tileClassName({ date, view }) {
  
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
      return 'bg-red-600';
    }
  }
}
export default function Booking() {
  const [value, onChange] = useState(new Date());



  return (
    <>
      <Navbar />
      <Hero />
      <Calendar
        tileClassName={tileClassName}
        minDate={new Date()}
        calendarType="US"
        onChange={(date) => onChange(date)}
        value={value}
      />
    </>
  );
}
