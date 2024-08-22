import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/authSlice";
import toast from 'react-hot-toast';
import './AuthForms.css';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (auth._id) {
      navigate("/cart");
    }
  }, [auth._id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUser(user));
  };

  useEffect(() => {
    if (auth.registerStatus === "rejected") {
      toast.error(auth.registerError || "Registration failed");
    }
  }, [auth.registerStatus, auth.registerError]);

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <p className="form-title">Register</p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
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
            {auth.registerStatus === "pending" ? "Submitting..." : "Register"}
          </button>
          <p className="switch-account-mode">Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
