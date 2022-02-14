import { Button, TextField } from "@mui/material";
import React from "react";

function UserData({ onSubmitForm }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm();
      }}
    >
      <TextField
        id="email"
        label="E-mail"
        type="email"
        // required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        // required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
}

export default UserData;
