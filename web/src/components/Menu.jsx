import React from "react";
import { Select, InputLabel, MenuItem } from "@mui/material"
import styles from "../styles/menu.module.css";
import day from "../img/day.svg";
import week from "../img/week.svg";
import month from "../img/month.svg";
import { useState } from "react";

function Menu() {
  const [view, setView] = useState("month");

  return (
    <nav className={styles.menu}>
      <InputLabel id="view">Visualização</InputLabel>
      <Select
        className={styles.selectView}
        labelId="view"
        value={view}
        onChange={e => setView(e.target.value)}
      >
        <MenuItem value={"day"}>
          <img className={styles.icon} src={day} alt="imagem calendário dia" />
          <span className={styles.iconValue}>Dia</span>
        </MenuItem>
        <MenuItem value={"week"}>
          <img className={styles.icon} src={week} alt="imagem calendário semana"/>
          <span className={styles.iconValue}>Semana</span>
        </MenuItem>
        <MenuItem selected value={"month"}>
          <img className={styles.icon} src={month} alt="imagem calendário mês" />
          <span className={styles.iconValue}>Mês</span>
        </MenuItem>
      </Select>
    </nav>
  );
}

export default Menu;
