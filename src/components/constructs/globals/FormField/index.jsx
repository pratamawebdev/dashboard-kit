/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Input, InputWithIcon } from "../../../elements/globals/Input";
import Label from "../../../elements/globals/Label";
import { forwardRef } from "react";

const FormField = forwardRef(
  (
    {
      children,
      htmlFor,
      id,
      classNameLabel,
      name,
      type = "text",
      placeholder,
      classNameInput,
      onChange,
      value,
      isInputCustom = false,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <Label htmlFor={htmlFor} id={id} className={classNameLabel}>
            {children}
          </Label>
          {isInputCustom && (
            <Link
              to={"/auth/forgot-password"}
              className="text-[#C9CAD5] text-sm font-medium"
            >
              Forgot password?
            </Link>
          )}
        </div>
        {isInputCustom ? (
          <InputWithIcon
            ref={ref}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            classname={classNameInput}
            onChange={onChange}
            value={value}
          />
        ) : (
          <Input
            ref={ref}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            className={classNameInput}
            onChange={onChange}
            value={value}
          />
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
