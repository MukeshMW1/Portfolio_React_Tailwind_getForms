import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col gap-10  md:max-w-[1200px] md:mx-auto md:p-5 my-[100px] text-white'>
            <div className="my-[20px] mx-[20px]" id='contact'>
                <h1 className='primary-color text-xl md:text-4xl 
             font-bold'>Contact Me</h1>
            </div>


            <form action="https://getform.io/f/pbqgvwnb" method='POST' className=" ">
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5  bg-[#161616] '>
                    <div className='my-10 mx-auto max-w-[500px]'>
                        <input id="name" name='name' type="text" placeholder='Your name' className='bg-transparent border border-2px p-6 text-center w-[300px] rounded-2xl' />
                    </div>
                    <div className=' my-10 mx-auto  max-w-[500px]'>

                        <input id="email" name='email' type="email" required placeholder='Your Email' className='bg-transparent border border-2px   p-6 text-center w-[300px] rounded-2xl' />
                    </div>
                    <div className="mx-[70px] sm:col-span-2">

                        <textarea id='message' className='resize-none focus:outline-none focus:border-pink-400 bg-transparent border border-2px p-4  text-center overflow-hidden w-full ' name='message' placeholder='Your Message' rows="4" />
                    </div>
                    <div className="w-[100px] mx-auto my-[20px] sm:col-span-2">

                        <button type='submit' id='message' className='resize-none focus:outline-none bg-gradient-to-r from-orange-400 to-pink-500 border border-2px p-4  text-center overflow-hidden w-full rounded-2xl border-none'>Submit</button>
                    </div>
                </div >
            </form >

        </div >
    )
}

export default Contact