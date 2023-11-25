import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <h1>
          Nextio<span> 2023</span>
        </h1>
        <div id="socials">
          <img src="src/assets/socialMediaIcons/github.svg" alt="Github icon" />
          <a href="#">Gituhub</a>
          <img src="src/assets/socialMediaIcons/facebook.svg" alt="Facebook icon" />
          <a href="#">Facebook</a>
          <img src="src/assets/socialMediaIcons/instagram.svg" alt="Instagram icon" />
          <a href="#">Instagram</a>
          <img src="src/assets/socialMediaIcons/twitterX.svg" alt="TwitterX icon" />
          <a href="#">Twitter</a>
        </div>
        <div id="links">
          <a href="#">Privacy</a>
          <a href="#">Docs</a>
          <a href="#">Policy</a>
          <a href="#">Contact</a>
          <a href="#">Try now</a>
          <a href="#">Regulation</a>
        </div>
      </div>
    </footer>
  );
}
