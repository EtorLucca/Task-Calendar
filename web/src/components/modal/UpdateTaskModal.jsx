import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import styles from "../../styles/calendar.module.css";

export default function UpdateTaskModal({ openUpdate, setOpenUpdate, onDelete, eventText,  }) {
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

  function handleClose() {setOpenUpdate(false)};

  return(
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
            <p className={styles.eventText}>{eventText}</p>

            <button onClick={onDelete} className={`${styles.button} ${styles.deleteButton}`}>
              Excluir
            </button>
            <button onClick={onDelete} className={`${styles.button} ${styles.updateButton}`}>
              Atualizar
            </button>
            <button onClick={handleClose} className={`${styles.button} ${styles.closeButton}`}>
              Fechar
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
