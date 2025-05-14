import './Team.css';

export default function Team() {
  return (
    <section className="team-section">
      <h2>The Team</h2>
      <div className="team-grid">

        <a href="https://www.linkedin.com/in/jeremie-olivier/" target="_blank" rel="noopener noreferrer" className="member">
          <img src={new URL('/src/assets/team/zet.png', import.meta.url)}  alt="Zet" />
          <h3>Zet</h3>
        </a>
        <a href="https://www.linkedin.com/in/alexe-marichal-741485115/" target="_blank" rel="noopener noreferrer" className="member">
          <img src={new URL('/src/assets/team/Alexe.png', import.meta.url)} alt="Alexe" />
          <h3>Alexe</h3>
        </a>
        <a href="https://www.linkedin.com/in/paul-moulin-4b130232b/" target="_blank" rel="noopener noreferrer" className="member">
          <img src={new URL('/src/assets/team/paul.png', import.meta.url)} alt="Paul" />
          <h3>Paul</h3>
        </a>
        <a href="https://www.linkedin.com/in/james-barthee-386a5913b/" target="_blank" rel="noopener noreferrer" className="member">
          <img src={new URL('/src/assets/team/james.png', import.meta.url)} alt="James" />
          <h3>James</h3>
        </a>
        <a href="https://www.linkedin.com/in/zaineb-padilla-7415a25a/" target="_blank" rel="noopener noreferrer" className="member">
          <img src={new URL('/src/assets/team/zaineb.png', import.meta.url)} alt="Zaineb" />
          <h3>Zaineb</h3>
        </a>
        <a href="https://www.linkedin.com/in/luc-ramassamy-5b8926201/" target="_blank" rel="noopener noreferrer" className="member">
          <img src={new URL('/src/assets/team/luc.png', import.meta.url)} alt="Luc" />
          <h3>Luc</h3>
        </a>
      </div>
    </section>
  );
}
