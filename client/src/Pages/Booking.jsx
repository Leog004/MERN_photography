import React, { useState, useMemo } from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { parseISO, format } from 'date-fns';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Autocomplete from 'react-google-autocomplete';
import { UserRequest } from '../requestMethod';

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
  console.log(process.env.REACT_APP_GMAP_API_KEY);
  const [value, onChange] = useState(new Date());
  const [event, setEvent] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.token;

  const config = useMemo(
    () => ({
      headers: { Authorization: `Bearer ${token}` },
    }),
    [token]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        user: '623bcff5647b00fa55df8a98',
        price: 200,
        event: {
          name: 'A New Event',
          description: 'This is the description of the event',
          eventType: event,
          location: location,
          time: time,
          date: value,
        },
      };
      const newBooking = await UserRequest.post(`bookings/`, data, config);
      console.log(newBooking);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Navbar />
      <Hero
        title={'Booking'}
        image={
          'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        }
      />
      <section className="w-full h-full max-w-7xl mx-auto py-24 px-10">
        <div className="flex flex-col w-full justify-center items-center mb-20 gap-y-1">
          <h2 className="font-semibold text-xl">Booking</h2>
          <h1 className="font-semibold text-3xl mb-5">Let's work together</h1>
          <p>
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </div>
        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex w-full sm:w-1/2">
            <form className="flex flex-col w-full">
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-1">
                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="event"
                  >
                    Type of event:{' '}
                  </label>

                  <select
                    className="block mt-2 w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="event"
                    value={event}
                    onChange={(e) => setEvent(e.target.value)}
                  >
                    <option value="">Select an option</option>
                    <option value="wedding">Wedding</option>
                    <option value="merternity">Merternity</option>
                    <option value="business">Business</option>
                    <option value="headshots">Headshots</option>
                    <option value="realEstate">Real Estate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="text-gray-700 dark:text-gray-200"
                    htmlFor="Location"
                  >
                    Location
                  </label>
                  <Autocomplete
                    apiKey={process.env.REACT_APP_GMAP_API_KEY}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    onPlaceSelected={(place) => {
                      setLocation(place.formatted_address);
                    }}
                    options={{
                      types: ['address'],
                      componentRestrictions: { country: 'usa' },
                    }}
                    defaultValue=""
                  />
                </div>

                <div className="flex flex-wrap space-between w-full">
                  <div className="flex flex-col w-full">
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="time"
                    >
                      Time
                    </label>
                    <input
                      id="time"
                      type="text"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      placeholder="Insert a desire time"
                      className="block mb-4 w-full px-4 py-2 mt-2 mr-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className="text-gray-700 dark:text-gray-200"
                      htmlFor="date"
                    >
                      Date
                    </label>
                    <input
                      id="date"
                      type="text"
                      title={'Must use the calender to change modify date'}
                      disabled={true}
                      value={value.toLocaleDateString()}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 cursor-not-allowed border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap w-full mt-6">
                <div className="flex mb-10 mr-10">
                  {user ? (
                    <button
                      onClick={handleSubmit}
                      className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                    >
                      Submit Booking
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-red-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Log in to complete booking
                      </button>
                    </Link>
                  )}
                </div>

                <div className="flex mb-10">
                  <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Contact
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="flex h-full items-center justify-center align-center px-0 w-full sm:w-1/2 sm:px-10">
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
      <MessengerCustomerChat
        pageId="1931522937145882"
        appId="254515237206307"
      />
      <Footer />
    </>
  );
}
