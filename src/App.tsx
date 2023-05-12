import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs'
import GetInformation from './components/GetInformation'
import Home from './components/Home'
import Message from './components/Message'
import OurServices from './components/OurServices';
import Business from './components/Business';


function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Business />
      <AboutUs />
      <Message />
      <OurServices />
      <GetInformation />
      <Footer />
    </div>
  );
}

export default App;