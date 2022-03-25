import React from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Navbar from '../Components/NavBar';

export default function Services() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="w-full h-full max-w-7xl mx-auto py-24">
        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex flex-col w-full sm:w-1/2 px-5 mb-10 sm:mb-0 sm:pr-10 gap-y-10">
            <div className="flex flex-col">
              <h1 className="text-5xl leading-[1.2] mb-10">
                Photography is an art. <span className="text-sm">(Style 1)</span>
              </h1>
              <p className="text-sm text-gray-800 leading-6">
                Fusce aliquam tincidunt hendrerit. Nunc tincidunt id velit sit
                amet vestibulum. In venenatis tempus odio ut dictum. Curabitur
                ac nisl molestie, facilisis nibh ac, facilisis ligula. Integer
                congue malesuada eros congue varius. Sed malesuada dolor eget
                velit euismod pretium. Etiam porttitor finibus pretium. Nam
                suscipit vel ligula at dharetra.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <h2 className="text-4xl tracking-[1.7] leading-[1.7] mb-2">
                Weddings
              </h2>
              <p className="text-sm text-gray-500 tracking-wide font-semibold leading-6">
                Fusce aliquam tincidunt hendrerit. Nunc tincidunt id velit sit
                amet vestibulum. In venenatis tempus odio ut dictum. Curabitur
                ac nisl molestie, facilisis nibh ac, facilisis ligula.
              </p>
              <p className="text-sm text-gray-800 leading-6">
                Curabitur ac nisl molestie, facilisis nibh ac, facilisis ligula.
                Integer congue malesuada eros congue varius. Sed malesuada dolor
                eget velit euismod pretium. Etiam porttitor finibus pretium. Nam
                suscipit vel ligula at dharetra.
              </p>
            </div>
          </div>

          <div className="flex w-full sm:w-1/2">
            <img
              alt="placeholder"
              className="object-cover object-right w-full h-full"
              src="https://images.unsplash.com/photo-1496559249665-c7e2874707ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-full max-w-7xl mx-auto pb-24">
        <div className="flex flex-col sm:flex-row gap-x-10">
          <div className="flex flex-col gap-y-10 w-full mb-10 px-5 sm:px-0 sm:mb-0 sm:w-1/2">
            <h2 className="text-4xl tracking-[1.7] leading-[1.2]">Weddings <span className="text-sm">(Style 2)</span></h2>
            <p className="text-sm text-gray-500 tracking-wide font-semibold leading-6">
              Fusce aliquam tincidunt hendrerit. Nunc tincidunt id velit sit
              amet vestibulum. In venenatis tempus odio ut dictum. Curabitur ac
              nisl molestie, facilisis nibh ac, facilisis ligula.
            </p>

            <p className="text-sm text-gray-800 leading-6">
                Curabitur ac nisl molestie, facilisis nibh ac, facilisis ligula.
                Integer congue malesuada eros congue varius. Sed malesuada dolor
                eget velit euismod pretium. Etiam porttitor finibus pretium. Nam
                suscipit vel ligula at dharetra.
              </p>

            <div className="grid grid-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="flex h-full max-h-96 px-4 sm:px-0">
                <img
                  alt={'asd'}
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
              <div className="flex h-full max-h-96 px-4 sm:px-0">
                <img
                  alt={'asd'}
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
              <div className="flex h-full max-h-96 px-4 sm:px-0">
                <img
                  alt={'asd'}
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
              <div className="flex h-full max-h-96 px-4 sm:px-0">
                <img
                  alt={'asd'}
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-2 sm:gap-x-10 w-full sm:w-1/2 justify-center items-center">
            <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-sm">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Silver
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">$3500</p>
              </div>
              <div class="border-t border-gray-200">
                <dl>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Hours: </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Mickael Poulaz
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Best techno
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      React JS
                    </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      m.poul@example.com
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Salary</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      $10,000
                    </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">About</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      To get social media testimonials like these, keep your
                      customers engaged with your social media accounts by
                      posting regularly yourself
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div class="bg-white max-w-2xl shadow overflow-hidden sm:rounded-sm">
              <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Gold
                </h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">$3500</p>
              </div>
              <div class="border-t border-gray-200">
                <dl>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Full name</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Mickael Poulaz
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Best techno
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      React JS
                    </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      m.poul@example.com
                    </dd>
                  </div>
                  <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">Salary</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      $10,000
                    </dd>
                  </div>
                  <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt class="text-sm font-medium text-gray-500">About</dt>
                    <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      To get social media testimonials like these, keep your
                      customers engaged with your social media accounts by
                      posting regularly yourself
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
