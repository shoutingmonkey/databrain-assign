import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export const Confirm = (props) => {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };

  const {
    values: { firstName, lastName, email, occupation, city, bio },
  } = props;
  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>
        <br />

        <Button color="secondary" variant="contained" onClick={back}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={next}>
          Confirm & Continue
        </Button>
      </Dialog>
    </>
  );
};

export default Confirm;
