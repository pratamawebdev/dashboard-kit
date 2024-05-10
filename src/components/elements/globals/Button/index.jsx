/* eslint-disable react/prop-types */

const Button = (props) => {
  const {
    type = "button",
    className,
    children,
    onClick,
    disabled = false,
  } = props;
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
