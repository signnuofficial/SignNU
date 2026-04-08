import { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          backgroundColor: "#1e293b",
          color: "#fff",
          fontSize: "20px",
          zIndex: 9999,
        }}
      >
        ?
      </button>

      {/* Chat Box */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            padding: "10px",
            zIndex: 9999,
          }}
        >
          <h4>AI Assistant</h4>
          <p>Ask me anything...</p>
        </div>
      )}
    </>
  );
}