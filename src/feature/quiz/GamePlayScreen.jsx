import { FaHeart } from "react-icons/fa";
import { GoSkipFill } from "react-icons/go";
import { PiChatCenteredDotsFill } from "react-icons/pi";
import { MdOutlineNavigateNext } from "react-icons/md";

const GamePlayScreen = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between" data-roles="game-header">
        <div className="flex items-center gap-3">
          <p className="text-white">Question 1 of 10</p>
          <div>
            <div className="w-50 h-4 outline-1 outline-gray-300 rounded-full">
              <div className="w-5 h-4 bg-green-600 rounded-full shadow-[inset_0_0px_0px_1px_rgba(0,0,0,1)]"></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="px-2 py-0 bg-orange-800/50 outline-1 outline-orange-700 rounded-full text-white">Time: 5s</p>
          </div>
          <div>
            <p className="px-2 py-0 bg-yellow-800/50 outline-1 outline-yellow-700 rounded-full text-white">Score: 01</p>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-600/10 outline-1 outline-gray-600 rounded-md min-h-50 p-2" data-roles="question-option">
        <h1 className="text-3xl font-bold text-yellow-500">What is the full form of HTML?</h1>
        <div className="grid grid-cols-2 gap-4 mt-6 max-w-140 mx-auto">
          <button className="bg-green-700 text-white text-sm outline-2 py-2 rounded-sm outline-green-500 cursor-pointer hover:outline-2">Hyper Text Markup Language</button>
          <button className="bg-gray-600/50 text-white text-sm outline-2 py-2 rounded-sm cursor-pointer">High Text Machine Language</button>
          <button className="bg-gray-600/50 text-white text-sm outline-1 py-2 rounded-sm cursor-pointer hover:outline-2">None of the above</button>
          <button className="bg-red-700 text-white text-sm outline-2 py-2 rounded-sm outline-red-500 cursor-pointer hover:outline-2">Hyper Transfer Markup Language</button>
        </div>
      </div>
      <div className="flex justify-between" data-roles="game-footer">
        <div className="flex items-center gap-4">
          <button 
          className="bg-pink-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-pink-600/60"
          >
            <FaHeart />
            50/50
          </button>
          <button className="bg-orange-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-orange-600/60">
            <GoSkipFill />
            Skip
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-green-600/50 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-green-600/60">
            <PiChatCenteredDotsFill  />
            Submit
          </button>
          <button className="bg-indigo-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-indigo-600/60">
            Next
            <MdOutlineNavigateNext />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GamePlayScreen