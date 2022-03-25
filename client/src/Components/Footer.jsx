import React from 'react'
import SocialMedia from './SocialMedia'

export default function Footer() {
    return (
    <footer className="text-center text-white bg-gray-900">
      <div className="container pt-9 mx-auto">
        <div className="flex justify-center mb-2">
          <SocialMedia />
        </div>
      </div>

        <div className="text-center text-gray-700 p-2">
          © 2021 Copyright: <a className="text-gray-800" href="/">Yourcompany@company</a>
        </div>
      </footer>
    )
}