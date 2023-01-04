import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="inner-card">
          <img className="img" src="" alt="logo" />
          <p className="text">Admin Dashboard</p>
        </div>
        <div className="button_container">
          <Link to="/home">
            <button className="loginButton">LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
