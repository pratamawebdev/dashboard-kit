import { Link, useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */
const SidebarList = ({ data, initialLimit, deadline }) => {
  const pathname = useLocation().pathname;
  return (
    <ul>
      {data?.slice(initialLimit, deadline).map((item) => {
        const isActive = pathname === item.path;
        return (
          <li key={item.id} className="mb-1">
            <Link
              to={item.path}
              className={`flex items-center px-8 py-2 ${
                isActive && "border-l-2 border-[#DDE2FF] bg-white bg-opacity-5"
              }`}
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="w-6 mr-6"
              />
              <span
                className={`text-md  ${
                  isActive ? "text-white" : "text-[#A2A4B1]"
                }`}
              >
                {item.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarList;
