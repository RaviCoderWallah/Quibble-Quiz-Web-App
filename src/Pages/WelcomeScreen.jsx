import { Navigate, replace } from "react-router-dom";
import WelcomePage from "../feature/welcome/WelcomePage";
import useAuth from "../hooks/useAuth";

const WelcomeScreen = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/quiz" replace />;
  }

  return (
    <main className="flex items-center justify-center">
      <WelcomePage />
    </main>
  );
};

export default WelcomeScreen;
