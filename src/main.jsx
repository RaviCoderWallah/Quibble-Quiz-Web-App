import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages 
import App from './App.jsx'
import WelcomeScreen from "./Pages/WelcomeScreen";
import SignUpScreen from "./Pages/SignupScreen.jsx";
import LoginScreen from "./Pages/LoginScreen.jsx";

//CSS
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {index: true, element: <WelcomeScreen/>},
      {path: "/signup", element: <SignUpScreen/>},
      {path: "/login", element: <LoginScreen/>}
    ]
  }
]);

const root = document.getElementById('root');

createRoot(root).render(
  <RouterProvider router={router} />
)
