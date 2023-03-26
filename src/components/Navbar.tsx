import Banner from '../assets/images/Banner.png'

const Navbar = () => {
    return (
        <div style={{ backgroundImage: `url(${Banner})` }} className='relative flex flex-row bg-sky-900 text-white h-96 px-5'>
            <div className='fixed flex flex-row gap-8 py-6 h-5 cursor-pointer'>
                <span>Home</span>
                <span>About us</span>
                <span>Contact us</span>
                <span>Our Services</span>
            </div>
        </div>
    )
}

export default Navbar