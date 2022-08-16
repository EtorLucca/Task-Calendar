import React from "react";
import styles from "../../styles/calendar.module.css";

export default function Day({ day, onClick, onUpdate }) {
  const currentDay = day.isCurrentDay ? `${styles.currentDay}` : "";
  const padding = day.value === `${styles.padding}` ? `${styles.padding}` : "";

  return (
    <div className={`${styles.day} ${padding} ${currentDay}`}>
      <div className={styles.newTaskClick} onClick={onClick}>
        {day.value === "padding" ? "" : day.value}
      </div>
      <div className={styles.eventDisplay}>
        {day.events
          ? day.events.map((e) => (
              <div
                className={styles.event}
                key={e.title}
                onClick={(e) => console.log(e.target)}
              >
                <span>{e.title}</span>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
