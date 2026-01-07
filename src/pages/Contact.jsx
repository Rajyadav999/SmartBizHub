import React from "react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) alert("Invalid Email");
    else alert("Form Submitted");
  };

  return (
    <form onSubmit={submit}>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
