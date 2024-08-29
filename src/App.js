import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.js";
import New from "./pages/New.js";
import Diary from "./pages/Diary.js";
import Edit from "./pages/Edit.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
