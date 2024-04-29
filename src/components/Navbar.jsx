import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const sidebarRef = useRef(null);

    const handleNav = () => {
        setNav(!nav);

    }




    return (

        <div className='bg-black h-[100px] text-gray-400 max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3xl font-bold primary-color ml-4'>MW</h1>

            <ul className='hidden md:flex'>

                <li className='p-5'><a href="#about">About</a></li>
                <li className='p-5'><a href="#work">Work</a></li>
                <li className='p-5'><a href="#contact">Contact</a></li>
            </ul>


            <div onClick={handleNav} className="block md:hidden mr-[20px]">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>


            <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] md:w-[30%] bg-opacity-50 backdrop-blur-[10px] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
                <h1 className='text-3xl font-bold primary-color ml-10 '>MW</h1>

                <ul className='p-8 text-[30px] text-white'>

                    <li className='p-2'><a href="#about">About</a></li>
                    <li className='p-2'><a href="#work">Work</a></li>
                    <li className='p-2'><a href="#contact">Contact</a></li>
                </ul>
            </div>


        </div >

    )
}

export default Navbar
