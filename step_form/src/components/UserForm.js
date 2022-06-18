import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const initialState = {
  step: 1,
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: "",
};

const UserForm = () => {
  const [state, setState] = useState(initialState);
  const { step } = state;
  const { firstName, lastName, email, occupation, city, bio } = state;
  const values = { firstName, lastName, email, occupation, city, bio };

  const nextStep = () => {
    const { step } = state;
    setState({ ...state, step: step + 1 });
  };

  const prevStep = () => {
    const { step } = state;
    setState({ ...state, step: step - 1 });
  };

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default UserForm;
