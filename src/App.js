import './styles/app.scss'
import Header ,{HeaderPhone} from './components/Header.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Timeline from './components/Timeline.js'
import Services from './components/Services.js'
import Testimonials from './components/Testimonials.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import { Toaster } from 'react-hot-toast'
import './styles/mediaquery.scss';
import { useState } from 'react'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
   <>
   <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Home />
   <Projects />
   <Timeline />
   <Services />
   <Testimonials />
   <Contact />
   <Footer />
   <Toaster/>
   </>
  );
}

export default App;
