import "./App.css";
import useFetch from "./hooks/useFetch";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
//import About from "./pages/About";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
