/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../../../structures/dashboard/Navbar";
import Sidebar from "../../../structures/dashboard/Sidebar";

const DashboardLayout = ({ titleNavbar, children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar
        ref={null}
        isSidebarOpen={isSidebarOpen}
        handleCloseSidebar={() => setIsSidebarOpen(false)}
      />
      <div
        className={`bg-gray-50 min-h-screen transition-all main ${
          isSidebarOpen ? "md:ml-64" : "ml-0 w-full"
        }`}
      >
        <Navbar
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          titleNavbar={titleNavbar}
        />
        <div className="min-h-screen p-6 dark:bg-[#181818]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
