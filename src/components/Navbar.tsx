import { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900 text-slate-300 justify-between py-6 left-0 right-0'>
            <h1 className='font-bold text-2xl ml-6 sm:ml-10'>Remote Line</h1>
            <ul className='font-semibold mr-6 sm:mr-10 hidden sm:flex gap-6 cursor-pointer '>
                <li className=' hover:text-green-600'>Home</li>
                <li className=' hover:text-green-600'>About Us</li>
                <li className=' hover:text-green-600'>Our Services</li>
                <li className=' hover:text-green-600'>Pricing</li>
                <li className=' hover:text-green-600'>Contact Us</li>
                <li className=' hover:text-green-600'>Hosting Services</li>
            </ul>
            <AiOutlineBars
                className='mr-6 text-3xl cursor-pointer hover:text-green-600 sm:hidden'
                onClick={() => setOpen(!open)}
            />
            {open &&
                <div className='flex flex-col gap-2 p-6 mt-10 absolute right-0 bg-slate-900 rounded-md'>
                    <ul className='text-white cursor-pointer'>
                        <li className=' hover:text-green-600'>Home</li>
                        <li className=' hover:text-green-600'>About Us</li>
                        <li className=' hover:text-green-600'>Our Services</li>
                        <li className=' hover:text-green-600'>Pricing</li>
                        <li className=' hover:text-green-600'>Contact Us</li>
                        <li className=' hover:text-green-600'>Careers</li>
                        <li className=' hover:text-green-600'>Hosting Services</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Navbar


