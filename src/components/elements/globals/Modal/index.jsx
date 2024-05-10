/* eslint-disable react/prop-types */
import IconCircleXmark from "../icons/iconCircleXmark";

const Modal = ({ open, onClose, children, title }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl w-[90%] sm:w-[60%] max-h-[50%] md:w-[60%] md:max-h-none lg:w-[40%] shadow p-6 transition-all overflow-y-auto md:overflow-y-hidden ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-black">{title}</span>
          <span onClick={onClose} className="cursor-pointer">
            <IconCircleXmark />
          </span>
        </div>

        <div className="flex w-full mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
