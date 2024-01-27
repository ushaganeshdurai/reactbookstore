import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Backbutton = ({destination='/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white py-1 rounded-lg w-fit'>
            <BsArrowLeft />
        </Link>
    </div>
  )
}

export default Backbutton