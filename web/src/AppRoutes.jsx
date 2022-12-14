import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import { AuthProvider, AuthContext } from "./contexts/auth";

function AppRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route
            exact
            path="/calendar"
            element={
              <Private>
                <MainPage />
              </Private>
            }
          />
          <Route
            exact
            path="/search"
            element={
              <Private>
                <SearchPage />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRoutes;
