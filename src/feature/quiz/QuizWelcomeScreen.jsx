import { FaPlay } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const QuizWelcomeScreen = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 min-h-full">
            <div className="flex items-center -mb-3 gap-1 bg-green-900/20 text-green-700 pl-1 py-0.5 rounded-full text-sm pr-2 outline-1 outline-green-700"><GoDotFill /> Easy</div>
            <h1 className="text-4xl font-semibold text-yellow-500">Welcome to the HTML Quiz !</h1>
            <p className="max-w-lg text-center text-gray-300">You are about to test your knowledge of HTML. Get ready! A series of challenges await you. Good luck!</p>
            <div className="flex gap-8 items-center">
                <div className="bg-[#2a2a2a] rounded-sm">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold">Difficulty: </p>
                        <select name="" id="" className="bg-[#474646] p-1 rounded-sm">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>
                <button className="flex items-center gap-2 bg-green-500 text-gray-900 px-2 py-1 text-lg font-semibold cursor-pointer rounded-sm"> <FaPlay /> Play Now ! </button>
            </div>
        </div>
    )
}

export default QuizWelcomeScreen