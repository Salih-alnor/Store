import React from "react";
import styles from "./styles/login.module.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className={styles.login}>
      <div className="container">
        <div className={styles.loginContainer}>
          <div className={styles.form}>
            <div className={styles.imageWrapper}>
              <img src="/icons/register.png" alt="login" />
            </div>
            <div className={styles.inputsWrapper}>
              <div className={styles.title}>
                <h2>
                  Hello! <span>Welcome</span> Back
                </h2>
              </div>

              <form>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                />
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                />

                <input
                  className={styles.input}
                  type="password"
                  placeholder="Confirm Password"
                />
                <button className={styles.loginBtn}>Register</button>
              </form>

              <div className={styles.registerRoute}>
                <p>
                  Allready have an account ?{" "}
                  <NavLink className={styles.link} to="/auth/login">
                    Login
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

export default Register;
