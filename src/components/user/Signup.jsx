// src/components/user/Signup.jsx
import React, { useState } from "react";
import "../../styles/signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log("User created:", user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }

      console.log("user Registered Successfully");
    } catch (error) {
      console.log("Error signing up:", error.message);
    }
  };

  return (
    <section className="signup">
      <div className="signup-form-area">
        <h6>Sign Up</h6>

        <form className="signup-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLname(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    </section>
  );
}
