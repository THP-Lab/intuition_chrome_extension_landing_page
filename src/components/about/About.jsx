import './About.css';

export default function About() {
  return (
    <div className="about hidden" id="about">
      <div style={{ zIndex: '2' }}>
        <h2>
          What is <span>Intuition</span>?
        </h2>
        <p>
        Intuition is a Web3 platform that empowers users by allowing them to create, share, and access  <span> decentralized reputation data </span> to better assess the credibility of online information. <br></br><br></br>

The Intuition Chrome Extension is a tool that connects users to Intuition’s Knowledge Graph, enabling them to view real-time reputation data on web content, follow the judgments of trusted sources, and actively contribute to building this layer of trust.
          
        </p>
      </div>
      <div
        className="lock"
        style={{
          background: `url('${new URL('/src/assets/gradient.svg', import.meta.url)}')`,
        }}
      >
        <img src={new URL('/src/assets/i7n.gif', import.meta.url)} alt="intuition symbol" />
      </div>
    </div>
  );
}
