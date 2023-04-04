
const Home = () => {
    return (

        <div style={{ backgroundImage: `url(${require('../images/bg.jpg')})` }}
            className='bg-cover h-96 opacity-30 '>
            <div className="flex px-4 md:w-1/2">
                <p className="text-lg font-semibold py-4 px-4 md:px-10">
                    <span className="text-2xl font-bold text-black">
                        Our Software Services are - exceptional, <br /> reliable and scalable. <br /><br />
                    </span>
                    We’ve provided exceptional software teams to some of the world’s best technology businesses.
                    Over the years, we’ve designed and built various complex software platforms for different industries and partnered with some of the most ambitious founders & operators on their startup journey.
                </p>
            </div>
        </div>


    )
}

export default Home