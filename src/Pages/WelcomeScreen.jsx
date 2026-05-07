import { Navigate } from "react-router-dom";
import WelcomePage from "../feature/welcome/WelcomePage";
import useAuth from "../hooks/useAuth";

const WelcomeScreen = () => {
  const { user, isLogged, isAuthLoaded } = useAuth();

  if (!isAuthLoaded) {
    return null;
  }

  if (user) {
    if (isLogged) {
      return <Navigate to="/quiz" replace />;
    } else {
      return <Navigate to="/login" replace />;
    }
  }

  return (
    <main className="flex items-center justify-center">
      <WelcomePage />
    </main>
  );
};

export default WelcomeScreen;
