
const GetInformation = () => {
    return (
        <div>
            <p className="text-lg font-semibold px-4 md:px-28 text-center pt-4 md:pt-14">
                <span className="flex justify-center text-center text-4xl md:px-40 font-bold text-black">
                    Our Software Services are exceptional,<br /> reliable and scalable. <br /> <br />
                </span>
                We’ve provided exceptional software teams to some of the world’s best technology businesses.
                Over the years, we’ve designed and built various complex software platforms for different industries and partnered with some of the most ambitious founders & operators on their startup journey.
            </p>
            <div className="px-4 md:px-10 py-8 space-y-6">
                <div className="flex flex-col md:flex-row justify-between space-y-6">
                    <div className="flex flex-col justify-center items-center px-6 py-4 h-64 w-96 rounded-lg">
                        <span className="text-xl font-semibold"> Web Development</span> <br />
                        We carry more than just good coding skills. Our experience makes us stand out from other web development.
                    </div>
                    <div className="flex flex-col justify-center items-center px-6 py-4 h-64 w-96 rounded-lg">
                        <span className="text-xl font-semibold">Mobile Development</span> <br />
                        Create complex enterprise software, ensure reliable software integration, modernise your legacy system.
                    </div>
                    <div className="flex flex-col justify-center items-center px-6 py-4 h-64 w-96 rounded-lg">
                        <span className="text-xl font-semibold">UI/UX Design</span> <br />
                        Build the product you need on time with an experienced team that uses a clear and effective design process.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between space-y-6">
                    <div className="flex flex-col justify-center items-center px-6 py-4 h-64 w-96 rounded-lg">
                        <span className="text-xl font-semibold">QA & Testing</span> <br />
                        Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.
                    </div>
                    <div className="flex flex-col justify-center items-center px-6 py-4 h-64 w-96 rounded-lg">
                        <span className="text-xl font-semibold">IT Counsultancy</span> <br />
                        Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.
                    </div>
                    <div className="flex flex-col justify-center items-center px-6 py-4 h-64 w-96 rounded-lg">
                        <span className="text-xl font-semibold">Digital Media Marketing</span> <br />
                        Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row px-4 md:px-10 gap-40 py-4 md:py-14'>
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
        </div>
    )
}

export default GetInformation