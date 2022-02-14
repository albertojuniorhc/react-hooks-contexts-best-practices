import React from "react";
import { useState } from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import UserData from "../UserData/UserData";

function RegisterForm({ onSubmitForm, validation }) {
  const [currentStep, setCurrentStep] = useState(0);

  const forms = [
    <UserData onSubmitForm={nextStep} />,
    <PersonalDetails onSubmitForm={nextStep} validation={validation} />,
    <DeliveryDetails onSubmitForm={onSubmitForm} />
  ];

  function nextStep(dataForms) {
    setCurrentStep(currentStep + 1);
  }

  return <>{forms[currentStep]}</>;
}

export default RegisterForm;
