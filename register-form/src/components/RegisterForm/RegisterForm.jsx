import React from "react";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import UserData from "../UserData/UserData";

function RegisterForm({ onSubmitForm, isCPFValid }) {
  return (
    <>
      <PersonalDetails onSubmitForm={onSubmitForm} isCPFValid={isCPFValid} />
      <UserData />
    </>
  );
}

export default RegisterForm;
