import React from 'react';

const LinearGradient =
  'linear-gradient(180deg, #303030 0%, rgba(190, 120, 110, 0.12) 20%)';

export default function Login() {
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
      <section class="text-gray-600 body-font relative">
        <div class="flex">
          <div
            class="w-1/2 bg-cover bg-center h-full min-h-screen -z-10 sm:block hidden"
            style={{
              backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1629264422348-4437c4849179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`,
            }}
          ></div>
          <div class="container px-5 py-24 mx-auto w-1/2 bg-[#fafcfb4d]">
            <div class="flex flex-col text-center w-full mb-12">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Login
              </h1>
              <hr />
            </div>
            <div class="lg:w-2/3 md:w-2/3 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="p-2 w-full">
                  <div class="relative">
                    <label for="email" class="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <div class="relative">
                    <label
                      for="password"
                      class="leading-7 text-sm text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:gray-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div class="p-2 w-full">
                  <button class="flex self-start text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
                    Submit
                  </button>
                </div>
                <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                  <p class="text-indigo-500">
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
