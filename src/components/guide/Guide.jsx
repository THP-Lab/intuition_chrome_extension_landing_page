import './Guide.css';

export default function Guide() {
  return (
    <div style={{ marginTop: '120px' }}>
      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/scan.svg', import.meta.url)} alt="" />
        </div>
        <p className="description">
          <span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/body.svg', import.meta.url)} alt="" />
        </div>
        <p className="description">
          <span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard.
        </p>
      </div>

      <div className="line" style={{ transform: 'rotate(180deg)' }}></div>
      <div className="line"></div>

      <div className="step hidden">
        <div className="iconWrapper">
          <img src={new URL('/src/assets/checkmark.svg', import.meta.url)} alt="" />
        </div>
        <p className="description">
          <span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry&apos;s standard.
        </p>
      </div>
    </div>
  );
}
