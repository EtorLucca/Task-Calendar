import { useEffect, useState } from 'react';

export function useDate(events, nav) {

  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dt = new Date();
    
    let dayEvents = [];
    
    function eventsForDate(date) {
      dayEvents = events.filter(e => e.date === date)

      return dayEvents
    }

    if(nav !== 0) {
      dt.setMonth(new Date().getMonth() + nav);
    }
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    setDateDisplay(`${dt.toLocaleDateString('pt-br', { month: 'long' }).toUpperCase()} ${year}`);
    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    const daysArr = [];

    for(let i = 1; i <= (paddingDays + daysInMonth); i++) {
      
      let dayString = `${month + 1}/${i - paddingDays}/${year}`;
      
      if (i > paddingDays) {
        daysArr.push({
          value: i - paddingDays,
          events: eventsForDate(dayString),
          isCurrentDay: i - paddingDays === day && nav === 0,
          date: dayString,
        });
      } else {
        daysArr.push({
          value: "padding",
          events: null,
          isCurrentDay: false,
          date: "",
        });
      }
    }

    setDays(daysArr);
    
  }, [events, nav]);

  return {
    days,
    dateDisplay
  }
}