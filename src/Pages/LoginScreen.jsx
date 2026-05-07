import { Navigate } from "react-router-dom";
import LoginPage from "../feature/login/LoginPage";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { user, isLogged, isAuthLoaded } = useAuth();

  if (!isAuthLoaded) {
    return null;
  }

  if (user && isLogged) {
    return <Navigate to="/quiz" replace />;
  }

  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return (
    <div className="flex items-center justify-center">
        <LoginPage/>
    </div>
  )
}

export default LoginScreen;