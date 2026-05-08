import { FaHeart } from "react-icons/fa";
import { GoSkipFill } from "react-icons/go";
import { SiCodemagic } from "react-icons/si";
import { PiChatCenteredDotsFill } from "react-icons/pi";
import { MdOutlineNavigateNext } from "react-icons/md";
import useQuiz from "../../hooks/useQuiz";
import useQuizCurrentQuestion from "../../hooks/useQuizCurrentQuestion";
import { useEffect, useState } from "react";
import useTimer from "../../hooks/useTimer";
import useScore from "../../hooks/useScore";

const GamePlayScreen = ({ setIsResultScreenShow }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [isSubmitQuiz, setIsSubmitQuiz] = useState(false);
  const [isExplainShow, setIsExplainShow] = useState(false);
  const [isLifeLineEnabled, setIsLifeLineEnabled] = useState(false);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [hiddenOptions, setHiddenOptions] = useState([]);

  const { activeQuestionData, activeDifficulty } = useQuiz();
  const { timerLeft, timerFinised, resetTimer, timerStop } = useTimer();

  let points = null;
  if (activeDifficulty === "easy") {
    points = 5;
  }
  if (activeDifficulty === "medium") {
    points = 10;
  }
  if (activeDifficulty === "hard") {
    points = 20;
  }

  const { score, skipCharge, initialLifeLine, lifeline, increaseScore } =
    useScore(points);

  const {
    question,
    options,
    answer,
    explanation,
    currentQuestionData,
    setCurrentQuestionData,
  } = useQuizCurrentQuestion(activeQuestionData);

  const handleUserSelectOption = (index) => {
    if (!isSubmitQuiz) {
      setSelectedOption(index);
    }
  };

  //Handling Quiz Submit
  const handleQuizSubmit = () => {
    if (selectedOption !== null) {
      if (selectedOption === answer) {
        setCorrectAnswer(true);
        increaseScore();
        setCorrectAnswer((prev) => prev + 1);
        setCorrectAnswerCount((prev) => prev + 1);
      }
      setIsSubmitQuiz(true);
      timerStop();
    }
  };

  useEffect(() => {
    localStorage.setItem("correctAnswer", JSON.stringify(correctAnswerCount));
  }, [correctAnswer]);

  //Handling Explain Question
  const handleExplainQuestion = () => {
    setIsExplainShow((prev) => !prev);
  };

  //Handling Next Question
  const handleNextQuestion = () => {
    if (currentQuestionData >= 9) {
      timerStop();
      setIsResultScreenShow(true);
      return;
    }
    setCurrentQuestionData((prev) => prev + 1);

    //Reset all states  after click next button
    setIsSubmitQuiz(false);
    setIsExplainShow(false);
    setCorrectAnswer(false);
    setSelectedOption(null);
    setIsLifeLineEnabled(false);
    setHiddenOptions([]);
    resetTimer();
  };

  //Handling when timer is finised
  if (timerFinised) {
    handleNextQuestion();
    resetTimer();
    skipCharge();
  }

  //Handling Skip Question
  const handleskipQuestion = () => {
    handleNextQuestion();
    resetTimer();
    skipCharge();
  };

  //Handling 50/50 Lifeline
  const handleLifeline = () => {
    lifeline();
    setIsLifeLineEnabled(true);

    const incorrectOptionsIndices = options
      .map((_, index) => index)
      .filter((index) => index !== answer);

    const toHide = [];
    const shuffledIncorrect = incorrectOptionsIndices.sort(
      () => Math.random() - 0.5
    );
    toHide.push(shuffledIncorrect[0], shuffledIncorrect[1]);

    setHiddenOptions(toHide);
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
              Time: {timerLeft}s
            </p>
          </div>
          <div>
            <p className="px-2 py-0 bg-yellow-800/50 outline-1 outline-yellow-700 rounded-full text-white">
              Score: {score < 10 ? `0${score}` : `${score}`}
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
            const isSelected = selectedOption === index;
            const isCorrectAnswer = index === answer;

            let buttonClasses =
              "text-white text-sm py-2 rounded-sm transition-all duration-200 outline-1 ";

            const isHidden = hiddenOptions.includes(index);

            if (isSubmitQuiz) {
              if (isCorrectAnswer) {
                buttonClasses +=
                  "bg-green-700 outline-2 outline-green-500 opacity-100 cursor-not-allowed";
              } else if (isSelected && !isCorrectAnswer) {
                buttonClasses +=
                  "bg-red-700 outline-2 outline-red-500 opacity-100 cursor-not-allowed";
              } else {
                buttonClasses += "bg-gray-600/50 opacity-50 cursor-not-allowed";
              }
            } else if (isHidden) {
              buttonClasses += "bg-gray-800/20 opacity-20 cursor-not-allowed";
            } else {
              if (selectedOption !== null) {
                if (isSelected) {
                  buttonClasses +=
                    "bg-gray-600/50 outline-2 outline-white opacity-100 cursor-pointer";
                } else {
                  buttonClasses +=
                    "bg-gray-600/50 opacity-50 cursor-pointer hover:opacity-80";
                }
              } else {
                buttonClasses +=
                  "bg-gray-600/50 opacity-100 cursor-pointer hover:bg-gray-500/50";
              }
            }

            return (
              <button
                onClick={() => handleUserSelectOption(index)}
                key={index}
                disabled={isSubmitQuiz || isHidden}
                className={buttonClasses}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between" data-roles="game-footer">
        <div className="flex items-center gap-6">
          {!isSubmitQuiz && (
            <>
              <button
                onClick={handleLifeline}
                disabled={isLifeLineEnabled}
                className={`${isLifeLineEnabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-pink-600/60"} 
                bg-pink-600/20 relative flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm`}
              >
                <div className="bg-red-700 absolute w-6 h-6 -top-3 -right-3 text-sm flex items-center justify-center rounded-full font-semibold text-white">
                  {initialLifeLine}
                </div>{" "}
                <FaHeart />
                50/50
              </button>
              <button
                onClick={handleskipQuestion}
                className="bg-orange-600/20 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm cursor-pointer hover:bg-orange-600/60"
              >
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
            disabled={selectedOption === null || isSubmitQuiz}
            className={`${selectedOption === null || isSubmitQuiz ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-green-600/60"} bg-green-600/50 flex items-center gap-2 text-white text-sm outline-1 py-1 px-4 rounded-sm`}
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
