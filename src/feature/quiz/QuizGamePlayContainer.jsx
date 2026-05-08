import { useEffect, useState } from "react";
import QuizWelcomeScreen from "./QuizWelcomeScreen";
import GamePlayScreen from "./GamePlayScreen";
import useQuiz from "../../hooks/useQuiz";
import useFetch from "../../hooks/useFetch";
import GamePlayResult from "./GamePlayResult";

const QuizGamePlayScreen = () => {
  const [isWelcomeScreenShow, setIsWelcomeScreenShow] = useState(true);
  const [isResultScreenShow, setIsResultScreenShow] = useState(false);
  const {
    activeCategory,
    activeSubCategory,
    changeCategory,
    changeSubCategory,
  } = useQuiz();

  useEffect(() => {
    setIsWelcomeScreenShow(true);
    setIsResultScreenShow(false);
  }, [activeCategory, activeSubCategory, changeCategory, changeSubCategory]);

  return (
    <div className="bg-gray-600/30 col-span-6 p-4">
      {isWelcomeScreenShow ? (
        <QuizWelcomeScreen setIsWelcomeScreenShow={setIsWelcomeScreenShow} />
      ) : isResultScreenShow ? (
        <GamePlayResult
          setIsWelcomeScreenShow={setIsWelcomeScreenShow}
          setIsResultScreenShow={setIsResultScreenShow}
        />
      ) : (
        <GamePlayScreen setIsResultScreenShow={setIsResultScreenShow} />
      )}
    </div>
  );
};

export default QuizGamePlayScreen;
