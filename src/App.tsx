import Navbar from "./components/Navbar.tsx";
import {useState} from "react";
import {SelectedPage} from "./utils/types.ts";

function App() {
  const [ selectedPage, setSelectedPage ] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
