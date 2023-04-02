import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div className='flex bg-[#c5ccce] justify-between py-4 fixed left-0 right-0'>
            <div className='font-bold text-2xl ml-6'>Remote Line</div>
            <ul className='font-semibold mr-6 hidden md:flex gap-6 cursor-pointer'>
                <li className=' hover:text-white'>Home</li>
                <li className=' hover:text-white'>About Us</li>
                <li className=' hover:text-white'>Our Services</li>
                <li className=' hover:text-white'>Contact Us</li>
            </ul>
            <FontAwesomeIcon icon={faBars} className='mr-6 h-6 cursor-pointer hover:text-white md:hidden' />
        </div>
    )
}

export default Header