import React, { useState, useContext } from "react";
import { Box, Typography, Modal, TextField } from "@mui/material";
import { AuthContext } from "../../contexts/auth";
import styles from "../../styles/calendar.module.css";
import { TimePicker } from "@mui/x-date-pickers";
import { useEffect } from "react";

export default function NewTaskModal({ onSave, openNew, setOpenNew, day}) {
  const { user } = useContext(AuthContext);
  const [hour, setHour] = useState(new Date());
  const [when, setWhen] = useState(day);
  const [values, setValues] = useState({
    title: "",
    description: "",
    duration: ""
  });
  const [error, setError] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  function handleClose() {setOpenNew(false)};

  return(
    <div>
      <Modal
        open={openNew}
        onClose={handleClose}
        aria-labelledby="new-task-modal"
      >
        <Box sx={style}>
          <Typography id="new-task-modal" variant="h6" component="h2">
            Nova Tarefa
          </Typography>
          <TextField
            size="small"
            fullWidth
            className={error ? `${styles.error} ${styles.eventTitleInput}` : `${styles.eventTitleInput}`}
            value={values.title}
            onChange={handleChange("title")}
            placeholder="Tarefa"
          />
          <TimePicker
            className={styles.eventTitleInput}
            value={hour}
            onChange={(e) => setHour(e._d)}
            renderInput={(params) => <TextField size="small" fullWidth {...params} />}
          />
          <TextField
            size="small"
            fullWidth
            className={styles.eventTitleInput}
            value={values.when}
            onChange={handleChange("when")}
            id={styles.eventTitleInput}
            placeholder="Quando"
          />
          <TextField
            size="small"
            fullWidth
            className={styles.eventTitleInput}
            value={values.duration}
            onChange={handleChange("duration")}
            id={styles.eventTitleInput}
            placeholder="Duração"
          />
          <TextField
            size="small"
            fullWidth
            className={styles.eventTitleInput}
            value={values.description}
            onChange={handleChange("description")}
            id={styles.eventTitleInput}
            placeholder="Descrição"
          />

          <button
            onClick={() => {
              if (values.title) {
                setError(false);
                onSave({...values, hour, when}, user.id);
                console.log({...values, hour, when})
                handleClose();
              } else {
                setError(true);
              }
            }}
            className={`${styles.button} ${styles.saveButton}`}
          >
            Salvar
          </button>

          <button onClick={handleClose} className={`${styles.button} ${styles.cancelButton}`}>
            Cancelar
          </button>
        </Box>
      </Modal>
    </div>
  );
}
