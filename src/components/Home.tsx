
const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="flex before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900 relative my-10 p-5">
                <div className="relative w-1/3 ">
                    <img className="w-72 h-72 " src={require('../images/about.png')} alt='' />
                </div>
                <div className="relative w-2/3 text-slate-300">
                    <p className="flex justify-center items-center flex-col">
                        <span className="flex text-center text-4xl font-semibold italic pt-8"> We Serve Business And Tech Leaders Building Custom Software</span> <br />
                        <p className="flex justify-center text-center px-4 md:px-40 text-2xl">
                            With custom application development expertise in UX Design, Front-end and Back-end implementations our developers and designers can help you execute quickly and ship products faster. We specialize in designing, building, and maintaining distributed multi-tenant, secure, and robust custom software solutions.
                        </p>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Home