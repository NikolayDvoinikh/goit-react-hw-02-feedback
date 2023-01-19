import PropTypes from 'prop-types';
// import styles from './button.module.scss';

const Button = ({ onClick, type, children }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reser', 'button']),
  children: PropTypes.element.isRequired,
};
