import './Stat.css';
import PropTypes from 'prop-types';

function Stat({ text }) {
  return (
    <div className="stat">
      <p className="hidden">{text}</p>
      <div className="short bar"></div>
    </div>
  );
}

Stat.propTypes = {
  text: PropTypes.string,
};

export default Stat;
