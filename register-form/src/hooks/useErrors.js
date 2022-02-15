import React, { useState } from "react";

function useErrors(validations) {
  const initialObject = createInitialObject(validations);
  const [errors, setErrors] = useState(initialObject);

  function fieldValidation(event) {
    const { name, value } = event.target;
    const valid = validations[name](value);
    const newObjErrors = { ...errors, [name]: valid };
    setErrors(newObjErrors);
  }

  function isFormValid() {
    for (let field in errors) {
      if (!errors[field].isValid) {
        return false;
      }
    }
    return true;
  }

  return [errors, fieldValidation, isFormValid];
}

function createInitialObject(validations) {
  const initialObject = {};
  for (let field in validations) {
    initialObject[field] = { isValid: true, text: "" };
  }
  return initialObject;
}

export default useErrors;
