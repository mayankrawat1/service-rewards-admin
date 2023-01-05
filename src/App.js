import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import RewardPoint from "./components/RewardPoint/RewardPoint";
import RewardBadge from "./components/RewardBadge/RewardBadge";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/reward-point"
            element={
              <>
                <Navbar />
                <RewardPoint />
              </>
            }
          />
          <Route
            path="/reward-badge"
            element={
              <>
                <Navbar />
                <RewardBadge />
              </>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
