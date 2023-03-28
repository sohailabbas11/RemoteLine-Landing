import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import GetInformation from './GetInformation'
import Home from './Home'
import OurServices from './OurServices'

const Main = () => {
    return (
        <div className='bg-slate-300 h-screen'>
            <Home />
            <AboutUs />
            <OurServices />
            <GetInformation />
            <ContactUs />
        </div>
    )
}

export default Main