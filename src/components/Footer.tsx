import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (

        <div className='py-4 flex bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900 text-slate-200  flex-col'>
            <hr className='w-full md:w-auto mt-10 mx-4 md:mx-10' />
            <div className='flex flex-col justify-evenly font-serif md:flex-row py-6'>
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
                    <span className='cursor-pointer hover:text-green-800'>Mobile Game Development</span>
                    <span className='cursor-pointer hover:text-green-800'>Hire BPO Teams</span>
                    <span className='cursor-pointer hover:text-green-800'>Digital Media Marketing</span>
                    <span className='cursor-pointer hover:text-green-800'>Team Outsourcing</span>
                    <span className='cursor-pointer hover:text-green-800'>UI UX Design</span>
                    <span className='cursor-pointer hover:text-green-800'>E-Commerce Solutions</span>
                    <span className='cursor-pointer hover:text-green-800'>Hire Software Developers</span>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-2xl py-6'>OUR OFFICES</h1>
                    <p> <span className='text-lg font-semibold'>ITALY</span><br />
                        via sandro pertini n.29 <br />
                        42018 San Martino In Rio <br />
                        (RE) Italy
                    </p>
                    <p> <span className='text-lg font-semibold'>PAKISTAN</span> <br />
                        Sector G.8 <br />
                        44000 Islamabad Pakistan<br />
                    </p>
                    <div className='text-4xl flex justify-center gap-6 my-6 cursor-pointer '>
                        <BsInstagram className=' hover:text-green-800' />
                        <BsLinkedin className=' hover:text-green-800' />
                        <BsTwitter className=' hover:text-green-800' />
                    </div>
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
    )
}

export default Footer