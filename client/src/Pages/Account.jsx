import React, { useState, useEffect, useMemo } from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/NavBar';
import { logout } from '../redux/UserRedux';
import { useDispatch } from 'react-redux';
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';
import { UserRequest } from '../requestMethod';
import EventCardBill from '../Components/EventCardBill';

export default function Account() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.currentUser?.token);

  const config = useMemo(
    () => ({
      headers: { Authorization: `Bearer ${token}` },
    }),
    [token]
  );

  const { isFetching } = useSelector((state) => state.user);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookings, setBookings] = useState([]);
  const [showEventInfo, setShowEventInfo] = useState(false);
  const [showModel, setshowModel] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNavigate = (e) => {
    e.preventDefault();
    const show = e.target.id;

    if (show === 'personal') setShowEventInfo(false);
    else setShowEventInfo(true);
  };

  const handleOnClick = () => {
    const updateUser = async () => {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      };

      try {
        const uUser = await UserRequest.patch(`users/updateMe`, data, config);
        console.log(uUser);
      } catch (err) {
        console.log(err);
      }
    };
    updateUser();
  };

  useEffect(() => {
    const getUserInformation = async () => {
      try {
        const res = await UserRequest.get(`users/me `, config);
        const { email, firstName, lastName, phone } = res.data.data.data;
        setEmail(email);
        setFirstName(firstName);
        setLastName(lastName);
        setPhone(phone || '');
      } catch (e) {
        console.log(e);
      }
    };

    const getUserBookings = async () => {
      try {
        const res = await UserRequest.get(`bookings/`, config);
        const data = res.data.bookings;
        setBookings(data);
      } catch (e) {
        console.log(e);
      }
    };

    getUserInformation();
    getUserBookings();
  }, [config]);

  return (
    <div>
      <Navbar />

      <Hero
        title={'Account'}
        image={
          'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'
        }
      />

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row w-full h-full">
          <div className="relative bg-gray-50 shadow-md">
            <div className="flex flex-col sm:flex-row sm:justify-around">
              <div className="w-72 sm:h-screen">
                <nav className="mt-10">
                  <button
                    id={'personal'}
                    onClick={handleNavigate}
                    className="w-full text-lg font-normal bg-gray-300 flex items-center p-2 my-6 transition-colors  duration-200  text-gray-600"
                  >
                    Personal Information
                  </button>
                  <div className="w-full items-start p-2 my-6 transition-colors duration-200  text-gray-800">
                    <span className="flex flex-col mx-4 text-lg font-normal">
                      Your Bookings
                      <ul className="w-full h-full py-2 text-sm flex flex-col justify-start self-start">
                        {bookings.map((el) => (
                          <li
                            key={el.event._id}
                            className="flex cursor-pointer w-full mb-4 ml-2 underline underline-offset-4 hover:text-gray-800 hover:bg-gray-200"
                          >
                            <button
                              className="flex w-full h-full px-2 py-2 "
                              id={`booking_${el.event.name}`}
                              onClick={handleNavigate}
                            >
                              {el.event.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </span>
                  </div>
                  <button
                    onClick={() => dispatch(logout())}
                    className="w-full hover:text-gray-800 hover:bg-gray-200 flex items-center p-2 my-6 transition-colors duration-200  text-gray-600"
                  >
                    <span className="mx-4 text-lg font-normal">Sign Out</span>
                    <span className="flex-grow text-right"></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="relative w-full">
              <section className="text-gray-600 body-font relative">
                {!showEventInfo ? (
                  <div className="flex h-full">
                    <div className="container px-5 pt-24 pb-10 mx-auto w-full bg-[#fafcfb4d]">
                      <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                          Update User Information
                        </h1>
                        <hr />
                      </div>
                      <div className="lg:w-2/3 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                              >
                                First Name
                              </label>
                              <input
                                type="text"
                                id="fname"
                                name="fname"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                            </div>
                          </div>
                          <div className="p-2 w-1/2">
                            <div className="relative">
                              <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                              >
                                Last Name
                              </label>
                              <input
                                type="text"
                                id="lname"
                                name="lname"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                            </div>
                          </div>
                          <div className="p-2 w-full">
                            <div className="relative">
                              <label
                                htmlFor="email"
                                className="leading-7 text-sm text-gray-600"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                disabled
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-gray-400 bg-opacity-50 cursor-not-allowed rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                            </div>
                          </div>
                          <div className="p-2 w-full">
                            <div className="relative">
                              <label
                                htmlFor="phone"
                                className="leading-7 text-sm text-gray-600"
                              >
                                Phone Number
                              </label>
                              <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              />
                            </div>
                          </div>
                          <div className="p-2 w-full">
                            <button
                              disabled={isFetching}
                              onClick={handleOnClick}
                              className="flex self-start text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
                            >
                              Update Information
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full">
                    <div className="container px-5 pt-24 pb-10 mx-auto w-full bg-[#fafcfb4d]">
                      <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl text-left font-medium title-font mb-4 text-gray-900">
                          Event Information
                        </h1>
                        <hr />
                      </div>
                      <EventCardBill data={""} />
                      <hr />
                      <div className="flex flex-col text-center w-full mt-12">
                        <h1 className="sm:text-3xl text-left text-2xl font-medium title-font mb-4 text-gray-900">
                          Your Collection
                        </h1>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
