/* eslint-disable react/prop-types */

const AvatarProfile = ({ imgRef, onClick }) => {
  const avatar = localStorage.getItem("avatar");
  const name = localStorage.getItem("name");

  return (
    <div className="flex items-center gap-2">
      <span className="leading-[21px] text-default text-[14px] dark:text-[#3751FF] font-medium">
        {name || "Example"}
      </span>

      <img
        ref={imgRef}
        onClick={onClick}
        src={
          avatar ||
          "https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg"
        }
        alt="User"
        className="object-cover w-10 h-10 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default AvatarProfile;
