import useScore from "../../hooks/useScore";
import useAuth from "../../hooks/useAuth";

const GamePlayResult = ({ setIsWelcomeScreenShow, setIsResultScreenShow }) => {
  const { user } = useAuth();

  const score = JSON.parse(localStorage.getItem("score"));
  const correctAnswerCount = JSON.parse(localStorage.getItem("correctAnswer"));

  let title = null;

  if (correctAnswerCount >= 8) {
    title = "Excellent !";
  } else if (correctAnswerCount >= 5) {
    title = "Good !";
  } else {
    title = "Keep it up !";
  }

  //Handle Play Again !
  const handlePlayAgain = () => {
    setIsWelcomeScreenShow(true);
    setIsResultScreenShow(false);
  };

  return (
    <div className="text-center flex items-center justify-center min-h-full">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-white">
          Score:{" "}
          <span className="text-yellow-500">
            {score < 10 ? `0${score}` : `${score}`}
          </span>
        </h1>
        <h1 className="text-3xl font-semibold text-white">
          Correct Answer:{" "}
          <span className="text-yellow-500">
            {correctAnswerCount < 10
              ? `0${correctAnswerCount}/10`
              : `${correctAnswerCount}/10`}
          </span>
        </h1>
        <h1 className="text-4xl font-bold text-white">
          <span className="text-orange-400">{user.name}, </span> {title}
        </h1>
        <p className="text-2xl max-w-md italic">
          {correctAnswerCount == 10
            ? "Outstanding performance! You've mastered this level."
            : correctAnswerCount >= 5
              ? "Solid effort! You're getting closer to the top."
              : "Every attempt counts. Keep practicing to improve your score."}
        </p>
        <div>
          <button
            onClick={handlePlayAgain}
            className="bg-green-700 text-white px-4 outline-1 outline-gray-400 shadow-xl py-2 rounded-sm cursor-pointer hover:bg-green-600"
          >
            Play Again !
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePlayResult;
