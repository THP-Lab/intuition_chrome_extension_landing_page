import './App.css';
import Navbar from './components/navbar/Navbar';
import MainInfo from './components/mainInfo/MainInfo';
import About from './components/about/About';
import Guide from './components/guide/Guide';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';
import Contact from './components/contact/Contact';
import EyeShowcase from './components/eyeShowcase/EyeShowcase';
import Team from './components/team/Team';
import SupportUs from './components/support/SupportUs';




export default function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('show');
        } else {
          e.target.classList.remove('show');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  });
  return (
    <>
      <Navbar />
    
    
      <div className="column">
        <div style={{ height: '1000vh', maxHeight: '1220px' }}>
          <div className="landing">
            <MainInfo />
            <EyeShowcase />
          </div>
        </div>
      
        <About />
        <Guide />
        
      </div>
      <Contact />
      <Team />
      <SupportUs />
      <Footer />
    </>
  );
}
