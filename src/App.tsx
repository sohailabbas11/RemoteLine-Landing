import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs'
import GetInformation from './components/GetInformation'
import Home from './components/Home'
import Message from './components/Message'
import OurServices from './components/OurServices';
// import Business from './components/Business';
import Customer from './components/Customer';


function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <AboutUs />
      <Message />
      <OurServices />
      <GetInformation />
      {/* <Business /> */}
      <Customer />
      <Footer />
    </div>
  );
}

export default App;