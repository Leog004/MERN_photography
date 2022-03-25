import React from 'react'

const LinearGradient =
  'linear-gradient(180deg, #303030 0%, rgba(190, 120, 110, 0.12) 20%)';

export default function Hero({title, image}) {
  return (
    <div
    className="min-h-full h-[40rem] w-full bg-cover bg-center"
    style={{
      backgroundImage: `${LinearGradient},url('${image}')`,
    }}
  >
    <div className="max-w-6xl h-full mx-auto">
      <div className="flex w-3/4 sm:w-1/2 mx-auto flex-col justify-center items-center h-full text-white">
        <h2 className="text-xl uppercase font-semibold tracking-wider mb-5 mt-36">
          - {title} -
        </h2>
        {/* <h1 className="text-6xl font-semibold tracking-wide mb-5">
          Collection
        </h1> */}
        <p className="text-sm px-0 sm:px-24 text-center">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage
          of my trees.
        </p>
      </div>
    </div>
  </div>
  )
}
