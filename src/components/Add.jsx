import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@mui/material/Fab";
import { Add as AddIcon } from "@material-ui/icons";
import Tooltip from "@mui/material/Tooltip";
import { MenuItem, Modal } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";

import MuiAlert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  modal: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",

    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.modal}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="input-with-icon-textfield"
                label="Name"
                style={{ width: "100%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story..."
                size="small"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="visibility" value="Public">
                <MenuItem value="Social">Social</MenuItem>
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private"> private</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Who can comment here
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Everybody"
                    control={<Radio />}
                    label="Everybody"
                  />
                  <FormControlLabel
                    value="My Friends"
                    control={<Radio />}
                    label="My Friends"
                  />
                  <FormControlLabel
                    value="Nobody"
                    control={<Radio />}
                    label="Nobody"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        openAlert={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

// #endregion

export default Add;
