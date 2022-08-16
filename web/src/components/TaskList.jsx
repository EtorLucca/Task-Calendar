import React from "react";
import styles from "../styles/search.module.css";

export default function TaskList({ tasks, onDeleteTask }) {

  function formatarData(dateString) {
    let [MM, DD, YYYY] = dateString.split('/');

    if(MM < 10) {
      MM = `0${MM}`
    }
    if(DD < 10) {
      DD = `0${DD}`
    }
  
    return `${DD}/${MM}/${YYYY}`;
  }


  return(
    <div className={styles.tasksContainer}>
      <span className={styles.h2}>Lista de Tarefas</span>
      {
        tasks.map((task) => (
          <div className={styles.task} key={task._id}>
            <div className={styles.taskHeader}>
              <div>
                <span className={styles.label}>Tarefa:</span>
                <span className={styles.title}>{task.title}</span>
              </div>
              <div>
                <span className={styles.label}>Quando:</span>
                <span className={styles.when}>{formatarData(task.when)} | {task.hour.substring(11,16)}</span>
              </div>
            </div>
            <div className={styles.taskDescription}>
                <span className={styles.label}>Descrição:</span>
                <span className={styles.description}>{task.description}</span>
            </div>
            
            
          </div>
        ))
      }
    </div>
  );
}