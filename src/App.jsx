// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "./components/user/Login";
import Signup from "./components/user/Signup";
import Profile from "./components/user/Profile";
import Home from "./components/layout/Home/Home";
import Header from "./components/layout/Header/Header";
import { auth } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter basename="/blog">
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/profile" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/profile" /> : <Signup />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
