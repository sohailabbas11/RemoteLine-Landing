import React from 'react'

const Header = () => {
    return (
        <div className='flex bg-slate-500 justify-between py-8'>
            <div className='font-bold text-2xl ml-6'>Remote Line</div>
            <div className='font-semibold mr-6 flex flex-row gap-6 cursor-pointer'>
                <span className=' hover:text-white'>Home</span>
                <span className=' hover:text-white'>About Us</span>
                <span className=' hover:text-white'>Contact Us</span>
            </div>
        </div>
    )
}

export default Header