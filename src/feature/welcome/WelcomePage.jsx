import { MdQuestionAnswer } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import WelcomeScreenImage from "../../assets/images/welcome-screen.jpg"
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleWelcomeContinueBtnState = () => {
       navigate("/signup");
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-4xl">
            <div className="bg-[#201f1f] p-4 rounded-md flex flex-col gap-8 py-8 outline-1 outline-gray-700 md:order-1 order-2">
                <div className="flex items-center gap-2 text-3xl">
                    <MdQuestionAnswer className="text-teal-600" />
                    <h1>Welcome Screen ! </h1>
                </div>
                <p className="text-gray-300">
                    Level up your knowledge and challenge friends in the utlimate trivia experience. Friendly competition starts here.
                </p>
                <div className="flex flex-col gap-2">
                    <div className="bg-[#2a2a2a] flex gap-4 items-center p-3 pl-2 rounded-md">
                        <BsFillRocketTakeoffFill className="text-yellow-500 text-xl" />
                        <p>
                            Daily challenges and rewards
                        </p>
                    </div>
                    <div className="bg-[#2a2a2a] flex gap-4 items-center p-3 pl-2 rounded-md">
                        <IoIosPeople className="text-teal-500 text-2xl" />
                        <p>
                            Compete with trivia and buffs globally
                        </p>
                    </div>
                </div>
                <button onClick={handleWelcomeContinueBtnState} className="bg-teal-500 text-gray-900 flex gap-4 items-center justify-center py-2 text-lg rounded-full cursor-pointer hover:bg-teal-400">
                    Continue <FaArrowRightLong />
                </button>
            </div>
            <div className="md:order-2 order-1">
                <img src={WelcomeScreenImage} alt="People with share its quiz game play." className="rounded-md"/>
            </div>
        </div>
    )
}

export default WelcomePage