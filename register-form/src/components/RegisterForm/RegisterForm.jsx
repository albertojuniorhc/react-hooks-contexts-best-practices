import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import UserData from "../UserData/UserData";

function RegisterForm({ onSubmitForm, validation }) {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  function CurrentForm(step) {
    switch (step) {
      case 0:
        return <UserData onSubmitForm={nextStep} />;
      case 1:
        return (
          <PersonalDetails onSubmitForm={nextStep} validation={validation} />
        );
      case 2:
        return <DeliveryDetails onSubmitForm={onSubmitForm} />;
      default:
        return <Typography>Error on form select!</Typography>;
    }
  }

  return <>{CurrentForm(currentStep)}</>;
}

export default RegisterForm;
