import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DeliveryDetails from "../DeliveryDetails/DeliveryDetails";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import UserData from "../UserData/UserData";

function RegisterForm({ onSubmitForm, validation }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [dataCollected, setDataCollected] = useState({});

  useEffect(()=> {
    console.log(dataCollected);
  })

  const forms = [
    <UserData onSubmitForm={dataCollect} />,
    <PersonalDetails onSubmitForm={dataCollect} validation={validation} />,
    <DeliveryDetails onSubmitForm={dataCollect} />,
  ];

  function dataCollect(data) {
    setDataCollected({ ...dataCollected, ...data });
    nextStep();
  }

  function nextStep() {
    setCurrentStep(currentStep + 1);
  }

  return <>{forms[currentStep]}</>;
}

export default RegisterForm;
