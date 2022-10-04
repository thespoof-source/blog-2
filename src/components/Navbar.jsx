import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, Toolbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Search } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import flex from "react";
import { Cancel } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logolg: {
    display: "none",
    [theme.breakpoints.up(`sm`)]: {
      display: "block",
    },
  },
  logosm: {
    display: "block",
    [theme.breakpoints.up(`sm`)]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down(`sm`)]: {
      display: (props) => (props.open ? flex : "not"),
      width: "70%",
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  cancel: {
    [theme.breakpoints.up(`sm`)]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(`sm`)]: {
      display: "none",
    },
  },
  icon: {
    display: "flex",
    alignItems: "center",

    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logolg}>
          DR JIBI DANIEL
        </Typography>
        <Typography variant="h6" className={classes.logosm}>
          DRJD
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search...." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icon}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="error" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error" className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar src="https://images.unsplash.com/photo-1516980907201-943c13a8d03c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG92ZSUyMGJ1ZGRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"></Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// #endregion

export default Navbar;
