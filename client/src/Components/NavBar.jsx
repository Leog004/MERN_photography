import React from 'react';
import SocialMedia from '../Components/SocialMedia';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <nav className="bg-black sm:bg-transparent w-full h-52 sm:h-40 relative sm:absolute">
      <div className="flex flex-col sm:flex-row justify-between h-full px-0 sm:px-20 w-full">
        <div className="logo flex h-full w-auto items-end align-center justify-center">
          <Link to="/">
            <img
              className="h-20 w-auto pb-5"
              alt="company-logo"
              src="https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/11/logo_responsive_alt.png"
            />
          </Link>
        </div>
        <div className="nav-items flex flex-col h-full justify-center items-center">
          <SocialMedia />

          <ul className="item flex w-full flex-wrap justify-center gap-4 sm:gap-10 pb-5 text-white items-end align-center h-auto">
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <button>Gallery</button>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <button>Services</button>
              </Link>
            </li>
            <li>
              <Link to="/booking">
                <button>Booking</button>
              </Link>
            </li>
            <li>
              {user ? (
                <Link to="/account">
                  <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
                </Link>
              ) : (
                <Link to="/login">
                  <button>Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
