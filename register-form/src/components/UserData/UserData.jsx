import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import RegisterValidations from "../../../src/contexts/RegisterValidations"

function UserData({ onSubmitForm }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    password: { isValid: true, text: "" },
  });
  const validations = useContext(RegisterValidations);

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
          onSubmitForm({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="E-mail"
        type="email"
        name="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        onBlur={fieldValidation}
        error={!errors.password.isValid}
        helperText={errors.password.text}
        id="password"
        label="Password"
        type="password"
        name="password"
        required
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
