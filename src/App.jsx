import './App.css';
import Spline from '@splinetool/react-spline';
import Navbar from './components/navbar/Navbar';
import MainInfo from './components/mainInfo/MainInfo';
import About from './components/about/About';
import Stats from './components/stats/Stats';
import Guide from './components/guide/Guide';
import Footer from './components/footer/Footer';
import { useEffect } from 'react';

export default function App() {
  const animationUrl = 'https://prod.spline.design/MRH3HYRMZTjVEKDo/scene.splinecode';

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
        <div style={{ height: '100vh', maxHeight: '1220px' }}>
          <div className="landing">
            <MainInfo />
            <Spline id="animation" scene={animationUrl} />
          </div>
        </div>
        <About />
        <Stats />
        <Guide />
      </div>
      <Footer />
    </>
  );
}
