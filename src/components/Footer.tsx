import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#c6c7d6] py-4 flex flex-col'>
            <hr className='w-full md:w-auto mx-10' />
            <div className='flex flex-row justify-between px-6 my-6'>
                <pre>Remote Line - via s.pertini,29, 42018 - San Martino In Rio RE  info@remoteline.co  P.IVA-03007100351</pre>
                <span>Privacy Policy - Cookie Policy</span>
            </div>
            <div className='flex justify-center py-2'>
                <span>&copy; Copyright 2023 Remote Line</span>
            </div>
        </div>
    )
}

export default Footer