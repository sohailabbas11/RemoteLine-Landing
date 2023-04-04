
const Home = () => {
    return (
        <div
            style={{ backgroundImage: `url(${require('../images/bg.jpg')})` }}
            className='bg-cover h-96 opacity-30 ' >
            <div className="flex px-4 md:w-1/2">
                <p className="text-lg font-semibold py-4 px-4 md:px-10">
                    We specialize in developing full stack web and mobile applications that are tailored to your specific needs. Our team of experienced developers and designers are dedicated to crafting high-quality solutions that will enhance your business and engage your users. <br />
                    With our cutting-edge technologies and innovative ideas, we can help you take your business to the next level. Whether you need a new website, a custom mobile app, or a complete software solution, we have the expertise to deliver outstanding results. <br />
                </p>
            </div>
        </div >
    )
}

export default Home