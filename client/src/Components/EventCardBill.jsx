import React from 'react'

export default function EventCardBill({data}) {
  return (
    <card className="rounded w-full shadow-xl flex flex-col sm:flex-row justify-between text-gray-200 bg-teal-900 mb-14">
    {/* <!-- Title --> */}
    <p className="font-semibold bg-white bg-opacity-20 rounded-t px-4 py-2">PRO</p>

    {/* <!-- Pricing --> */}
    <div className="flex flex-row items-center pt-8 bg-white bg-opacity-10 pl-12 pr-10 gap-3">
      <div className="flex flex-row gap-1">
        <span className="text-base"> $ </span>
        <p className="text-5xl font-semibold">{data.price}</p>
      </div>
      <p className="font-light text-xs">Current Balance</p>
    </div>

    {/* <!-- Pricing Additional Description -->
    <div className="flex flex-row items-center justify-center bg-white bg-opacity-10 pt-5 pb-10">
      <p className="text-xs text-gray-300 border border-gray-50 border-opacity-20 rounded-full py-1 px-2">$12 billed monthly</p>
    </div> */}

    <div className="grid grid-cols-12 bg-white bg-opacity-20 px-4 gap-y-3 pt-10">
      {/* <!-- Details 1 --> */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="col-span-11 text-sm flex items-center font-semibold pl-2">Unlimited items per workspace</div>

      {/* <!-- Line --> */}
      <div className="col-span-12 h-[1px] bg-white bg-opacity-20"></div>
{/* 
      <!-- Details 2 --> */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </div>

      <div className="col-span-11 text-sm flex items-center font-light pl-2">Everything in Starter</div>

      {/* <!-- Details 3 --> */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="col-span-11 text-sm flex items-center font-light pl-2">10+ free guests per file or folder</div>

      {/* <!-- Details 4 --> */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="col-span-11 text-sm flex items-center font-light pl-2">Priority support</div>

      {/* <!-- Details 5 --> */}
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="col-span-11 text-sm flex items-center font-light pl-2">Unlimited free viewers</div>
{/* 
      <!-- CTA Button --> */}
      <div className="col-span-12 mb-5 text-gray-100">
        <button className="rounded hover:bg-teal-400 bg-green-500 w-full py-3">Pay Balance</button>
      </div>
    </div>
  </card>
  )
}
