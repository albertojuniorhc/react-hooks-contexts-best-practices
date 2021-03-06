import React from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Container, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { isCPFValid, isPasswordValid } from "./models/validations";
import RegisterValidations from "./contexts/RegisterValidations";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Register Form
      </Typography>
      <RegisterValidations.Provider
        value={{
          cpf: isCPFValid,
          password: isPasswordValid,
          name: isPasswordValid,
        }}
      >
        <RegisterForm onSubmitForm={submitAllForms} />
      </RegisterValidations.Provider>
    </Container>
  );
}

function submitAllForms(dataForm) {
  console.log(dataForm);
}

export default App;
