import React, { Component } from "react";
import {
  withStyles,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import style from "./styles";

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={() => this.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.TextField}
            // value={value.name}
            margin="normal"
          />

          <TextField
            id="standard-name"
            label="Name"
            className={classes.TextField}
            // value={value.name}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(style)(TaskForm);
