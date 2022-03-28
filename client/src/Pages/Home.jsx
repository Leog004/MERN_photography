import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/NavBar';

//const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(198, 119, 0, 0.25) 20%)'
//const LinearGradient = 'linear-gradient(180deg, #303030 0%, rgba(198, 119, 0, 0.1) 20%)'
const LinearGradient =
  'linear-gradient(180deg, #303030 0%, rgba(190, 120, 110, 0.12) 20%)';

export default function Home() {
  return (
    <div className="relative">
    <Navbar />
      <div className="flex flex-col md:flex-row h-full sm:min-h-screen sm:h-screen">
        <div
          className="flex w-full md:w-1/3 h-96 sm:h-full bg-cover bg-center border border-gray-800"
          style={{
            backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80')`,
          }}
        >
          <div className="flex justify-center items-center sm:items-end h-full w-full py-10 sm:py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Commercial</h2>
              <p className="text-sm leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse egestas accumsan.
              </p>
              <Link to="/gallery">
                <button className="self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform">
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex w-full md:w-1/3 h-96 sm:h-full bg-cover bg-center border border-gray-800"
          style={{
            backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1629264422348-4437c4849179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
          }}
        >
          <div className="flex justify-center items-center sm:items-end h-full w-full py-10 sm:py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Lifestyle</h2>
              <p className="text-sm leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse egestas accumsan.
              </p>
              <Link to="/gallery">
                <button className="self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform">
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="flex w-full md:w-1/3 h-96 sm:h-full bg-cover bg-center border border-gray-800"
          style={{
            backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1624404238005-5a909e551a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
          }}
        >
          <div className="flex justify-center items-center sm:items-end h-full w-full py-10 sm:py-40 px-14">
            <div className="flex flex-col text-white">
              <h2 className="font-bold text-2xl leading-10">Special Moments</h2>
              <p className="text-sm leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse egestas accumsan.
              </p>
              <Link to="/gallery">
                <button className="self-start mt-4 px-2 py-2 border rounded-lg border-l-4 border-r-4 shadow-md hover:bg-white hover:text-gray-600 hover:shadow-xl hover:scale-105 transition-all ease-in duration-150 transform">
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
