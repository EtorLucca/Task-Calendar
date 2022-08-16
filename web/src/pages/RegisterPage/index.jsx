import React from "react";
import FormularioCadastro from "../../components/FormularioCadastro";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import styles from "../../styles/register.module.css";
import logo from "../../img/logo.svg"


function RegisterPage() {
  const navigate = useNavigate();

  function onSubmitForm(dados) {

    api.post("/users", dados)
      .then(alert("Usuário criado com sucesso"))
      .then(navigate("/"));
  }

  return (
    <div className={styles.register}>
      <div className={styles.registerLogo}>
        <img className={styles.logo} alt="logo" src={logo} />
        <span className={styles.logoText}>Task Calendar</span>
      </div>
      <div className={styles.container}>
        <h1 className={styles.h1}>Cadastro</h1>
        <FormularioCadastro onSubmit={onSubmitForm} />
      </div>
    </div>
  );
}

export default RegisterPage;
