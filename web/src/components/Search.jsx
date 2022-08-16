import React, { useState } from "react";
import styles from "../styles/search.module.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder="Busque pelo nome da tarefa"
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.btnClear} onClick={() => onSearch("")}>Limpar</button>
      <button className={styles.btnSearch} onClick={() => onSearch(query)}>Procurar</button>
    </div>
  );
}

export default Search;
