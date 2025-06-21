import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { ReactTyped } from "react-typed";



function Home() {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mt-12 md:mt-15 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
              <h1>Hello, I'm a </h1>
              {/* <span className='text-red-700 font-bold'> Developer</span> */}
              <ReactTyped 
              className='text-red-600 font-bold'
              strings={["Developer","Programmer","Coder"]} 
              typeSpeed={40}
              backSpeed={50}
              loop={true}
              />
            </div>
            <br />
            <p className='text-sm md:text-md text-justify'>Hello! I'm a passionate and creative Frontend
               Web Developer with a strong foundation in building responsive and user-friendly websites. 
               I enjoy turning ideas into reality using clean and efficient code. With a focus on 
               performance, usability, and modern design, I strive to create web experiences that 
               are not only functional but also visually appealing.
            </p>
            <br />
            {/*social media icons */}
            <div className='flex justify-between'>
              <div className='space-y-2'>
                <h1 className='font-bold'>Avalable On</h1>
                <ul className='flex space-x-5 mt-5'>
                  <li>
                    <a href="https://www.facebook.com/share/1ANFQSQ7NU/" target='blank'>
                    <FaFacebookSquare className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/sumit-kumar8716" target='blank'>
                    <FaLinkedin className='text-2xl cursor-pointer' />
                  </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/smt_sharma_?igsh=a2Iwajd3eGVqOHR5" target='blank'>
                    <FaSquareInstagram className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/SUMIT-KUMAR15" target='blank'>
                    <FaGithubSquare className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold'>Currently Working On</h1>
                <ul className='flex space-x-5 mt-5'>
                  <li>
                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  </li>
                  <li>
                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  </li>
                  <li>
                    <IoLogoReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  </li>
                  <li>
                    <IoLogoNodejs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 md:ml-60 md:mt-20 order-1'>
          <img src="https://res.cloudinary.com/dhmp8wfx9/image/upload/v1750488400/DSC_0002_xisc6s.jpg" 
          className='rounded-full md:w-[300px] md:h-[300px]' alt="" />
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;