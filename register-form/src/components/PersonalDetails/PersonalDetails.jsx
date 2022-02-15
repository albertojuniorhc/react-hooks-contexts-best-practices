import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
import RegisterValidations from "../../../src/contexts/RegisterValidations"

function PersonalDetails({ onSubmitForm }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCpf] = useState("");
  const [promo, setPromo] = useState(true);
  const [news, setNews] = useState(true);
  const [errors, setErrors] = useState({
    cpf: { isValid: true, text: "" },
    name: { isValid: true, text: "" },
  });

  const validations = useContext(RegisterValidations)

  function fieldValidation(event) {
    const { name, value } = event.target;
    const valid = validations[name](value);
    const newObjErrors = { ...errors, [name]: valid };
    setErrors(newObjErrors);
  }

  function isValidSend() {
    for (let field in errors) {
      if (!errors[field].isValid) {
        return false;
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (isValidSend()) {
          onSubmitForm({ name, lastName, cpf, promo, news });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={fieldValidation}
        error={!errors.name.isValid}
        helperText={errors.name.text}
        id="name"
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
        id="lastname"
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="CPF"
        onBlur={fieldValidation}
        name="cpf"
        error={!errors.cpf.isValid}
        helperText={errors.cpf.text}
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promo?"
        control={
          <Switch
            onChange={(event) => {
              setPromo(event.target.checked);
            }}
            name="promo"
            checked={promo}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="News?"
        control={
          <Switch
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name="news"
            checked={news}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Next
      </Button>
    </form>
  );
}

export default PersonalDetails;
