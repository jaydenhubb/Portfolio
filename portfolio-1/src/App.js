import './App.css';
// component import
import About from '../src/components/about/About'
import Header from '../src/components/header/Header'
import Contact from "../src/components/contact/Contact";
import Testimonials from "../src/components/testimonials/Testimonials";
import Footer from "../src/components/footer/Footer";
import Nav from "../src/components/nav/Nav"
import Experiences from "../src/components/experiences/Experiences"
import Services from "../src/components/services/Services";
import Portfolio from "../src/components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      {/* <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      <Contact/>
      <Testimonials />
      <Footer /> */}
    </>
  );
}

export default App;
