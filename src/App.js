import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import RewardPoint from "./components/RewardPoint/RewardPoint";
import RewardBadge from "./components/RewardBadge/RewardBadge";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reward-point" element={<RewardPoint />} />
          <Route path="/reward-badge" element={<RewardBadge />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
