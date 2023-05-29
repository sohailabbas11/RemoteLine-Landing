const GetInformation = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-gradient-to-tr from-slate-500 via-slate-300 to-slate-500 md:flex-row px-6 py-6 mx-8 md:mx-14 gap-4 my-6 md:my-20'>
            <div className='md:w-1/2'>
                <p className='text-3xl py-6 font-semibold italic'>Save Your Time And Budget</p>
                <p className=" font-semibold text-lg">Experience the best global tech talent and enjoy the tech world without getting exhausted through the hiring process. Hire an expert developer, designer and an engineer now.</p>
                <p className=" pt-10 font-semibold text-lg">As a product development company, we help business ideate and strategize. iterate, and launch their mobile and web apps while keeping cost, timelines, and objectives in mind.</p>
            </div>
            <div className='md:w-1/2 '>
                <form action="" className='mx-4 my-2 space-y-6 '>
                    <div>
                        <h1 className="font-semibold italic text-2xl ">Ask us About your project</h1>
                        <p className="font-semibold">We will make an estimate and contact you in minimum time period</p>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <div className='w-1/2'>
                            <label htmlFor="Name">Name</label>
                            <input type="text" className='rounded-md border border-gray-600 focus:border-green-950 block py-2 px-4 w-full ' />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="Name">Company Name</label>
                            <input type="text" className='rounded-md border border-gray-600 focus:border-green-950 block py-2 px-4 w-full' />
                        </div>
                    </div>
                    <div className="flex flex-row space-x-3">
                        <div className='w-1/2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" className='rounded-md border border-gray-600 focus:border-green-950 block py-2 px-4 w-full' />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="Telefone">Telefone</label>
                            <input type="text" className='rounded-md border border-gray-600 focus:border-green-950 block py-2 px-4 w-full' />
                        </div>
                    </div>
                    <div className=''>
                        <label htmlFor="message">Message</label>
                        <input type="text" className='h-28 rounded-md border border-gray-600 focus:border-green-950 block py-2 px-4 w-full' />
                    </div>
                    <div>
                        <p className="font-semibold">Privacy Policy</p>
                        <div className="flex justify-around items-center">
                            <input type="checkbox" className="h-4 w-4" />
                            <p >I have readed and accepted the privacy policy</p>
                            <button className=" bg-slate-400 rounded-md text-sm h-8 w-28 cursor-pointer hover:bg-green-800 ">Send Request</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GetInformation