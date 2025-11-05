import { useAuth } from "../context/AuthContext";
import { logout } from "../utils/auth";

function Navbar() {
  const { authenticated, setAuthenticated } = useAuth();

  if (!authenticated) return null;

  const handleLogout = () => {
    logout(setAuthenticated);
  };

  return (
    <div className="h-[72px] bg-white shadow-[0_3px_6px_rgba(0,0,0,0.16)] flex justify-between px-6 md:px-40">
      <div className="flex justify-center items-center">
        <div className="flex">
          <img
            src="profile-img.png"
            alt="profile-img"
            width={48}
            height={48}
          />
          <div className="flex justify-center items-center ml-4">
            <p className="text-base/[19px]">Ali</p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={handleLogout}
      >
        <p className="text-base/[19px]">Logout</p>
      </div>
    </div>
  );
}

export default Navbar;
