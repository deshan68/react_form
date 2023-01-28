import React from "react";
import "./index.css";

export default function Form() {
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <input type={"text"} placeholder="Full Name" />
      <input type={"text"} placeholder="Email" />
      <input type={"text"} placeholder="Age" />
      <input type={"Password"} placeholder="Password" />
      <input type={"Password"} placeholder="Confirm Password" />
      <input type={"submit"} />
    </form>
  );
}
