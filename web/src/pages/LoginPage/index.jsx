import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import { TextField } from "@mui/material";
import styles from "../../styles/login.module.css";
import logo from "../../img/logo.svg";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    login(email, password);
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginLogo}>
        <img className={styles.logo} alt="logo" src={logo} />
        <span className={styles.logoText}>Task Calendar</span>
      </div>
      <div className={styles.form}>
        <h1 className={styles.title}>Faça seu Login</h1>
        <div className={styles.field}>
          <TextField
            label="E-mail"
            variant="outlined"
            type="email"
            name="email"
            id="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.field}>
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            name="password"
            id="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.cadastro}>
          <span className={styles.text}>Ainda não possui cadastro?</span>
          <Link className={styles.loginLink} to="/register">Cadastrar</Link>
        </div>
        <div className={styles.actions}>
          <button className={styles.btnLogin} onClick={handleLogin}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
