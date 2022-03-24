import React from 'react';
import SocialMedia from '../Components/SocialMedia';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../redux/UserRedux';

//const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(198, 119, 0, 0.25) 20%)'
//const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(198, 119, 0, 0.1) 20%)'
const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(190, 120, 110, 0.12) 20%)'

export default function Home() {

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  
  return (
    <div className="relative">
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

              <SocialMedia/>

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
                  {user ? <FontAwesomeIcon onClick={() => dispatch(logout())} className="cursor-pointer" icon={faUser} /> : <a href="/login">Login</a>}
                  
                </li>
              </ul>

          </div>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row min-h-screen h-screen">
        <div className="flex w-full md:w-1/3 h-full bg-cover bg-center border border-gray-800" style={{backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80')`}}>
          <div className="flex justify-center items-end h-full w-full py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Commercial</h2>
              <p className='text-sm leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.</p>
              <button className='self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform'>View Gallery</button>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-1/3 h-full bg-cover bg-center border border-gray-800" style={{backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1629264422348-4437c4849179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`}}>
        <div className="flex justify-center items-end h-full w-full py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Lifestyle</h2>
              <p className='text-sm leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.</p>
              <button className='self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform'>View Gallery</button>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-1/3 h-full bg-cover bg-center border border-gray-800" style={{backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1624404238005-5a909e551a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`}}>
        <div className="flex justify-center items-end h-full w-full py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Special Moments</h2>
              <p className='text-sm leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.</p>
              <button className='self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform'>View Gallery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
