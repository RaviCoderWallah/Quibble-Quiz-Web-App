import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import CategoryFilter from "../feature/quiz/CategoryFilter";
import Sidebar from "../feature/quiz/Sidebar";
import QuizGamePlayScreen from "../feature/quiz/QuizGamePlayContainer";

const QuizScreen = () => {
  const { user, isLogged, isAuthLoaded } = useAuth();

  //For Auth
  if (!isAuthLoaded) return null;
  if (!user) return <Navigate to="/signup" replace />;
  if (!isLogged) return <Navigate to="/login" replace />;

  return (
    <main className="max-w-6xl w-full mx-auto">
      <CategoryFilter />
      <div className="grid grid-cols-1 md:grid-cols-8 gap-8 my-8 min-h-80">
        <Sidebar />
        <QuizGamePlayScreen />
      </div>
    </main>
  );
};

export default QuizScreen;
