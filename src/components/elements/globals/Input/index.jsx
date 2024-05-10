/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { forwardRef, useState } from "react";

const Input = forwardRef(
  (
    { id, name, type, placeholder, className, onChange, value, ...props },
    ref
  ) => {
    return (
      <input
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
const InputWithIcon = forwardRef(
  (
    { id, name, type, placeholder, classname, onChange, value, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
    return (
      <div className="relative flex items-center justify-end w-full gap-2">
        <div onClick={handleShowPassword} className="absolute w-6 h-6 mr-3">
          <img
            src="../images/icon/eye-slash.svg"
            alt="eye slash icon"
            className={`w-6 h-6 ${showPassword ? "hidden" : "block"}`}
          />
          <img
            src="../images/icon/eye.svg"
            alt="eye icon"
            className={`w-6 h-6 ${showPassword ? "block" : "hidden"}`}
          />
        </div>
        <input
          ref={ref}
          id={id}
          name={name}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          className={`pl-3 pr-11 py-2 rounded-lg border-2 w-full border-[F1F2F7] placeholder:text-[#C7C9D3] placeholder:font-medium ${classname}`}
          onChange={onChange}
          value={value}
          {...props}
        />
      </div>
    );
  }
);

InputWithIcon.displayName = "InputWithIcon";

export { Input, InputWithIcon };
