import React from 'react'
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-slate-200 to-slate-300'>
            <div className='flex flex-col justify-center items-center pt-14'>
                <span className='text-lg text-gray-500 font-semibold'>Our Locations</span>
                <p className='text-3xl font-semibold'>Becoming Globally <span className='text-blue-500'>Accessible</span> </p>
                <div className='flex flex-col md:flex-row justify-between mx-14'>
                    <div className='flex flex-col justify-center items-center shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                        <span className='text-xl font-semibold text-center'>Branch Office</span>
                        <p className='my-4 text-center'>
                            Islamabad, Pakistan <br />
                            Telephone: 00923421464075 <br />
                            Email: info@remoteline.co <br />
                        </p>
                    </div>
                    <div className='flex flex-col justify-center items-center shadow-xl h-60 w-96 rounded-xl my-8 py-4 px-4 '>
                        <span className='text-xl font-semibold text-center'>Main Office</span>
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
            <div className='py-4 flex bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900 text-slate-300  flex-col'>
                <hr className='w-full md:w-auto my-10 mx-4 md:mx-10' />
                <div className='flex flex-col justify-evenly font-serif md:flex-row py-11'>
                    <div className='flex flex-col '>
                        <span className='text-2xl py-6'>COMPANY</span>
                        <span className='cursor-pointer hover:text-green-800'>Home</span>
                        <span className='cursor-pointer hover:text-green-800'>About us</span>
                        <span className='cursor-pointer hover:text-green-800'>Contact us</span>
                        <span className='cursor-pointer hover:text-green-800'>Careers</span>
                        <span className='cursor-pointer hover:text-green-800'>Our services</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl py-6'>SERVICES</span>
                        <span className='cursor-pointer hover:text-green-800'>Web Development</span>
                        <span className='cursor-pointer hover:text-green-800'>Custom Mobile App Development</span>
                        <span className='cursor-pointer hover:text-green-800'>Hire BPO Teams</span>
                        <span className='cursor-pointer hover:text-green-800'>Digital Media Marketing</span>
                        <span className='cursor-pointer hover:text-green-800'>Team Outsourcing</span>
                        <span className='cursor-pointer hover:text-green-800'>UI UX Design</span>
                        <span className='cursor-pointer hover:text-green-800'>E-Commerce Solutions</span>
                        <span className='cursor-pointer hover:text-green-800'>Corporate Branding</span>
                        <span className='cursor-pointer hover:text-green-800'>Hire Software Developers</span>
                        <span className='cursor-pointer hover:text-green-800'>Mobile Game Development</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl py-6'>SOFTWARE & IT <br /> PACKAGES</span>
                        <span className='cursor-pointer hover:text-green-800'>Mobile App Development</span>
                        <span className='cursor-pointer hover:text-green-800'>Web Design And Development</span>
                        <span className='cursor-pointer hover:text-green-800'>E-commerce Solutions</span>
                        <span className='cursor-pointer hover:text-green-800'>Game Development</span>
                        <span className='cursor-pointer hover:text-green-800'>Graphic Design</span>
                        <span className='cursor-pointer hover:text-green-800'>Team OutSourcing</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-2xl py-6'>GET AN ESTIMATED <br /> PROJECT COST</span>
                        <p>Get in touch with us and turn <br /> your project into reality by recieving <br /> an accurate cost estimate.</p>
                        <button className=" bg-teal-700 rounded-md text-sm h-8 w-40 cursor-pointer hover:bg-green-800 my-4">CONTACT US</button>
                    </div>
                </div>
                <hr className='w-full md:w-auto mx-4 md:mx-10' />
                <div className='flex justify-center py-2'>
                    <span>&copy; 2020 - 2023 Remote Line. All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer