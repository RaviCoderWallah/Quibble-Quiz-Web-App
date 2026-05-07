import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaSun } from "react-icons/fa6";

const Header = () => {
  const { user, setIsLogged, isLogged, signout, logout } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signout();
    navigate("/signup");
  };

  const handleLogout = () => {
    logout();
    setIsLogged(false);
    navigate("/login");
  };

  // Navigation should be handled by components, not Header render cycle

  return (
    <header>
      <div className="w-full max-w-4xl mx-auto min-h-12 bg-[#2a2a2a] my-4 outline-1 outline-gray-600 p-2 rounded-sm flex justify-between">
        <div>
          <NavLink to="/" className="text-xl text-yellow-500 font-semibold">
            Quibble
          </NavLink>
        </div>

        <div className="flex gap-4">
          {user && isLogged ? (
            <div className="flex gap-4 items-center">
              <button
                title="Toggle Theme"
                className="bg-[#474646] outline-1 outline-gray-400 hover:outline-teal-500 text-gray-300 p-2 rounded-sm cursor-pointer hover:text-teal-500 transition-all"
              >
                <FaSun />
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500/10 border border-red-500 text-red-500 font-semibold px-4 py-1 rounded-sm cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
              >
                Log Out
              </button>
              <button
                onClick={handleSignOut}
                className="bg-red-500/10 border border-red-500 text-red-500 font-semibold px-4 py-1 rounded-sm cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
              >
                Delete Account
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "bg-teal-500 text-gray-900 font-semibold px-4 py-1 rounded-sm cursor-pointer"
                    : " bg-[#2a2a2a] outline-1 outline-gray-400 hover:outline-teal-500 font-semibold px-4 py-1 rounded-sm cursor-pointer hover:text-teal-500"
                }
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-teal-500 text-gray-900 font-semibold px-4 py-1 rounded-sm cursor-pointer"
                    : " bg-[#2a2a2a] outline-1 outline-gray-400 hover:outline-teal-500 font-semibold px-4 py-1 rounded-sm cursor-pointer hover:text-teal-500"
                }
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
