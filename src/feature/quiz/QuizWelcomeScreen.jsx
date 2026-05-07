import { FaPlay } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const QuizWelcomeScreen = ({setIsWelcomeScreenShow}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 min-h-full">
            <div className="flex items-center -mb-3 gap-1 bg-green-900/20 text-green-700 pl-1 py-0.5 rounded-full text-sm pr-2 outline-1 outline-green-700"><GoDotFill /> Easy</div>
            <h1 className="text-3xl font-semibold text-yellow-500">Welcome to the HTML Quiz !</h1>
            <p className="max-w-lg text-center text-gray-300">You are about to test your knowledge of HTML. Get ready! A series of challenges await you. Good luck!</p>

            {/* Quick Rules Guides  */}
            <div className="max-w-md mx-auto p-2 bg-slate-600/20 border border-slate-800 rounded-sm shadow-xl text-slate-200">
                <h2 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                    <span>📝</span> Quick Rules
                </h2>

                <div className="space-y-2 text-sm sm:text-base">
                    {/* Scoring Rule */}
                    <div className="flex gap-3">
                        <div className="text-blue-400 font-bold">•</div>
                        <p className="text-sm">
                            <span className="text-blue-400 font-semibold">Scoring:</span> Easy
                            <span className="text-white font-mono mx-1">+5</span>,
                            Medium <span className="text-white font-mono mx-1">+10</span>,
                            Hard <span className="text-white font-mono mx-1">+20</span>.
                        </p>
                    </div>

                    {/* Lifeline Rule */}
                    <div className="flex gap-3">
                        <div className="text-yellow-400 font-bold">•</div>
                        <p className="text-sm">
                            <span className="text-yellow-400 font-semibold">50/50 Lifeline:</span> 5 free uses.
                            Subsequent uses deduct <span className="text-red-400 font-mono">5 points</span>.
                        </p>
                    </div>

                    {/* Penalty Rule */}
                    <div className="flex gap-3">
                        <div className="text-red-400 font-bold">•</div>
                        <p className="text-sm">
                            <span className="text-red-400 font-semibold">Skip Penalty:</span> Skipping a
                            question costs <span className="text-red-400 font-mono">10 points</span>.
                        </p>
                    </div>
                </div>

            </div>

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
                <button onClick={() => setIsWelcomeScreenShow((prev) => !prev)} 
                className="flex items-center gap-2 bg-green-500 text-gray-900 px-2 py-1 text-lg font-semibold cursor-pointer rounded-sm hover:bg-green-400"> <FaPlay /> Play Now ! </button>
            </div>
        </div>
    )
}

export default QuizWelcomeScreen