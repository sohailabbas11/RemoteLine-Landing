import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-cyan-300 to-cyan-500'>
            <div className='flex flex-col justify-center items-center pt-14'>
                <span className='text-lg text-gray-500 font-semibold'>Our Locations</span>
                <p className='text-3xl font-semibold'>Becoming Globally <span className='text-blue-500'>Accessible</span> </p>
                <div className='flex flex-col md:flex-row justify-between mx-14'>
                    <div className='flex flex-col justify-center items-center shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                        <span className='text-xl font-semibold text-center'>Main Office</span>
                        <p className='my-4 text-center'>
                            Islamabad, Pakistan <br />
                            Telephone: 00923421464075 <br />
                            Email: info@remoteline.co <br />
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                        <span className='text-xl font-semibold text-center'>Head Office</span>
                        <p className='my-4 text-center'>
                            San Martino In Rio 42018, Italy <br />
                            Telephone: 003905221196639 <br />
                            Email: info@remoteline.co <br />
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                        <span className='text-xl font-semibold text-center'>Follow us</span>
                        <div className='text-4xl flex justify-center gap-6 my-6 cursor-pointer '>
                            <BsInstagram />
                            <BsLinkedin />
                            <BsTwitter />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' text-white py-4 flex flex-col'>
                <hr className='w-full md:w-auto mx-4 md:mx-10' />
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
        </div>
    )
}

export default Footer