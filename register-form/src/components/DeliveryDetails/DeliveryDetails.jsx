import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

function DeliveryDetails({ onSubmitForm }) {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm({ cep, address, number, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="Zip Code"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        id="address"
        label="Address"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        label="Number"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        label="State"
        type="text"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
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
