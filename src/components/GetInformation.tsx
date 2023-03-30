
const GetInformation = () => {
    return (
        <div className='flex px-14 gap-40 py-14 bg-white'>
            <div className='w-1/2 space-y-6'>
                <p className='text-3xl font-semibold text-blue-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo laudantium alias a asperiores dicta commodi perspiciatis ea dolore doloremque.</p>
                <img className="h-52 w-96 ml-44 -rotate-12" src={require('../images/freccia.jpg')} alt='' />
            </div>
            <div className='w-1/2'>
                <form action="" className='px-4 my-2 space-y-6'>
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
                        <div className="flex flex-row justify-around items-center">
                            <input type="checkbox" className="h-4 w-4" />
                            <p >I have readed and accepted the privacy policy</p>
                            <button className="bg-slate-400 rounded-md text-sm h-8 w-28 cursor-pointer hover:bg-green-800">Send Request</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GetInformation