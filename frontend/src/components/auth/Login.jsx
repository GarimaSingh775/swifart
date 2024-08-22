import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/authSlice";
import { useNavigate, Link } from "react-router-dom";
import toast from 'react-hot-toast';
import './AuthForms.css';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  useEffect(() => {
    if (auth.loginStatus === "rejected") {
      toast.error(auth.loginError || "Login failed");
    }
  }, [auth.loginStatus, auth.loginError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(loginUser(user));
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <p className="form-title">Login</p>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button type="submit">
            {auth.loginStatus === "pending" ? "Submitting..." : "Login"}
          </button>

          <p className="switch-account-mode">Don't have an account? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
