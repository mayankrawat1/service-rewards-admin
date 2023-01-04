import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div>
        <p className="mainHeading">Reward Admin Dashboard</p>
        <div className="button_container">
          <Link to="/reward-point">
            <button className="pointButton">Reward-Point</button>
          </Link>
          <Link to="/reward-badge">
            <button className="badgeButton">Reward-Badge</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
