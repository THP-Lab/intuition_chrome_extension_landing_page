import './Guide.css';

export default function Guide() {
  return (
    <div style={{ marginTop: '120px' }}>
     
      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/body.svg', import.meta.url)} alt="Problem icon" />
        </div>
        <p className="description">
          <span>The web is broken.</span> Misinformation, scams, and biased content flood our daily browsing. Traditional tools are centralized, passive, and not built for collaboration.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

   
      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/scan.svg', import.meta.url)} alt="Solution icon" />
        </div>
        <p className="description">
          <span>Intuition changes the game.</span> It adds trust and insight into your browser using collective knowledge and contextual data — in real time.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

      
      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/checkmark.svg', import.meta.url)} alt="Tech icon" />
        </div>
        <p className="description">
          <span>Powered by modern tools.</span> React, TypeScript, GraphQL, and Plasmo come together to build a smooth, scalable, open-source experience.
        </p>
      </div>
    </div>
  );
}
