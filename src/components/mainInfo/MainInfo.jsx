import './MainInfo.css';

export default function MainInfo() {
  return (
    <div className="main-info">
      <h1>
        FUTURE <br /> IS <span id="now">NOW</span>
      </h1>
      <p id="info">
        We released <span>futuristic</span> and <span>secure</span> auth method!
      </p>
      <div style={{ marginTop: '30px', display: 'flex' }}>
        <a href="#">Check out</a>
        <a href="#">Docs</a>
      </div>
    </div>
  );
}
