import React from 'react'
import hro_img from '../assets/profilepic7.png'
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto bg-black text-white'>
            <div className="cols-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] ">
                <img src={hro_img} alt="" />

            </div>
            <div className="col-span-2 my-auto p-6 ">
                <h1 className='text-white text-3xl sm:text-4xl lg:text-6xl font-extrabold'><span className='bg-gradient-to-r from-green-500 to-blue-500  text-transparent bg-clip-text inline-block'>I'm </span><br />
                    <TypeAnimation sequence={[
                        " a Frontend Dev.", 1000, "a Web Dev.", 1000, "an App Dev.", 1000, "an AI Dev.", 1000
                    ]} wrapper="span" speed={50} repeat={Infinity} /></h1>
                <p className='text-white sm:text-lg my-6 lg:text-xl'>My name is Mukesh Bhatta and I have 3 years of self experience</p>

                <div className="my-8">
                    <a href="/" className='px-6 py-5 w-full rounded-2xl  mr-4  bg-gradient-to-br from-orange-500 to-yellow-500'>Download CV</a>


                    <a href="#contact" className='px-6 py-5 w-full rounded-2xl mr-4 border border-gray-400 hover hover:bg-gradient-to-br from-orange-500 to-violet-500 hover:border-none'>Contact</a>
                </div>

            </div>
        </div>
    )
}

export default Hero
