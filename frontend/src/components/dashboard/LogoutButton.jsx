import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function LogoutButton() {
  const navigate = useNavigate();

  const { logout } = useAuth();

 const handleLogout = () => {
  logout();

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/login");
};

  return (
    <button
      onClick={handleLogout}
      className="
        px-4
        py-2
        bg-red-500
        hover:bg-red-600
        text-white
        rounded-xl
        font-medium
      "
    >
      Logout
    </button>
  );
}

export default LogoutButton;