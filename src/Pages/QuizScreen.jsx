import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import CategoryFilter from "../feature/quiz/CategoryFilter";
import Sidebar from "../feature/quiz/Sidebar";
import QuizGamePlayScreen from "../feature/quiz/QuizGamePlayContainer";
import useQuiz from "../hooks/useQuiz";

// const DATA_URL = "/data/quiz-question.json";

const QuizScreen = () => {
  const { user, isLogged, isAuthLoaded } = useAuth();
  // const { data, error, loading } = useFetch(DATA_URL);
  // if (error) console.error(error);

  const { activeCategory, allSubCategories, activeSubCategory, activeDifficulty, activeQuestionData } = useQuiz();
  console.log(activeCategory, allSubCategories, activeSubCategory, activeDifficulty, activeQuestionData);

  //For Auth
  if (!isAuthLoaded) return null;
  if (!user) return <Navigate to="/signup" replace />;
  if (!isLogged) return <Navigate to="/login" replace />;

  // if (loading) return <h1>Loading quizes data....</h1>;




  return (
    <main className="max-w-5xl w-full mx-auto">
      <CategoryFilter />
      <div className="grid md:grid-cols-8 gap-8 my-8 min-h-80">
        <Sidebar />
        <QuizGamePlayScreen />
      </div>
    </main>
  );
};

export default QuizScreen;
