import React from "react";
const RegisterValidations = React.createContext({
  cpf: noValidation,
  password: noValidation,
  name: noValidation,
});

function noValidation(data) {
  console.log(data);
  return { isValid: true, text: "" };
}
export default RegisterValidations;
