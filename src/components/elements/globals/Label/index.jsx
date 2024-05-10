/* eslint-disable react/prop-types */
const Label = (props) => {
  const { htmlFor, id, className, children } = props;
  return (
    <label htmlFor={htmlFor} id={id} className={className}>
      {children}
    </label>
  );
};

export default Label;
