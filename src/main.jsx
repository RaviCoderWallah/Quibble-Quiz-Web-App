import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//CSS
import "./index.css";

//Pages
import App from "./App.jsx";
import WelcomeScreen from "./Pages/WelcomeScreen";
import SignUpScreen from "./Pages/SignupScreen.jsx";
import LoginScreen from "./Pages/LoginScreen.jsx";
import QuizScreen from "./Pages/QuizScreen.jsx";

import { AuthProvider } from "./context/AuthContext.jsx";
import { QuizContextProvider } from "./context/QuizContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <QuizContextProvider>
          <App />
        </QuizContextProvider>
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
