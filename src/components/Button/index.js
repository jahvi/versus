import React from 'react';

function Button({ children, onClick }) {
  const _onClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <a href="#" className="Button" onClick={_onClick}>
      {children}
    </a>
  );
}

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Button;
