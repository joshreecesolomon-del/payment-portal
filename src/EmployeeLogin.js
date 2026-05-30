import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function EmployeeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginEmployee = async () => {
    // Only allow bank employee emails
    if (!email.endsWith("@bank.com")) {
      alert("Only bank employee accounts are allowed.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Employee login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Employee Login</h2>

      <input
        type="email"
        placeholder="Employee Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={loginEmployee}>Login</button>
    </div>
  );
}

export default EmployeeLogin;