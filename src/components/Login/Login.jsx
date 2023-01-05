import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const handleLogin = () => {
    toast.success("User login successfully");
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <div className="inner-card">
            <img className="img" src={"./tab.jpeg"} alt="logo" />
            <p className="text">Admin Dashboard</p>
          </div>
          <div className="button_container">
            <Link to="/home">
              <button className="loginButton" onClick={handleLogin}>
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
