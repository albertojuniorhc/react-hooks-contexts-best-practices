import { Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import UserData from "../UserData/UserData";

function RegisterForm({ onSubmitForm, isCPFValid }) {
  const [currentStep, setCurrentStep] = useState(1);

  const CurrentForm = (step) => {
    switch (step) {
      case 0:
        return <UserData />;
      case 1:
        return (
          <PersonalDetails
            onSubmitForm={onSubmitForm}
            isCPFValid={isCPFValid}
          />
        );

      case 2:
        return <DeliveryDetails />;
      default:
        return <Typography>Error on form select!</Typography>;
    }
  };

  return <>{CurrentForm(currentStep)}</>;
}

export default RegisterForm;