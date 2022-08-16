import React, { useState } from "react";
import { Box, Typography, Modal, TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import styles from "../../styles/calendar.module.css";
import { useEffect } from "react";

export default function UpdateTaskModal({
  openUpdate,
  setOpenUpdate,
  onDelete,
  onUpdate,
  event,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [updatedTask, setUpdatedTask] = useState({});
  const [hour, setHour] = useState({}); 

  useEffect(() => {
    if (event) {
      setUpdatedTask({
        title: event.title,
        description: event.description,
        when: event.when,
        duration: event.duration,
        userId: event.userId,
        _id: event._id
      });
      setHour(event.hour);
    }
  }, [event]);

  const handleChange = (prop) => (e) => {
    setUpdatedTask({ ...updatedTask, [prop]: e.target.value });
  };

  function handleClose() {
    setOpenUpdate(false);
  }

  return (
    <div>
      <Modal
        open={openUpdate}
        onClose={handleClose}
        aria-labelledby="new-task-modal"
      >
        <Box sx={style}>
          <Typography id="new-task-modal" variant="h6" component="h2">
            Atualizar/Remover Tarefa
          </Typography>
          <div className={styles.deleteEventModal}>
            {event ? (
              <>
                <TextField
                  className={styles.eventUpdateInput}
                  size="small"
                  fullWidth
                  value={updatedTask && updatedTask.title}
                  onChange={handleChange("title")}
                />

                <TimePicker
                  className={styles.eventTitleInput}
                  value={hour}
                  onChange={(e) => setHour(e._d)}
                  renderInput={(params) => (
                    <TextField size="small" fullWidth {...params} />
                  )}
                />

                <TextField
                  className={styles.eventUpdateInput}
                  size="small"
                  fullWidth
                  value={updatedTask && updatedTask.when}
                  onChange={handleChange("when")}
                />

                <TextField
                  className={styles.eventUpdateInput}
                  size="small"
                  fullWidth
                  value={updatedTask && updatedTask.duration}
                  onChange={handleChange("duration")}
                />
                <TextField
                  className={styles.eventUpdateInput}
                  size="small"
                  fullWidth
                  value={updatedTask && updatedTask.description}
                  onChange={handleChange("description")}
                />

                <button
                  id={event._id}
                  onClick={(e) => onDelete(e.target.id)}
                  className={`${styles.button} ${styles.deleteButton}`}
                >
                  Excluir
                </button>
                <button
                  id={event._id}
                  onClick={(e) => onUpdate(e.target.id, {...updatedTask, hour})}
                  className={`${styles.button} ${styles.updateButton}`}
                >
                  Atualizar
                </button>
              </>
            ) : (
              ""
            )}
            <button
              onClick={handleClose}
              className={`${styles.button} ${styles.closeButton}`}
            >
              Fechar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
