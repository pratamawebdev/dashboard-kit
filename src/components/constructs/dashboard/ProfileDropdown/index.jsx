import { useEffect, useRef, useState } from "react";
import AvatarProfile from "../../../elements/dashboard/AvatarProfile";
import ProfileModal from "../../../elements/dashboard/ProfileModal";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const imgRef = useRef();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !menuRef?.current?.contains(e.target) &&
        !imgRef?.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef, imgRef]);

  return (
    <div className="flex items-center gap-3">
      <AvatarProfile imgRef={imgRef} onClick={() => setOpen(!open)} />
      {open && <ProfileModal modalRef={menuRef} />}
    </div>
  );
};

export default ProfileDropdown;
