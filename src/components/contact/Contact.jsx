import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Join the discussion</h2>
      <p>Have a question or feedback? Join our community on Discord.</p>
      <a
        href="https://discord.gg/GFQpGTn6"
        target="_blank"
        rel="noopener noreferrer"
        className="discord-button"
      >
         Join us on Discord
      </a>
    </section>
  );
}
