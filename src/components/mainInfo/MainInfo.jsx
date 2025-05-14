import './MainInfo.css';

export default function MainInfo() {
  return (
    <div className="main-info">
      <h1>
        <span id="now">INTUITION</span> CHROME <br /> EXTENSION
      </h1>
      <div >
        <p id="info">
          Augment your web experience with <span>real-time</span> context and <span>insights</span>
        </p>
        <div style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '45px', justifyContent: 'center' }}>
          <a href="https://devfolio.co/projects/intuition-chromeextention-afea">Hackathon participation</a>
          <a href="https://github.com/THP-Lab/intuition-chrome-extension">View on GitHub</a>
          <a href="https://analytics.thp.box/teams/a6a72ae2-b197-40da-84c9-13cc48b5d2ea/websites/652ad704-1d96-4d7f-877d-c409dc867a5c">
            Public Analytics
          </a>
        </div>

      </div>

      
    </div>
  );
}
