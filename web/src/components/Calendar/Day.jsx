import React from "react";
import styles from "../../styles/calendar.module.css";

export default function Day({ day, onClick, onOpenUpdate }) {
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
                id={e._id}
                className={styles.event}
                key={e._id}
                onClick={onOpenUpdate}
              >
                <span>{e.title}</span>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
