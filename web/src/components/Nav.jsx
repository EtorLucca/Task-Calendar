import React from "react";
import logo from "../img/logo.svg";
import styles from "../styles/nav.module.css"

function Nav({ onLogout }) {
  
  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} alt="logo" src={logo} />
        <span className={styles.logoText}>Task Calendar</span>
      </div>
      <button className={styles.btnLogout} color="primary" mode="dark" variant="contained" onClick={onLogout}>SAIR</button>
    </div>
  );
}

export default Nav;
