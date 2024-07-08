import Navbar from "./components/Navbar.tsx";
import {useState} from "react";
import {SelectedPage} from "./utils/types.ts";
import Home from "./pages/Home.tsx";
import Features from "./pages/Features.tsx";
import AboutUs from "./pages/AboutUs.tsx";

function App() {
  const [ selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="app bg-white">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage} />
      <Features setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
