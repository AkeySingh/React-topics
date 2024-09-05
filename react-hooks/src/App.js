import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HooksApp from "./Components/Hooks.app";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <p className="text-3xl px-5 my-5 text-red-500">
        Learn React Js With abhishek kumar
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hooks" element={<HooksApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
