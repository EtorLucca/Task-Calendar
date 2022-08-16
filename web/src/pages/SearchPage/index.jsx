import React, { useState, useEffect, useContext } from "react";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import TaskList from "../../components/TaskList";
import Footer from "../../components/Footer";
import { getTasks } from "../../services/api";
import { AuthContext } from "../../contexts/auth";
import { destroyTask } from "../../services/api";
import styles from "../../styles/search.module.css";

function SearchPage() {
  const { user, logout } = useContext(AuthContext); 
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = async (query = "") => {
    try {
      setLoading(true);
      const response = await getTasks(user?.id, query);
      const result = await response.data.filter(
        (task) => task.title.toLowerCase().indexOf(query) !== -1
      );
      setTasks(result);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    (async () => await loadData())();
  }, []);
  
  function handleLogout() {
    logout();
  }
  
  const handleSearch = async (query) => {
    await loadData(query);
  };

  const handleDeleteTask = async (task) => {
    await destroyTask(task.userId, task._id);
    loadData();
  };

  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  return (
    <>
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <div className={styles.wrapper}>
        <TaskList tasks={tasks} onDeleTask={handleDeleteTask} />
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
