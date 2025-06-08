

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Logo from './components/img/dev_logo.png';
import './styles.css';

function App() {
  return (
    <div className="App">
      <nav className="p-2" class="navbar">
          <img src={Logo} alt="logo" />
      </nav>
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
            <Footer />
    </div>
  );
}
export default App;