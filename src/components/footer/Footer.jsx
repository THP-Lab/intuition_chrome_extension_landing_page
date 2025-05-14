import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <h1>
          Intuition Chrome-Extension<span> 2025</span>
        </h1>
        <div id="socials">
          <img src={new URL('/src/assets/socialMediaIcons/github.svg', import.meta.url)} alt="Github icon" />
          <a href="https://github.com/THP-Lab/intuition-chrome-extension">Gituhub</a>
          
        
          <img src={new URL('/src/assets/socialMediaIcons/twitterX.svg', import.meta.url)} alt="X icon" />
          <a href="https://x.com/0xIntuition">Twitter</a>
        </div>
        <div id="links">
         
          <a href="https://www.intuition.systems/">Docs</a>
         
          <a href="#contact">Contact</a>
          <a href="https://github.com/THP-Lab/intuition-chrome-extension/releases">Try now</a>
        
        </div>
      </div>
    </footer>
  );
}
