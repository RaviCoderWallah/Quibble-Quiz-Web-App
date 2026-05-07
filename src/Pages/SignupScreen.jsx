import { Navigate } from "react-router-dom";
import SignupPage from "../feature/signup/SignupPage";
import useAuth from "../hooks/useAuth";

const SignupScreen = () => {
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
        <SignupPage/>
    </main>
  )
}

export default SignupScreen;