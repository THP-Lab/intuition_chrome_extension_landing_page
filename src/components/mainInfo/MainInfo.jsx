import './MainInfo.css';

export default function MainInfo() {
  return (
    <div className="main-info">
      <div className="demo-intro">See Intuition in action, watch the demo below 👇</div>
      <br></br>  <br></br>
      <div className="video-wrapper">
        
        <iframe
          width="800"
          height="315"
          src="https://www.youtube.com/embed/YJwcXQ3oAWY?si=MrarXUhaKYwG0gc_&controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div >
        <p id="info">
          Augment your web experience with <span>real-time</span> context and <span>insights</span>
        </p>
        <div style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', gap: '45px', justifyContent: 'center' }}>
          <a href="https://github.com/THP-Lab/intuition-chrome-extension">View on GitHub</a>
          <a href="https://analytics.thp.box/share/aCRPIF6X5r9cbf6g/ext.thp-lab.org">
            Public Analytics
          </a>
        </div>

      </div>

      
    </div>
  );
}
