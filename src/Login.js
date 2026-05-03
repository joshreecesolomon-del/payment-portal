import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [form, setForm] = useState({});

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      alert("Login successful ✅");
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input placeholder="Email"
        onChange={e => setForm({...form, email: e.target.value})} />

      <input type="password" placeholder="Password"
        onChange={e => setForm({...form, password: e.target.value})} />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}