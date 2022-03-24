import React from 'react';
import SocialMedia from '../Components/SocialMedia';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../redux/UserRedux';

export default function Navbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <nav className="bg-black sm:bg-transparent w-full h-52 sm:h-40 relative sm:absolute">
      <div className="flex flex-col sm:flex-row justify-between h-full px-20 w-full">
        <div className="logo flex h-full w-auto items-end align-center justify-center">
          <img
            className="h-20 w-auto pb-5"
            alt="company-logo"
            src="https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/11/logo_responsive_alt.png"
          />
        </div>
        <div className="nav-items flex flex-col h-full justify-center items-center">
          <SocialMedia />

          <ul className="item flex gap-10 pb-5 text-white items-end align-center h-auto">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Gallery</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/booking">Booking</a>
            </li>
            <li>
              {user ? (
                <FontAwesomeIcon
                  onClick={() => dispatch(logout())}
                  className="cursor-pointer"
                  icon={faUser}
                />
              ) : (
                <a href="/login">Login</a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
