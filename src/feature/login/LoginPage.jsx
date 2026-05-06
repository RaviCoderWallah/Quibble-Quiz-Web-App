import { FaArrowRightLong } from "react-icons/fa6"
import { RiLoginBoxFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import LoginScreenImage from "../../assets/images/login-screen.jpg";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-4xl">
      <div className="bg-[#201f1f] p-4 rounded-md flex flex-col gap-6 py-6 outline-1 outline-gray-700 md:order-1 order-2">
        <div className="flex items-center gap-2 text-3xl">
          <RiLoginBoxFill className="text-teal-600 text-4xl" />
          <h1>Login</h1>
        </div>
        <p className="text-gray-300">
          Welcome back to your favorite trivia challenge.
        </p>
        <form className="flex flex-col gap-4">
          <div className="bg-[#2a2a2a] outline-1 outline-gray-600 focus-within:outline-gray-200 rounded-sm min-h-10 pl-2 flex items-center gap-2">
            <MdEmail className="text-xl" />
            <input
              type="email"
              name="email"
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
              placeholder="Your password..."
              className="h-6 w-full outline-0"
              required
              spellCheck={false}
            />
          </div>
          <button className="bg-teal-500 mt-6 text-gray-900 flex gap-4 items-center justify-center py-2 text-lg rounded-full cursor-pointer hover:bg-teal-400">
            Login Now <FaArrowRightLong />
          </button>
        </form>
        <p className="text-center text-gray-300">Don't have an account? <NavLink to="/signup" className="text-yellow-500 font-semibold underline">Sign Up</NavLink></p>
      </div>
      <div className="md:order-2 order-1">
        <img src={LoginScreenImage} alt="People with share its quiz game play." className="rounded-md" />
      </div>
    </div>
  )
}

export default LoginPage