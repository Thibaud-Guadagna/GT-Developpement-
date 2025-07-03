import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Projets from '../components/Projects';

import Footer from '../components/Footer'

import './main';

function App() {
  return (
    <div className='lg:mx-20'>
      <Header />
      <About />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
