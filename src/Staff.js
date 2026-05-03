import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Staff() {
  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    const querySnapshot = await getDocs(collection(db, "payments"));

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    setPayments(data);
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div>
      <h2>Staff Payment Portal</h2>

      {payments.map((p) => (
        <div key={p.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <p><b>Name:</b> {p.name}</p>
          <p><b>Amount:</b> {p.amount}</p>
          <p><b>Currency:</b> {p.currency}</p>
          <p><b>Account:</b> {p.account}</p>
          <p><b>SWIFT:</b> {p.swift}</p>

          <button onClick={() => alert("Verified for SWIFT submission ✅")}>
            Verify
          </button>
        </div>
      ))}
    </div>
  );
}