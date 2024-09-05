import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HooksApp from "./Components/Hooks.app";
import Home from "./Home";
import HooksUseState from "./Components/hooks.useState";
import HooksUseEffect from "./Components/hooks.useEffect";
import HooksuseCallback from "./Components/hooks.useCallback";

const App = () => {
  return (
    <BrowserRouter>
      <p className="text-3xl px-5 my-5 text-red-500">
        Learn React Js With abhishek kumar
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<HooksApp />} />
        <Route path="/hooks/useState" element={<HooksUseState />} />
        <Route path="/hooks/useEffect" element={<HooksUseEffect />} />
        <Route path="/hooks/useCallback" element={<HooksuseCallback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
