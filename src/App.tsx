import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUs from './components/About'
import GetInformation from './components/GetInformation'
import Home from './components/Home'
import Message from './components/Message'
import OurServices from './components/Services';
// import Business from './components/Business';
import Customer from './components/Customers';


function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <AboutUs />
      <Message />
      <OurServices />
      <Customer />
      <GetInformation />
      {/* <Business /> */}
      <Footer />
    </div>
  );
}

export default App;