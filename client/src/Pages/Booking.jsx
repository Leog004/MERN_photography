import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { parseISO, format } from 'date-fns';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const datesToAddClassTo = [
  '2022-03-29T00:00:00',
  '2022-04-02T00:00:00',
  '2022-04-12T00:00:00',
];

function isSameDay(a, b) {
  const formattedDate = format(parseISO(a), 'MM/dd/yyyy');
  const formattedDateCalender = format(
    parseISO(new Date(b).toISOString()),
    'MM/dd/yyyy'
  );
  return formattedDate === formattedDateCalender;
}

function tileClassName({ date, view }) {
  // Add className to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add className to
    if (datesToAddClassTo.find((dDate) => isSameDay(dDate, date))) {
      return 'highlight';
    }
  }
}
export default function Booking() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Navbar />
      <Hero title={'Booking'} image={'https://images.unsplash.com/photo-1496559249665-c7e2874707ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'} />
      <section className="w-full h-full max-w-7xl mx-auto py-24">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex w-full sm:w-1/2">
            <form className="flex flex-col w-full">
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="username"
                  >
                    Full Name:{' '}
                  </label>
                  <input
                    id="username"
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="emailAddress"
                  >
                    Type of event:{' '}
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    for="password"
                  >
                    Location
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div className="flex space-between w-full gap-x-10">
                  <div className="flex flex-col w-full">
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Time
                    </label>
                    <input
                      id="passwordConfirmation"
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      for="passwordConfirmation"
                    >
                      Date
                    </label>
                    <input
                      id="passwordConfirmation"
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-full mt-6">
                <div className="flex mr-10">
                  <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Submit Booking
                  </button>
                </div>

                <div className="flex">
                  <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Contact 
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex h-full items-center justify-center align-center w-full sm:w-1/2 px-10">
            <Calendar
              className="shadow-xl h-full"
              tileClassName={tileClassName}
              tileDisabled={tileClassName}
              minDate={new Date()}
              calendarType="US"
              onChange={(date) => onChange(date)}
              value={value}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
