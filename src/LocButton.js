import React from "react";
import Button from '@material-ui/core/Button';

export default function LocButton({ onClick }) {
  return (
    <div>
      <Button variant="contained" type="button" onClick={onClick}>
        <h3>show me my weather</h3>
      </Button>
    </div>
  );
}
