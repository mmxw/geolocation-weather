import React from "react";

export default function Button({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        <h1>show me my weather</h1>
      </button>
    </div>
  );
}
