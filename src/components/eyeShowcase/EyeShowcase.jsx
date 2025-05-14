import EyeComponent from '../../components/3D/EyeComponent';
import './EyeShowcase.css';

export default function EyeShowcase() {
  return (
    <section className="eye-showcase">
      <div className="eye-wrapper">
        <EyeComponent />
        <a
          href="https://github.com/THP-Lab/intuition-chrome-extension/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="eye-button"
        >
          Try me now!
        </a>
      </div>
    </section>
  );
}
