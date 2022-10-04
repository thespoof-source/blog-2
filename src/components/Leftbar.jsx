import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Home } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import ViewListIcon from "@mui/icons-material/ViewList";
//import Typography from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import LogoutIcon from "@mui/icons-material/Logout";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",

    color: "white",
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #999",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ViewListIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleIcon className={classes.icon} />
        <Typography className={classes.text}>videos</Typography>
      </div>
      <div className={classes.item}>
        <PhoneIphoneIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <BookmarkIcon className={classes.icon} />
        <Typography className={classes.text}>Collection</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>Marketplace</Typography>
      </div>

      <div className={classes.item}>
        <SettingsSuggestIcon className={classes.icon} />
        <Typography className={classes.text}>setting</Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

// #endregion

export default Leftbar;
