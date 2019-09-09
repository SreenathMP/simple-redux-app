import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState } from "react";

function FormDialog(props) {
  const [open, setOpen] = useState(true);
  const [text, setText] = useState("");

  function handleClose() {
    setOpen(false);
    props.handleClose();
  }

  function handleSave() {
    setOpen(false);
    props.handlesave(text);
  }

  function handletext(e) {
    let value = e.target.value;
    setText(value);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            onChange={handletext}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      *
    </div>
  );
}

export default FormDialog;
