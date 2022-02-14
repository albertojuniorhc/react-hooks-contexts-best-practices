function isCPFValid(cpf) {
  if (cpf.length !== 11) {
    return { isValid: false, text: "This field must have 11 digits." };
  } else {
    return { isValid: true, text: "" };
  }
}

function isPasswordValid(password) {
  if (password.length < 4 || password.length > 72) {
    return {
      isValid: false,
      text: "Password size must be between 4 and 72 digits",
    };
  } else {
    return { isValid: true, text: "" };
  }
}

export { isCPFValid, isPasswordValid };
