import React, { useContext } from "react";
import styles from "../../styles/main.module.css";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import Menu from "../../components/Menu";
import CalendarComponent from "../../components/CalendarComponent";
import Footer from "../../components/Footer";

function MainPage() {
  const { logout } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  async function handleSearch(q) {
    navigate("/search", {replace: false});
  };

  return (
    <>
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch}/>
      <div className={styles.wrapper}>
        <Menu />
        <CalendarComponent />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
