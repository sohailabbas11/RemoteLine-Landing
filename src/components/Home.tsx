
const Home = () => {
    return (
        <div className='bg-[rgb(209,199,183)] px-4 md:px-10 py-4 md:flex'>
            <div className="flex flex-col mt-20 px-4 md:w-1/2">
                <p className="text-2xl font-semibolds"> Welcome to our software house, where we bring your ideas to life!</p>
                <p className="font-medium py-4">
                    We specialize in developing full stack web and mobile applications that are tailored to your specific needs. Our team of experienced developers and designers are dedicated to crafting high-quality solutions that will enhance your business and engage your users. <br />
                    With our cutting-edge technologies and innovative ideas, we can help you take your business to the next level. Whether you need a new website, a custom mobile app, or a complete software solution, we have the expertise to deliver outstanding results. <br />
                    At our software house, we are committed to providing exceptional service and support to our clients. We understand that every project is unique, and we work closely with you to ensure that your vision is realized. <br />
                    If you're looking for a reliable partner to help you achieve your business goals, look no further than our software house. Contact us today to discuss your project and discover how we can help you succeed!
                </p>
            </div>
            <div className="md:w-1/2 md:flex">
                <img className="rounded-md" src={require('../images/marvin.jpg')} alt='' />
            </div>

        </div>
    )
}

export default Home