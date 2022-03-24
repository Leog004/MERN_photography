import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';

const LinearGradient =
  'linear-gradient(180deg, #303030 0%, rgba(190, 120, 110, 0.12) 20%)';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);

  const handleOnClick = async (e) => {
    e.preventDefault();

    login(dispatch, {email, password})
  };

  return (
    <div className="relative">
      <nav className="bg-gray-900 sm:bg-transparent w-full h-28 sm:h-40 relative sm:absolute z-20">
        <div className="flex flex-col sm:flex-row justify-between h-full px-20 w-full">
          <div className="logo flex h-full w-auto items-end align-center justify-center">
            <a className="cursor-pointer" href="/">
              <img
                className="h-20 w-auto pb-5"
                alt="company-logo"
                src="https://imaginem.io/blacksilver/wp-content/uploads/sites/2/2019/11/logo_responsive_alt.png"
              />
            </a>
          </div>
        </div>
      </nav>
      <section className="text-gray-600 body-font relative">
        <div className="flex">
          <div
            className="w-1/2 bg-cover bg-center h-full min-h-screen -z-10 sm:block hidden"
            style={{
              backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1629264422348-4437c4849179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
            }}
          ></div>
          <div className="container px-5 py-24 mx-auto w-1/2 bg-[#fafcfb4d]">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Login
              </h1>
              <hr />
            </div>
            <div className="lg:w-2/3 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:gray-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    disabled={isFetching}
                    onClick={handleOnClick}
                    className="flex self-start text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
                  >
                    Submit
                  </button>
                  {error && <div>Username and password do not match</div>}
                </div>
                <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <p className="text-indigo-500">
                    Do not have an account? <br />{' '}
                    <a
                      className="text-red-600 text-sm uppercase underline underline-offset-8"
                      href="/signup"
                    >
                      sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
