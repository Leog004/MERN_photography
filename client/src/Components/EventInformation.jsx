import React, { useMemo, useState } from 'react';
import EventCardBill from '../Components/EventCardBill';
import { UserRequest } from '../requestMethod';

export default function EventInformation({data}) {

    console.log(data);
  return (
    <div className="flex h-full">
      <div className="container px-5 pt-24 pb-10 mx-auto w-full bg-[#fafcfb4d]">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl text-left font-medium title-font mb-4 text-gray-900">
            Event Information : {data.event.name}
          </h1>
          <hr />
        </div>
        <EventCardBill data={data} />
        <hr />
        <div className="flex flex-col text-center w-full mt-12">
          <h1 className="sm:text-3xl text-left text-2xl font-medium title-font mb-4 text-gray-900">
            Your Collection
          </h1>
        </div>
        <section id="gallery" className="max-w-6xl mx-auto py-20">
        <div className="grid grid-1 sm:grid-cols-3 gap-x-8 gap-y-10">
          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1524758870432-af57e54afa26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
          </div>

          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1295&q=80"
            />
          </div>

          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1647985071323-9cb67085249d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80"
            />
          </div>
          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1604840935778-c7bae87a4fb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
          </div>
          <div className="flex h-full max-h-96 px-4 sm:px-0">
            <img
              alt={'asd'}
              src="https://images.unsplash.com/photo-1558476736-4775d221425c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
            />
          </div>
        </div>
      </section>    
      </div>
    </div>
  );
}
