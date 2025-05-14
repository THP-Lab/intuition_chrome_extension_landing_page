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
          <a href="https://analytics.thp.box/share/aCRPIF6X5r9cbf6g/ext.thp-lab.org">
            Public Analytics
          </a>
        </div>

      </div>

      
    </div>
  );
}
