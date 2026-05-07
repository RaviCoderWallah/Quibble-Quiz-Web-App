import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const QuizScreen = () => {
  const { user, isLogged, isAuthLoaded } = useAuth();

  if (!isAuthLoaded) {
    return null;
  }

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return <div>QuizScreen</div>;
};

export default QuizScreen;
