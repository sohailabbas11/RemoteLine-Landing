import React from 'react'

const GetInformation = () => {
    return (
        <div className='flex px-14 gap-40 py-14 bg-green-300'>
            <div className='w-1/2'>
                <p className='text-3xl font-semibold text-blue-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo laudantium alias a asperiores dicta commodi perspiciatis ea dolore doloremque.</p>
                <p className='text-xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ipsam enim maiores in? Reiciendis odio laboriosam ipsa porro accusamus cupiditate facere debitis quasi repudiandae suscipit! Nihil nostrum dignissimos debitis officiis doloribus! Fugit libero sint quasi, repellendus error sunt blanditiis ratione.</p>
            </div>
            <div className='w-1/2'>
                <form action="contact" className='flex flex-col gap-y-6'>
                    <div className='flex flex-row h-10'>
                        <label htmlFor="Name">Name</label>
                        <input type="text" className='rounded-md ' />
                        <label htmlFor="Name">Company Name</label>
                        <input type="text" className='rounded-md' />
                    </div>
                    <div className='flex flex-row h-10'>
                        <label htmlFor="email">Email</label>
                        <input type="email" className='rounded-md' />
                        <label htmlFor="Telefone">Telefone</label>
                        <input type="text" className='rounded-md' />
                    </div>
                    <div className=''>
                        <label htmlFor="message">Message</label>
                        <input type="text" className='rounded-md' />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default GetInformation