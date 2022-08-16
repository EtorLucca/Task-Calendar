import React from "react";
import styles from "../../styles/calendar.module.css";

export default function CalendarHeader({ onNext, onBack, dateDisplay }) {
  return (
    <div className={styles.header}>
      <div className={styles.monthDisplay}>{dateDisplay}</div>
      <div>
        <button onClick={onBack} className={`${styles.button} ${styles.backButton}`}>
          Back
        </button>
        <button onClick={onNext} className={`${styles.button} ${styles.nextButton}`}>
          Next
        </button>
      </div>
    </div>
  );
}
