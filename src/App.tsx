import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import GetInformation from './components/GetInformation'
import Home from './components/Home'
import Message from './components/Message'
import Testimonials from './components/testimonials';


function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <AboutUs />
      <GetInformation />
      <Testimonials />
      <Message />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
