import React from 'react';
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'

const Work = () => {
    return (
        <div className='flex flex-col gap-10  md:max-w-[1200px] md:mx-auto md:p-5 my-[100px]' id='work'>
            <h1 className='primary-color text-3xl md:text-5xl mx-[20px] font-bold'>Work</h1>
            <p className='text-[12px] md:text-xl text-white mx-[20px]'>Check out some of my work: </p>



            <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-10 mx-auto">

                <div className='transform hover:transition-transform duration-300 hover:scale-[.9]  justify-center items-center mx-auto  rounded-md'>
                    <img src={proj1} alt="" className='w-[300px] 
                 rounded-2xl md:w-[600px] ' />
                    <div className="opacity-0 hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-white tracking-wider'>Gemini</span>
                        <div className="pt-[40px] text-center">
                            <a href="https://gemini-clone-teal.vercel.app/" target='_blank'><button className='bg-white text-center rounded-lg px-2 py-2  text-gray-700 font-bold text-lg'>Live</button></a>
                        </div>

                    </div>
                </div>
                <div className='transform hover:transition-transform duration-300 hover:scale-[.9]  justify-center items-center mx-auto  rounded-md'>
                    <img src={proj2} alt="" className='w-[300px] 
                 rounded-2xl md:w-[600px] ' />
                    <div className="opacity-0 hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-white tracking-wider'>React Portfoio</span>
                        <div className="pt-[40px] text-center">
                            <a href="https://react-portfolio-zeta-jade.vercel.app/" target='_blank'><button className='bg-white text-center rounded-lg px-2 py-2  text-gray-700 font-bold text-lg'>Live</button></a>
                        </div>

                    </div>
                </div>
                <div className='transform hover:transition-transform duration-300 hover:scale-[.9]  justify-center items-center mx-auto  rounded-md'>
                    <img src={proj3} alt="" className='w-[300px] 
                 rounded-2xl md:w-[600px] ' />
                    <div className="opacity-0 hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-white tracking-wider'>JS portfolio</span>
                        <div className="pt-[40px] text-center">
                            <a href="https://portfolio-six-liart-15.vercel.app/" target='_blank' ><button className='bg-white text-center rounded-lg px-2 py-2  text-gray-700 font-bold text-lg'>Live</button></a>
                        </div>

                    </div>
                </div>
                <div className='transform hover:transition-transform duration-300 hover:scale-[.9]  justify-center items-center mx-auto  rounded-md'>
                    <img src={proj4} alt="" className='w-[300px] 
                 rounded-2xl md:w-[600px] ' />
                    <div className="opacity-0 hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-white tracking-wider'>Quote Generator</span>
                        <div className="pt-[40px] text-center">
                            <a href="https://raandom-quote-generator.vercel.app/" target="_blank" ><button className='bg-white text-center rounded-lg px-2 py-2  text-gray-700 font-bold text-lg'>Live</button></a>
                        </div>

                    </div>
                </div>
                <div className='transform hover:transition-transform duration-300 hover:scale-[.9]  justify-center items-center mx-auto  rounded-md'>
                    <img src={proj5} alt="" className='w-[300px] 
                 rounded-2xl md:w-[600px] ' />
                    <div className="opacity-0 hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-white tracking-wider'>JS Calculator</span>
                        <div className="pt-[40px] text-center">
                            <a href="https://js-calculator-two-ebon.vercel.app/" target='_blank' ><button className='bg-white text-center rounded-lg px-2 py-2  text-gray-700 font-bold text-lg'>Live</button></a>
                        </div>

                    </div>
                </div>
                <div className='transform hover:transition-transform duration-300 hover:scale-[.9]  justify-center items-center mx-auto  rounded-md'>
                    <img src={proj6} alt="" className='w-[300px] 
                 rounded-2xl md:w-[600px] ' />
                    <div className="opacity-0 hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                        <span className='text-2xl font-bold text-white tracking-wider'>Food App...</span>
                        <div className="pt-[40px] text-center">
                            <a href="/" ><button className='bg-white text-center rounded-lg px-2 py-2  text-gray-700 font-bold text-lg'>Live</button></a>
                        </div>

                    </div>
                </div>





            </div>
        </div>
    )
}

export default Work
