import React, { useState } from 'react'
import { MdMenuOpen } from 'react-icons/md';
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-scroll';


function Navbar() {
  const [menu, setMenu] = useState(false)
  const navItems = [
    {
      id: 1,
      text: "Home"
    },
    {
      id: 2,
      text: "About"
    },
    {
      id: 3,
      text: "Portfolio"
    },
    {
      id: 4,
      text: "Experiance"
    },
    {
      id: 5,
      text: "Contacts"
    }
  ];
  return (
    <>
      <div className='max-w-screen-2 mx-auto px-4 md:px-20  h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white '>
        <div className='flex justify-between items-center h-16'>
          <div className='flex space-x-3'>
            <img src="https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750488400/DSC_0002_xisc6s.jpg" className='h-12 w-12 rounded-full' alt="my image" />
            <h1 className='font-semibold text-xl cursor-pointer'>SUMI<span className='text-red-500 text-2x1'>T</span>
              <p className='text-sm'>Web Developer</p>
            </h1>
          </div>
          {/*destop navbar */}

          <div>
            <ul className='hidden md:flex space-x-8'>
              {navItems.map(({ id, text }) => (
                <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                  <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'

                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className='md:hidden' style={{ cursor: "pointer", fontSize: "24px" }}>
              {menu ? <IoMdClose size={24} /> : <MdMenuOpen size={24} />}
            </div>

          </div>
        </div>
        {/*mobile navbar */}
        {menu && (

          <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
              {navItems.map(({ id, text }) => (
                <li className='hover:scale-105 duration-200 font-semibold cursor-pointer' key={id}>
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;