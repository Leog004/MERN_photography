import React from 'react';
import SocialMedia from '../../Components/SocialMedia';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <nav className="bg-black w-full h-52 sm:h-40 relative">
      <div className="flex flex-col sm:flex-row justify-between h-full px-0 sm:px-20 w-full">
        <div className="logo flex h-full w-auto items-end align-center justify-center">
          <Link to="/admin">
            <img
              className="h-32 w-auto pb-5 pt-5 sm:pt-0"
              alt="company-logo"
              src="/logo1921.png"
            />
          </Link>
        </div>
        <div className="nav-items flex flex-col h-full justify-center items-center">
          <SocialMedia />

          <ul className="item flex w-full flex-wrap justify-center pb-5 text-white items-end align-center h-auto">
            <li className='mr-4 sm:mr-10'>
              <Link to="/admin">
                <button>Home</button>
              </Link>
            </li>
            <li className='mr-4 sm:mr-10'>
              <Link to="/admin/gallery">
                <button>Gallery</button>
              </Link>
            </li>
            <li className='mr-4 sm:mr-10'>
              <Link to="/admin/services">
                <button>Services</button>
              </Link>
            </li>
            <li className='mr-4 sm:mr-10'>
              <Link to="/admin/booking">
                <button>Users</button>
              </Link>
            </li>           
            <li className='mr-4 sm:mr-10'>
              <Link to="/admin/booking">
                <button>Booking</button>
              </Link>
            </li>
            <li className=''>
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
