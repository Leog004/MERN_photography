import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

//const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(198, 119, 0, 0.25) 20%)'
//const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(198, 119, 0, 0.1) 20%)'
const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(190, 120, 110, 0.12) 20%)'

export default function Home() {
  return (
    <div className="relative">
      <nav className="bg-transparent w-full h-40 relative sm:absolute">
        <div className="flex justify-between h-full px-20">
          <div className="logo flex h-full w-auto items-end align-center">
            <img
              className="h-20 w-auto pb-5"
              alt="company-logo"
              src="https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/11/logo_responsive_alt.png"
            />
          </div>
          <div className="nav-items flex flex-col h-full">

              <ul className="item flex gap-5 text-white justify-end items-center align-center h-full -mb-10">
                <li>
                  <FontAwesomeIcon className='mr-4' icon={faFacebook}/>
                </li>
                <li>
                  <FontAwesomeIcon className='mr-4' icon={faInstagram}/>
                </li>
                <li>
                  <FontAwesomeIcon className='mr-4' icon={faYoutube}/>
                </li>
                <li>
                  <FontAwesomeIcon className='mr-4' icon={faTiktok}/>
                </li>
              </ul>

              <ul className="item flex gap-10 pb-5 text-white items-end align-center h-auto">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Booking</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>

          </div>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row min-h-screen h-screen">
        <div className="flex w-full md:w-1/3 h-full bg-cover bg-center border border-gray-800" style={{backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80')`}}>
          <div className="flex justify-center items-end h-full w-full py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Volcanos</h2>
              <p className='text-sm leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.</p>
              <button className='self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform'>View Gallery</button>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-1/3 h-full bg-cover bg-center border border-gray-800" style={{backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1629264422348-4437c4849179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`}}>
        <div className="flex justify-center items-end h-full w-full py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Volcanos</h2>
              <p className='text-sm leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.</p>
              <button className='self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform'>View Gallery</button>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-1/3 h-full bg-cover bg-center border border-gray-800" style={{backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1624404238005-5a909e551a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`}}>
        <div className="flex justify-center items-end h-full w-full py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Volcanos</h2>
              <p className='text-sm leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.</p>
              <button className='self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform'>View Gallery</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
