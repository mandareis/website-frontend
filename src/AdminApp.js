import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import "./AdminApp.css";
const Spinner = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  );
};

function AdminApp() {
  const [admin, setAdmin] = useState(null);
  const [hasCheckedSession, setHasCheckedSession] = useState(false);
  useEffect(() => {
    let timer = null;
    async function lookupSession() {
      const response = await fetch("/sessions");
      if (response.ok) {
        const data = await response.json();
        if (data.ok) {
          setAdmin({ id: data.admin_id, username: data.username });
        }
        timer = setTimeout(() => {
          setHasCheckedSession(true);
        }, 1250);
      } else {
        setHasCheckedSession(true);
      }
    }
    lookupSession();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return hasCheckedSession ? (
    admin ? (
      <AdminPage admin={admin} onLogOut={() => setAdmin(null)} />
    ) : (
      <Login
        onLogin={(admin) => {
          setAdmin(admin);
        }}
      />
    )
  ) : (
    <Spinner />
  );
}
export default AdminApp;
