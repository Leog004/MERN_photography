import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function SocialMedia() {
  return (
    <ul className="item flex gap-5 text-white justify-center sm:justify-end items-center align-center h-full sm:-mb-10 w-full">
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
  )
}
