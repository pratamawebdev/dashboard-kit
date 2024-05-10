import { Link } from "react-router-dom";
import SidebarList from "../../../constructs/dashboard/SidebarList";
import { menuSidebar } from "../../../../data";

/* eslint-disable react/prop-types */
const Sidebar = ({ isSidebarOpen, handleCloseSidebar }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full  transition-transform bg-[#363740] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link
          to="/"
          className="flex items-center justify-center px-4 py-10 border-b-gray-800"
        >
          <img
            src="../images/logo/logo.png"
            alt=""
            className="object-cover w-8 h-8 rounded"
          />
          <span className="ml-3 text-lg font-bold text-[#81838F]">
            Dashboard Kit
          </span>
        </Link>
        <div className="flex flex-col gap-8 mt-8">
          <SidebarList data={menuSidebar} initialLimit={0} deadline={6} />
          <div className="w-full h-[1px] bg-[#81838F]" />
          <SidebarList data={menuSidebar} initialLimit={6} deadline={8} />
        </div>
      </div>
      <div
        onClick={handleCloseSidebar}
        className={`fixed top-0 left-0 z-40 w-full h-full bg-black/50 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
    </>
  );
};

export default Sidebar;
