import React, { useState } from "react";
import styles from "./styles/login.module.css";
import { NavLink } from "react-router-dom";
import { login } from "../services/auth";
// import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginApi = async(event) => {
    event.preventDefault();

    try {
      const response = await login({ email, password });
      if(response.status === 'success') {
        if(response.user) {
          alert("user is loggind")
        }
      }
    } catch (error) {
      alert(error.response?.data?.error || "هنالك مشكلة في الاتصال بالخادم")
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.login}>
      <div className="container">
        <div className={styles.loginContainer}>
          <div className={styles.form}>
            <div className={styles.imageWrapper}>
              <img src="/icons/login.png" alt="login" />
            </div>
            <div className={styles.inputsWrapper}>
              <div className={styles.title}>
                <h2>
                  Hello! <span>Welcome</span> Back
                </h2>
              </div>

              <form onSubmit={LoginApi}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                />
                <button className={styles.loginBtn} type="submit">
                  Login
                </button>
              </form>

              <div className={styles.registerRoute}>
                <p>
                  Don't have an account ?{" "}
                  <NavLink className={styles.link} to="/auth/register">
                    Sign up
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
