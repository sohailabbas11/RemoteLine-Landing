import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#10122b] text-white py-4 flex flex-col'>
            <div className='flex flex-col md:flex-row justify-evenly py-11'>
                <div className='flex flex-col'>
                    <span className='text-2xl font-semibold'>Remote Line</span>
                    <span className='text-xl font-semibold text-gray-400'>Software Company</span>
                    <span className=''>Best Software solutions <br /> to take your business <br /> to the next level</span>
                </div>
                <div className='flex flex-col justify-center text-lg font-semibold'>
                    <span>About us</span>
                    <span>Home</span>
                    <span>Contact us</span>
                    <span>Work with us</span>
                    <span>Our services</span>
                </div>
                <div className='flex flex-col justify-center text-lg font-semibold'>
                    <span>About us</span>
                    <span>Home</span>
                    <span>Contact us</span>
                    <span>Work with us</span>
                    <span>Our services</span>
                </div>
            </div>
            <hr className='w-full md:w-auto mx-4 md:mx-10' />
            <div className='flex justify-center py-2'>
                <span>&copy; Copyright 2023 Remote Line</span>
            </div>
        </div>
    )
}

export default Footer