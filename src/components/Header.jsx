import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <div className="w-full max-w-4xl mx-auto min-h-12 bg-[#2a2a2a] my-4 outline-1 outline-gray-600 p-2 rounded-sm flex justify-between">
                <div>
                    <NavLink to="/" className="text-xl text-yellow-500 font-semibold">Quibble</NavLink>
                </div>
                <div className="flex gap-4">
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            isActive ? "bg-teal-500 text-gray-900 font-semibold px-4 py-1 rounded-sm cursor-pointer"
                                : " bg-[#2a2a2a] outline-1 outline-gray-400 hover:outline-teal-500 font-semibold px-4 py-1 rounded-sm cursor-pointer hover:text-teal-500"
                        }
                    >
                        Sign Up
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "bg-teal-500 text-gray-900 font-semibold px-4 py-1 rounded-sm cursor-pointer"
                                : " bg-[#2a2a2a] outline-1 outline-gray-400 hover:outline-teal-500 font-semibold px-4 py-1 rounded-sm cursor-pointer hover:text-teal-500"
                        }
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header