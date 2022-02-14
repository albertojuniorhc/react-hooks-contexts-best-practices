import { TextField, Button } from "@mui/material";
import React from "react";

function DeliveryDetails({ onSubmitForm }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm("Full form data");
      }}
    >
      <TextField
        id="cep"
        label="Zip Code"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="address"
        label="Address"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="city"
        label="City"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <Button variant="contained" color="primary" type="submit" fullWidth>
        Send all data
      </Button>
    </form>
  );
}

export default DeliveryDetails;
