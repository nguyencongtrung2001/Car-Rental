import React, { useState } from "react";
import "../css/login.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login form submitted!");
  };

  return (
    <div className="login">
      <div className="login-container">
        {/* Title */}
        <h1 className="login-title">Login</h1>

        {/* Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="login-input">
            <MdOutlineMailOutline />
            <input type="email" placeholder="Email" required />
          </div>

          {/* Password */}
          <div className="login-input">
            <RiLockPasswordFill />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
          </div>

          {/* Toggle Show Password */}
          <h5 className="show-pass" onClick={togglePassword}>
            {showPassword ? "Hide Password" : "Show Password"}
          </h5>

          {/* Button */}
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
