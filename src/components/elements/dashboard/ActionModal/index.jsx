import IconCircleXmark from "../../globals/icons/iconCircleXmark";

/* eslint-disable react/prop-types */
const ActionModal = ({ onClose, children, classname }) => {
  return (
    <div className={`absolute  z-50 flex  ${classname}`}>
      <div className="relative min-w-[100px] md:min-w-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl">
        <div
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-2"
        >
          <IconCircleXmark />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ActionModal;
