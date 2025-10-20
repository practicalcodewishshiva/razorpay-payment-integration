import React from 'react'
import Searchbar from './Searchbar'
import Icons from './Icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className=' flex px-4'>
     <nav className="sm:hidden  md:flex lg:flex space-x-10 font-semibold text-gray-700 uppercase text-sm  px-1 py-6 items-center w-1/2 ">
          <Link to="/">
            <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png"
            alt="Myntra"
            className="w-15 h-10"
          />
        </div>
          </Link>
          <Link to="/Men" className='font-semi-bold '>Men</Link>
          <Link to="/Women" className='font-semi-bold '>Women</Link>
          <Link to="/Kids" className='font-semi-bold '>Kids</Link>
          <Link to="#" className='font-semi-bold '>Home</Link>
          <Link to="#" className='font-semi-bold '>Beauty</Link>
          <Link to="#" className='font-semi-bold '>GENZ</Link>
          <Link to="#" className="font-semi-bold xl:hidden">
            Studio <sup className="text-xs text-pink-600">New</sup>
          </Link>
          
          
        </nav>

        <div className='w-1/2  flex items-center'>
            <div className='w-3/4'>
            <Searchbar />
            </div>




            <div className=''><Icons  /></div>
          
          
          
        </div>
     </div>
    </>
  )
}

export default Navbar
