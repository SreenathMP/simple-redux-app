import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useEffect, useState } from "react";

export default function FormDialog(props) {
  const [open, setOpen] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props]);

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
