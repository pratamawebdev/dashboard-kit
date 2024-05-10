/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const ProtectedRoutesWithConditionRole = ({ children }) => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  if (role === "admin") {
    return <>{children}</>;
  } else {
    return navigate("/tickets");
  }
};

export default ProtectedRoutesWithConditionRole;
