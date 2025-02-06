import React from 'react';

const Button = ({ label, onClick, className, style, type = 'button', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className}`} // Apply custom class and default 'btn' class
      style={style}
      disabled={disabled} // Disable the button if 'disabled' is true
    >
      {label}
    </button>
  );
};

export default Button;
