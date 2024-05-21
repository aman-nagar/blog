// src/components/user/Signup.jsx
import React, { useState } from "react";
import "../../styles/signup.css";
export default function Signup() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(userEmail);
    console.log(userPassword);
  };

  return (
    <section className="signup">
      <div className="signup-form-area">
        <h6>Sign Up</h6>
        <form action="" className="signup-form">
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="e-mail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </form>
        <input type="submit" value="Sign Up" onClick={formSubmitHandler} />
      </div>
    </section>
  );
}
