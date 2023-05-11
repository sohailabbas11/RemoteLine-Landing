
const Home = () => {
    return (
        <div className="flex flex-col bg-gradient-to-tr from-sky-200 via-sky-50 to-sky-200">
            <div className="flex justify-center items-center">
                <img className="pt-10" src={require('../images/about.png')} alt='' />
                <p className="flex justify-center items-center flex-col">
                    <span className="text-4xl font-bold pt-8"> We Serve Business And Tech Leaders Building Custom Software</span> <br />
                    <p className="flex justify-center text-center px-4 md:px-40 text-2xl font-semibold">
                        With custom application development expertise in UX Design, Front-end and Back-end implementations our developers and designers can help you execute quickly and ship products faster. We specialize in designing, building, and maintaining distributed multi-tenant, secure, and robust custom software solutions.
                    </p>
                </p>
            </div>
            <div>
                <img className="pt-10" src={require('../images/head.png')} alt='' />
            </div>
            <img className="pt-10" src={require('../images/vision.jpeg')} alt='' />
        </div>
    )
}

export default Home