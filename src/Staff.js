import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc
} from "firebase/firestore";

export default function Staff() {
  const [payments, setPayments] = useState([]);

  const fetchPayments = async () => {
    const querySnapshot = await getDocs(collection(db, "payments"));

    const data = querySnapshot.docs.map((docItem) => ({
      id: docItem.id,
      ...docItem.data()
    }));

    setPayments(data);
  };

  const verifyPayment = async (id) => {
    try {
      await updateDoc(doc(db, "payments", id), {
        status: "Verified"
      });

      alert("Payment verified successfully ✅");
      fetchPayments();
    } catch (error) {
      alert(error.message);
    }
  };

  const submitToSwift = async (id) => {
    try {
      await updateDoc(doc(db, "payments", id), {
        status: "Submitted To SWIFT"
      });

      alert("Payment submitted to SWIFT ✅");
      fetchPayments();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>International Payments Staff Portal</h2>

      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        payments.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid black",
              marginBottom: "15px",
              padding: "15px",
              borderRadius: "5px"
            }}
          >
            <p>
              <b>Name:</b> {p.name}
            </p>

            <p>
              <b>Amount:</b> {p.amount}
            </p>

            <p>
              <b>Currency:</b> {p.currency}
            </p>

            <p>
              <b>Account:</b> {p.account}
            </p>

            <p>
              <b>SWIFT:</b> {p.swift}
            </p>

            <p>
              <b>Status:</b> {p.status || "Pending"}
            </p>

            {(!p.status || p.status === "Pending") && (
              <button onClick={() => verifyPayment(p.id)}>
                Verify
              </button>
            )}

            {p.status === "Verified" && (
              <button
                onClick={() => submitToSwift(p.id)}
                style={{ marginLeft: "10px" }}
              >
                Submit To SWIFT
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
}