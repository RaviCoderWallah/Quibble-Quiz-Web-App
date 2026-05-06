import { FaArrowRightLong } from "react-icons/fa6";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import SignupScreenImage from "../../assets/images/signup-screen.jpg";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth.js";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const { user, signup } = useAuth();

  if (user) {
    return <Navigate to="/quiz" replace />;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    signup(userData);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-4xl">
      <div className="bg-[#201f1f] p-4 rounded-md flex flex-col gap-6 py-6 outline-1 outline-gray-700 md:order-1 order-2">
        <div className="flex items-center gap-2 text-3xl">
          <RiAccountBoxFill className="text-teal-600 text-4xl" />
          <h1>Create Account</h1>
        </div>
        <p className="text-gray-300">Unlock the world of knowledge.</p>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <div className="bg-[#2a2a2a] outline-1 outline-gray-600 focus-within:outline-gray-200 rounded-sm min-h-10 pl-2 flex items-center gap-2">
            <FaUserAlt />
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              placeholder="Your username..."
              className="h-6 w-full outline-0"
              required
              spellCheck={false}
            />
          </div>
          <div className="bg-[#2a2a2a] outline-1 outline-gray-600 focus-within:outline-gray-200 rounded-sm min-h-10 pl-2 flex items-center gap-2">
            <MdEmail className="text-xl" />
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Your email..."
              className="h-6 w-full outline-0"
              required
              spellCheck={false}
            />
          </div>
          <div className="bg-[#2a2a2a] outline-1 outline-gray-600 focus-within:outline-gray-200 rounded-sm min-h-10 pl-2 flex items-center gap-2">
            <RiLockPasswordFill className="text-xl" />
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="Your password..."
              className="h-6 w-full outline-0"
              required
              spellCheck={false}
            />
          </div>
          <button className="bg-teal-500 mt-6 text-gray-900 flex gap-4 items-center justify-center py-2 text-lg rounded-full cursor-pointer hover:bg-teal-400">
            Sign Up Now <FaArrowRightLong />
          </button>
        </form>
        <p className="text-center text-gray-300">
          Already have a account?{" "}
          <NavLink
            to="/login"
            className="text-yellow-500 font-semibold underline"
          >
            Log In
          </NavLink>
        </p>
      </div>
      <div className="md:order-2 order-1">
        <img
          src={SignupScreenImage}
          alt="People with share its quiz game play."
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default SignupPage;
