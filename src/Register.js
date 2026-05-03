import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { validate } from "./validation";

export default function Register() {
  const [form, setForm] = useState({});

  const handleRegister = async () => {
    const error = validate(form);
    if (error) return alert(error);

    try {
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      alert("Registered successfully ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})} />

      <input placeholder="Email"
        onChange={e => setForm({...form, email: e.target.value})} />

      <input type="password" placeholder="Password"
        onChange={e => setForm({...form, password: e.target.value})} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}