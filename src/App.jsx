import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return <div className="bg-[#131313] text-[#e5e2e1] min-h-screen flex flex-col gap-12 md:px-0 px-4">
    <Header/>
    <Outlet/>
  </div>;
};

export default App;
