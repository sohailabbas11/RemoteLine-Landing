import React from 'react'

const GetInformation = () => {
    return (
        <div className='flex flex-row px-14 py-14 bg-green-300'>
            <div>
                <p className='text-3xl font-semibold text-blue-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo laudantium alias a asperiores dicta commodi perspiciatis ea dolore doloremque.</p>
                <p className='text-xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ipsam enim maiores in? Reiciendis odio laboriosam ipsa porro accusamus cupiditate facere debitis quasi repudiandae suscipit! Nihil nostrum dignissimos debitis officiis doloribus! Fugit libero sint quasi, repellendus error sunt blanditiis ratione.</p>
            </div>
            <div className='flex'>
                <form action="contact" className=''>
                    <label htmlFor="Name">Name</label><br />
                    <input type="text" className='rounded-md' />
                    <label htmlFor="Name">Company Name</label><br />
                    <input type="text" className='rounded-md' />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" className='rounded-md' />
                    <label htmlFor="Telefone">Telefone</label><br />
                    <input type="text" className='rounded-md' />
                    <label htmlFor="message">Message</label><br />
                    <input type="text" className='rounded-md' />
                </form>
            </div>
        </div>
    )
}

export default GetInformation