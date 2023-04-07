
const Home = () => {
    return (

        // <div style={{ backgroundImage: `url(${require('../images/bg.jpg')})` }}
        //     className='bg-cover h-96 opacity-30 relative'>
        //     <div className="flex px-4 md:w-1/2">
        //         <p className="text-lg font-semibold py-4 px-4 md:px-10">
        //             <span className="text-2xl font-bold text-black">
        //                 Our Software Services are exceptional, <br /> reliable and scalable. <br /><br />
        //             </span>
        //             We’ve provided exceptional software teams to some of the world’s best technology businesses.
        //             Over the years, we’ve designed and built various complex software platforms for different industries and partnered with some of the most ambitious founders & operators on their startup journey.
        //         </p>
        //     </div>
        // </div>

        <div className="w-full">
            <img className="w-full h-96 object-cover opacity-20" src={require('../images/bg.jpg')} alt='' />
            <div className="flex justify-center absolute top-28 px-4 md:px-10 md:w-1/2">
                <p className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-500">SOFTWARE DEVELOPMENT SERVICES</span> <br />
                    <span className="text-2xl font-bold"> We serve business and tech leaders building custom software</span> <br />
                    <span className="text-lg">
                        With custom application development expertise in UX Design, Front-end and Back-end implementations our developers and designers can help you execute quickly and ship products faster. We specialize in designing, building, and maintaining distributed multi-tenant, secure, and robust custom software solutions.
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Home