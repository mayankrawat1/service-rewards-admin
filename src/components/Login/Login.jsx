import "./Login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const loginSuccessful = () => {
  toast.success("User login Successfully");
};

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="inner-card">
          <img className="img" src={"./Tab.png"} alt="logo" />
          <p className="text">Admin Dashboard</p>
        </div>
        <div className="button_container">
          <Link to="/home">
            <button className="loginButton" onClick={loginSuccessful}>
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
