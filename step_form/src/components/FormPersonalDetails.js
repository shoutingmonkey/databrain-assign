import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormPersonalDetails = (props) => {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const { values, handleChange } = props;

  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Enter Personal Details" />
        <TextField
          placeholder="Enter Your Occupation"
          label="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your City"
          label="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Bio"
          label="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
          margin="normal"
          fullWidth
        />
        <br />

        <Button color="secondary" variant="contained" onClick={back}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={next}>
          Continue
        </Button>
      </Dialog>
    </>
  );
};

export default FormPersonalDetails;
