import React from 'react';
import Navbar from '../Components/NavBar';

const LinearGradient =
  'linear-gradient(180deg, #303030 0%, rgba(190, 120, 110, 0.12) 20%)';

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div
        className="min-h-full h-[40rem] w-full bg-cover bg-center"
        style={{
          backgroundImage: `${LinearGradient},url('https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')`,
        }}
      >
        <div className="max-w-6xl h-full mx-auto">
          <div className="flex w-3/4 sm:w-1/2 mx-auto flex-col justify-center items-center h-full text-white">
            <h2 className="text-xl uppercase font-semibold tracking-wider mb-5 mt-36">
              - Gallery -{' '}
            </h2>
            <h1 className="text-6xl font-semibold tracking-wide mb-5">
              Collection
            </h1>
            <p className="text-sm px-0 sm:px-24 text-center">
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface of the impenetrable foliage
              of my trees.
            </p>
          </div>
        </div>
      </div>
      <section id="gallery" className="max-w-6xl mx-auto h-full py-20">
        <div className="grid grid-1 sm:grid-cols-3 gap-x-8 gap-y-10">
          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>



          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1295&q=80"
            />
          </div>

          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1647985071323-9cb67085249d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80"
            />
          </div>
          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1604840935778-c7bae87a4fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
          </div>
          <div className='flex h-full max-h-96 px-4 sm:px-0'>
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1558476736-4775d221425c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            />
          </div>

        </div>
      </section>
    </>
  );
}
