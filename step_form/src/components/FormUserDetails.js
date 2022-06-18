import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export const FormUserDetails = (props) => {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const { values, handleChange } = props;

  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Enter User Details" />
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          margin="normal"
          fullWidth
          required
        />
        <br />
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Email"
          label="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
          margin="normal"
          fullWidth
        />
        <br />
        <Button color="primary" variant="contained" onClick={next}>
          Continue
        </Button>
      </Dialog>
    </>
  );
};

export default FormUserDetails;
