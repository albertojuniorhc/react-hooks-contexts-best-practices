import React from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import UserData from "../UserData/UserData";

function RegisterForm({ onSubmitForm, isCPFValid }) {
  return (
    <>
      <PersonalDetails onSubmitForm={onSubmitForm} isCPFValid={isCPFValid} />
      <UserData />
      <DeliveryDetails />
    </>
  );
}

export default RegisterForm;
