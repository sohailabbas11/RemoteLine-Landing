
const GetInformation = () => {
    return (
        <div className='flex flex-col md:flex-row px-4 md:px-10 gap-40 py-4 md:py-14'>
            <div className='md:w-1/2 space-y-6'>
                <p className='text-3xl font-semibold text-blue-600'>Save Your Time And Budget</p>
                <p className="text-gray-500">
                    Experience the best global tech talent and enjoy the tech world without getting exhausted through the hiring process. Hire an expert developer, designer and an engineer now.</p>
                <img className=" h-52 w-96 ml-44 -rotate-12" src={require('../images/freccia.jpg')} alt='' />
            </div>
            <div className='md:w-1/2 p-4 rounded-xl shadow-xl'>
                <form action="" className='mx-4 my-2 space-y-6 '>
                    <div>
                        <h1 className="font-bold text-2xl">Ask us About your project</h1>
                        <p className="font-semibold">We will make a prenventivo and contact you in minimum time period</p>
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