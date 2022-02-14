import { Button, TextField } from "@mui/material";
import React from "react";

function UserData() {
  return (
    <form>
      <TextField
        id="email"
        label="E-mail"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
}

export default UserData;
