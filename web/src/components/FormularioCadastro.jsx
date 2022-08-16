import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/register.module.css";

function FormularioCadastro({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit({ email, password });
        }}
      >
        <div className={styles.field}>
          <TextField
            label="E-mail"
            variant="outlined"
            type="email"
            name="email"
            id="email"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className={styles.field}>
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            name="senha"
            id="senha"
            fullWidth
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
        <div className={styles.cadastro}>
          <span className={styles.text}>Já possui cadastro?</span>
          <Link className={styles.registerLink} to="/">Entrar</Link>
        </div>
        <div className={styles.actions}>
          <button type="submit" className={styles.btnRegister}>
            Cadastrar
          </button>
        </div>
      </form>

    </>
  );
}

export default FormularioCadastro;
