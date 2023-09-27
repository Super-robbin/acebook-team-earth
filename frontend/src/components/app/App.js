import LoginForm from "../auth/LoginForm";
import SignUpForm from "../user/SignUpForm";
import React, { useState, useEffect } from "react";
import Feed from "../feed/Feed";
import { useNavigate, Routes, Route } from "react-router-dom";
import Homepage from "../homepage/Homepage";

const App = () => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      fetch("/users", {
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(data.user);
        });
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/posts"
          element={<Feed user={user} navigate={useNavigate()} />}
        />
        <Route path="/login" element={<LoginForm navigate={useNavigate()} />} />
        <Route
          path="/signup"
          element={<SignUpForm navigate={useNavigate()} />}
        />
      </Routes>
    </>
  );
};

export default App;
