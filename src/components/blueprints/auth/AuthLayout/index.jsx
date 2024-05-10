/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AuthLayout = ({ title, children, type }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#363740]">
      <div className="bg-[#FFFFFF] px-8 py-8 rounded-md w-[90%] sm:w-[80%] md:w-[60%] lg:w-[30%]">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col items-center gap-3">
            <img src="/images/logo/logo.png" alt="logo" />
            <h1 className="text-[#BFC1CA] font-medium tracking-wider">
              Dashboard Kit
            </h1>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-[#2A2C38] text-2xl font-semibold">
              {title} to Dashboard Kit
            </h2>
            <p className="text-[#B6B9C6] text-sm font-medium">
              Enter your email and password below
            </p>
          </div>
        </div>
        <div className="mt-12">{children}</div>
        <div className="mt-4">
          <OptionNavigation type={type} />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

const OptionNavigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-[#CACCD6] text-center font-medium">
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-[#3751FF]">
          Sign Up
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="text-[#CACCD6] text-center font-medium">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-[#3751FF]">
          Sign In
        </Link>
      </p>
    );
  } else {
    return;
  }
};
