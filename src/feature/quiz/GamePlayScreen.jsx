import { FaHeart } from "react-icons/fa";
import { GoSkipFill } from "react-icons/go";
import { SiCodemagic } from "react-icons/si";
import { PiChatCenteredDotsFill } from "react-icons/pi";
import { MdOutlineNavigateNext } from "react-icons/md";
import useQuiz from "../../hooks/useQuiz";
import useQuizCurrentQuestion from "../../hooks/useQuizCurrentQuestion";
import { useState } from "react";

const GamePlayScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [isSubmitQuiz, setIsSubmitQuiz] = useState(false);
  const [isExplainShow, setIsExplainShow] = useState(false);

  const { activeQuestionData } = useQuiz();

  const {
    question,
    options,
    answer,
    explanation,
    currentQuestionData,
    setCurrentQuestionData,
  } = useQuizCurrentQuestion(activeQuestionData);

  const handleUserSelectOption = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
    }
  };

  const isOptionSelected = (index) => selectedOption === index;
  const isOptionLocked = selectedOption !== null;

  //Handling Quiz Submit
  const handleQuizSubmit = () => {
    if (selectedOption === answer) {
      setCorrectAnswer(true);
    }
    setIsSubmitQuiz(true);
  };

  //Handling Explain Question
  const handleExplainQuestion = () => {
    setIsExplainShow((prev) => !prev);
  };

  //Handling Next Question
  const handleNextQuestion = () => {
    if (currentQuestionData >= 9) return;
    setCurrentQuestionData((prev) => prev + 1);

    //Reset all states  after click next button
    setIsSubmitQuiz(false);
    setIsExplainShow(false);
    setCorrectAnswer(false);
    setSelectedOption(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between" data-roles="game-header">
        <div className="flex items-center gap-3">
          <p className="text-white">
            Question {currentQuestionData + 1} of {activeQuestionData.length}
          </p>
          <div>
            <div className="w-50 h-4 outline-1 outline-gray-300 rounded-full">
              <div
                className="h-4 bg-green-600 rounded-full shadow-[inset_0_0px_0px_1px_rgba(0,0,0,1)]"
                style={{ width: (currentQuestionData + 1) * 20 }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="px-2 py-0 bg-orange-800/50 outline-1 outline-orange-700 rounded-full text-white">
              Time: 5s
            </p>
          </div>
          <div>
            <p className="px-2 py-0 bg-yellow-800/50 outline-1 outline-yellow-700 rounded-full text-white">
              Score: 01
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center bg-gray-600/10 outline-1 outline-gray-600 rounded-md min-h-50 p-2"
        data-roles="question-option"
      >
        <h1 className="text-3xl font-bold text-yellow-500">{question}</h1>
        <div className="grid grid-cols-2 gap-4 mt-6 max-w-140 mx-auto">
          {options?.map((opt, index) => {
            const selected = isOptionSelected(index);
            const locked = isOptionLocked && !selected;

            return (
              <button
                onClick={() => handleUserSelectOption(index)}
                key={index}
                disabled={locked}
                className={`
                    ${selected ? "outline-2" : ""}
                    ${locked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                    ${correctAnswer ? "bg-green-700 outline-2 outline-green-500" : "bg-red-700 outline-2 outline-red-500 "}
                   bg-gray-600/50 text-white text-sm outline-1 py-2 rounded-sm`}
              >
                {opt}
              </button>
            );
          })}
          {/* <button className="bg-green-700 text-white text-sm outline-2 py-2 rounded-sm outline-green-500 cursor-pointer hover:outline-2">Hyper Text Markup Language</button>
          <button className="bg-gray-600/50 text-white text-sm outline-2 py-2 rounded-sm cursor-pointer">High Text Machine Language</button>
          <button className="bg-gray-600/50 text-white text-sm outline-1 py-2 rounded-sm cursor-pointer hover:outline-2">None of the above</button>
          <button className="bg-red-700 text-white text-sm outline-2 py-2 rounded-sm outline-red-500 cursor-pointer hover:outline-2">Hyper Transfer Markup Language</button> */}
        </div>
      </div>
      <div className="flex justify-between" data-roles="game-footer">
        <div className="flex items-center gap-4">
          {!isSubmitQuiz && (
            <>
              <button className="bg-pink-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-pink-600/60">
                <FaHeart />
                50/50
              </button>
              <button className="bg-orange-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-orange-600/60">
                <GoSkipFill />
                Skip
              </button>
            </>
          )}
          {isSubmitQuiz && (
            <button
              onClick={handleExplainQuestion}
              className="bg-orange-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-orange-600/60"
            >
              <SiCodemagic />
              Explain
            </button>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleQuizSubmit}
            className="bg-green-600/50 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-green-600/60"
          >
            <PiChatCenteredDotsFill />
            Submit
          </button>
          <button
            disabled={!isSubmitQuiz}
            onClick={handleNextQuestion}
            className={`${!isSubmitQuiz ? "cursor-not-allowed" : "cursor-pointer hover:bg-indigo-600/60"}
           bg-indigo-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm `}
          >
            Next
            <MdOutlineNavigateNext />
          </button>
        </div>
      </div>
      {isExplainShow && <p>{explanation}</p>}
    </div>
  );
};

export default GamePlayScreen;
