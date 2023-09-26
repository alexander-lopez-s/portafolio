import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound"


const App = () => {
 
  return (
    <>
    <BrowserRouter>
    <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
