import './About.css';

export default function About() {
  return (
    <div className="about hidden" id="about">
      <div style={{ zIndex: '2' }}>
        <h2>
          What is <span>Intuition</span>?
        </h2>
        <p>
          Intuition is a Chrome extension that adds trust and context to your browsing experience.
          See who recommends a page, read insights from real people, and avoid suspicious websites.
          It’s like <span>Community Notes</span>, but for the entire web.
        </p>
      </div>
      <div
        className="lock"
        style={{
          background: `url('${new URL('/src/assets/gradient.svg', import.meta.url)}')`,
        }}
      >
        <img src={new URL('/src/assets/icon.png', import.meta.url)} alt="intuition symbol" />
      </div>
    </div>
  );
}
