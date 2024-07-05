import Navbar from "./components/Navbar.tsx";
import {useState} from "react";
import {SelectedPage} from "./utils/types.ts";
import Home from "./pages/Home.tsx";

function App() {
  const [ selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="app bg-white">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
