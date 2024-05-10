import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProfileModal = ({ modalRef }) => {
  const route = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    route("/auth/login");
  };
  return (
    <div
      ref={modalRef}
      className="absolute px-4 py-2 top-20 right-0 w-fit bg-white border border-gray-200 rounded-[6px] shadow-lg"
    >
      <div className="flex items-center justify-center">
        <p
          onClick={handleLogout}
          className="text-nowrap cursor-pointer text-[16px] font-semibold leading-5 tracking-[0.32px] text-danger"
        >
          Keluar
        </p>
      </div>
    </div>
  );
};

export default ProfileModal;
