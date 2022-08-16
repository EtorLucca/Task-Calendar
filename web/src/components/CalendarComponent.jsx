import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/auth";
import Day from "./Calendar/Day";
import { useDate } from "../hooks/useDate";
import CalendarHeader from "./Calendar/CalendarHeader";
import styles from "../styles/calendar.module.css";
import NewTaskModal from "./modal/NewTaskModal";
import UpdateTaskModal from "./modal/UpdateTaskModal";
import { createTask, getTasks, destroyTask, updateTask } from "../services/api";

export default function CalendarComponent({ query }) {
  const { user } = useContext(AuthContext);
  const [taskId, setTaskId] = useState("");
  const [openNew, setOpenNew] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [nav, setNav] = useState(0);
  const [clickedDay, setClickedDay] = useState();
  const [events, setEvents] = useState([]);
  const eventById = (id) => events.find(e => e._id === id);
  const { days, dateDisplay } = useDate(events, nav);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);

  useEffect(async () => {
    setLoading(true);
    await getTasks(user.id, query)
      .then((res) => {
        setEvents(res.data)
        .then(setLoading(false))
      })
  }, [load]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <CalendarHeader
            dateDisplay={dateDisplay}
            onNext={() => setNav(nav + 1)}
            onBack={() => setNav(nav - 1)}
          />

          <div className={styles.weekdays}>
            <div>Domingo</div>
            <div>Segunda</div>
            <div>Terça</div>
            <div>Quarta</div>
            <div>Quinta</div>
            <div>Sexta</div>
            <div>Sábado</div>
          </div>

          <div className={styles.calendarTable}>
            {days.map((d, index) => (
              <Day
                key={index}
                day={d}
                onClick={() => {
                  if (d.value !== "padding") {
                    setClickedDay(d.date);
                    setOpenNew(!openNew);
                  }
                }}
                onOpenUpdate={(e) => {
                  setTaskId(e.target.id);
                  setClickedDay(d.date);
                  setOpenNew(false);
                  setOpenUpdate(!openUpdate);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <NewTaskModal
        when={clickedDay}
        openNew={openNew}
        setOpenNew={setOpenNew}
        onSave={(values, userId) => {
          createTask(values, userId)
            .then((item) => {
              setEvents((prevEvents) => [...prevEvents, item.data])
            })
          setClickedDay(null);
        }}
      />

      <UpdateTaskModal
        openUpdate={openUpdate}
        setOpenUpdate={setOpenUpdate}
        event={eventById(taskId)}
        onDelete={(id) => {
          destroyTask(user.id, id)
            .then(setLoad(!load));
          setClickedDay(null);
          setOpenUpdate(!openUpdate);
        }}
        onUpdate={(id, updatedTask) => {
          console.log(user.id, id, updatedTask)
          updateTask(user.id, id, updatedTask)
            .then(setLoad(!load));
          setClickedDay(null);
          setOpenUpdate(!openUpdate);
        }}
      />
    </>
  );
}
