
const Home = () => {
    return (
        <div className="flex flex-col md:flex-row px-4 md:px-10 gap-6">
            <div className="flex items-center md:w-1/2">
                <p className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-500">SOFTWARE DEVELOPMENT SERVICES</span> <br />
                    <span className="text-2xl font-bold"> We serve business and tech leaders building custom software</span> <br />
                    <span className="text-lg">
                        With custom application development expertise in UX Design, Front-end and Back-end implementations our developers and designers can help you execute quickly and ship products faster. We specialize in designing, building, and maintaining distributed multi-tenant, secure, and robust custom software solutions.
                    </span>
                </p>
            </div>
            <div className="flex ml-20 px-4 md:px-10 md:w-1/2">
                <img className="h-96 w-[500px] pt-8 transform -scale-x-100" src={require('../images/home2.webp')} alt='' />
            </div>
        </div>
    )
}

export default Home