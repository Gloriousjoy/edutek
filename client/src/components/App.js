import React, { useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import GradesList from "../pages/GradesList";



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* user={user} setUser={setUser}  */}
      <GradesList />
      </>);
}

export default App;