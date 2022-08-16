import React from "react";
import styles from "../../styles/calendar.module.css";

export default function DeleteEventModal({ onDelete, eventText, onClose }) {
  return (
    <>
      <div className={styles.deleteEventModal}>
        <h2>Tarefa</h2>

        <p className={styles.eventText}>{eventText}</p>

        <button onClick={onDelete} className={`${styles.button} ${styles.deleteButton}`}>
          Excluir
        </button>
        <button onClick={onClose} className={`${styles.button} ${styles.closeButton}`}>
          Fechar
        </button>
      </div>

      <div className={styles.modalBackDrop}></div>
    </>
  );
}
