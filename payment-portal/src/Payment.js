import { useState } from "react";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { validate } from "./validation";

export default function Payment() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    currency: "",
    swift: "",
    account: ""
  });

  const handlePayment = async () => {
    const error = validate(form);
    if (error) {
      alert(error);
      return;
    }

    try {
      await addDoc(collection(db, "payments"), {
        ...form,
        timestamp: new Date()
      });

      alert("Payment successful ✅");
    } catch (err) {
      alert("Payment failed ❌");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>International Payment</h2>

      <input
        placeholder="Full Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Amount"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        placeholder="Currency (USD/EUR)"
        onChange={(e) => setForm({ ...form, currency: e.target.value })}
      />

      <input
        placeholder="Account Number"
        onChange={(e) => setForm({ ...form, account: e.target.value })}
      />

      <input
        placeholder="SWIFT Code"
        onChange={(e) => setForm({ ...form, swift: e.target.value })}
      />

      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}