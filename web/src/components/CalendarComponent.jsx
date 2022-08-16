import React, { useState, useEffect } from "react";
import Day from "./Calendar/Day";
import { useDate } from "../hooks/useDate";
import CalendarHeader from "./Calendar/CalendarHeader";
import styles from "../styles/calendar.module.css";
import NewTaskModal from "./modal/NewTaskModal";
import UpdateTaskModal from "./modal/UpdateTaskModal";
import { createTask } from "../services/api";

export default function CalendarComponent() {
  const [openNew, setOpenNew] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [nav, setNav] = useState(0);
  const [clickedDay, setClickedDay] = useState();
  // const [events, setEvents] = useState(
  //   localStorage.getItem("events")
  //     ? JSON.parse(localStorage.getItem("events"))
  //     : []
  // );
  const eventForDate = (date) => events.find(e => e.date === date);

  // useEffect(() => {
  //   localStorage.setItem("events", JSON.stringify(events));
  // }, [events]);

  const { days, dateDisplay } = useDate(events, nav);

  function handleUpdate(e) {
    setOpenNew(false);
    setOpenUpdate(true);
    console.log(e)
  }

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
                onUpdate={handleUpdate}
              />
            ))}
          </div>
        </div>
      </div>

      <NewTaskModal
        day={clickedDay}
        openNew={openNew}
        setOpenNew={setOpenNew}
        onSave={(values, userId) => {
          createTask(values, userId)
          setClickedDay(null);
        }}
      />

      <UpdateTaskModal
        openUpdate={openUpdate}
        setOpenUpdate={setOpenUpdate}
        eventText={eventForDate(clickedDay)}
        onDelete={() => {
          setEvents(events.filter(e => e.date !== clickedDay));
          setClickedDay(null);
        }}
      />
    </>
  );
}
