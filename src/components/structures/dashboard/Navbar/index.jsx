import { useTranslation } from "react-i18next";
import useColorMode from "../../../../hooks/useColorMode";
import ProfileDropdown from "../../../constructs/dashboard/ProfileDropdown";
import Button from "../../../elements/globals/Button";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Navbar = ({ toggleSidebar, titleNavbar }) => {
  const [colorMode, setColorMode] = useColorMode();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  function changeLanguage(e) {
    const code = e.target.value;

    if (i18n.language !== code) {
      i18n.changeLanguage(code);
      setLanguage(code);
    }
  }
  return (
    <div className="z-30 flex items-center dark:bg-[#181818] justify-between w-full px-6 py-9 bg-[#F7F8FC] max-w-full">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          type="button"
          className="text-lg text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 dark:text-[#3751FF]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <h1 className="text-xl font-semibold dark:text-white">{titleNavbar}</h1>
      </div>
      <ul className="flex items-center gap-1 sm:gap-8">
        <li className="items-center hidden gap-1 md:flex">
          <select
            name="language"
            id="language"
            onChange={changeLanguage}
            className="bg-[#F7F8FC]"
            defaultValue={language}
          >
            <option value="en">English</option>
            <option value="id">Indonesia</option>
          </select>
        </li>
        <li>
          <div
            className="hidden cursor-pointer p-1 text-[1.3rem] dark:text-white lg:flex text-darkColor"
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
          >
            {colorMode === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </div>
        </li>
        <li>
          <Button type="button" className="hidden md:flex">
            <img
              src="../images/icon/magnifying-glass.svg"
              alt="search icon"
              className="w-6 h-6"
            />
          </Button>
        </li>
        <li>
          <Button type="button" className="relative hidden md:flex">
            <div className="bg-[#3751FF] min-w-2 max-w-2 h-2 rounded-full absolute right-1" />
            <img
              src="../images/icon/bell.svg"
              alt="bell icon"
              className="w-6 h-6"
            />
          </Button>
        </li>
        <li>
          <div className="w-[2px] h-6 bg-gray-300 hidden md:flex" />
        </li>
        <li>
          <ProfileDropdown />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
