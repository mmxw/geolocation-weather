import React from "react";

export default function Button({ onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick}>
        <h1>locate me</h1>
      </button>
    </div>
  );
}
