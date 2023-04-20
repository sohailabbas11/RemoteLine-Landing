import { AiOutlineBars } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='flex bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900 text-slate-300 justify-between py-6 left-0 right-0'>
            <h1 className='font-bold text-2xl ml-6 md:ml-10'>Remote Line</h1>
            <ul className='font-semibold mr-6 md:mr-10 hidden md:flex gap-6 cursor-pointer '>
                <li className=' hover:text-green-600'>Our Services</li>
                <li className=' hover:text-green-600'>Home</li>
                <li className=' hover:text-green-600'>About Us</li>
                <li className=' hover:text-green-600'>Contact Us</li>
            </ul>
            <AiOutlineBars className='mr-6 text-3xl cursor-pointer hover:text-green-600 md:hidden' />
        </div>
    )
}

export default Navbar


