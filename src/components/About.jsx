import React from 'react'
import about from '../assets/about.jpg'
const About = () => {
    return (
        <div id='about' className="text-white max-w-[1200px] md:my-[100px] my-10 mx-auto" >
            <div className="flex justify-between">
                <div className="flex flex-col my-auto 
                max-w-[500px] md:max-w-[800px] font-mono">
                    <h1 className='px-[20px] text-3xl md:text-6xl primary-color my-6'>About Me</h1>
                    <p className='leading-5 md:leading-10 px-[20px] text-[10px] md:text-3xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora deserunt dolorum nemo eius cupiditate ipsam in odio magni unde eos. Sint quasi reprehenderit non fugiat autem ut nostrum itaque. Sed, porro ipsam?</p>
                </div>
                <img src={about} alt="" className=' w-[150px] md:h-[400px] md:w-[300px] px-6 md:px-0 my-auto' />

            </div>

        </div>
    )
}

export default About
