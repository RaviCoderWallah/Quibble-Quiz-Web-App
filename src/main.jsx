import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import App from "./App.jsx";
import WelcomeScreen from "./Pages/WelcomeScreen";
import SignUpScreen from "./Pages/SignupScreen.jsx";
import LoginScreen from "./Pages/LoginScreen.jsx";

//CSS
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import QuizScreen from "./Pages/QuizScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <App />
      </AuthProvider>
    ),
    children: [
      { index: true, element: <WelcomeScreen /> },
      { path: "/signup", element: <SignUpScreen /> },
      { path: "/login", element: <LoginScreen /> },
      { path: "/quiz", element: <QuizScreen /> },
    ],
  },
]);

const root = document.getElementById("root");

createRoot(root).render(<RouterProvider router={router} />);
