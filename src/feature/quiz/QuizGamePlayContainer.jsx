import { useEffect, useState } from "react";
import QuizWelcomeScreen from "./QuizWelcomeScreen";
import GamePlayScreen from "./GamePlayScreen";
import useQuiz from "../../hooks/useQuiz";
import useFetch from "../../hooks/useFetch";

const QuizGamePlayScreen = () => {
  const [isWelcomeScreenShow, setIsWelcomeScreenShow] = useState(true);
  const {
    activeCategory,
    activeSubCategory,
    changeCategory,
    changeSubCategory,
  } = useQuiz();

  useEffect(() => {
    setIsWelcomeScreenShow(true);
  }, [activeCategory, activeSubCategory, changeCategory, changeSubCategory]);

  return (
    <div className="bg-gray-600/30 col-span-6 p-4">
      {isWelcomeScreenShow ? (
        <QuizWelcomeScreen setIsWelcomeScreenShow={setIsWelcomeScreenShow} />
      ) : (
        <GamePlayScreen />
      )}
    </div>
  );
};

export default QuizGamePlayScreen;
