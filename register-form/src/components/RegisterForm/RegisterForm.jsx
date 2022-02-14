import { StepLabel, Stepper, Step, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import UserData from "../UserData/UserData";

function RegisterForm({ onSubmitForm, validations }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [dataCollected, setDataCollected] = useState({});

  useEffect(() => {
    if (currentStep === forms.length - 1) {
      onSubmitForm(dataCollected);
    }
  });

  const forms = [
    <UserData onSubmitForm={dataCollect} validations={validations} />,
    <PersonalDetails onSubmitForm={dataCollect} validations={validations} />,
    <DeliveryDetails onSubmitForm={dataCollect} validations={validations} />,
    <Typography variant="h4">All data sent to server!</Typography>,
  ];

  function dataCollect(data) {
    setDataCollected({ ...dataCollected, ...data });
    nextStep();
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal Info</StepLabel>
        </Step>
        <Step>
          <StepLabel>Delivery Info</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finished!</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStep]}
    </>
  );
}

export default RegisterForm;
