import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    position: "sticky",
    top: 0,
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
    color: "red",
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  },
}));

const Rightbar = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={5} style={{ marginBlockStart: 20 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
        />
        <Avatar
          alt="Travis Howard"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60 "
        />
        <Avatar>J</Avatar>
        <Avatar
          alt="Agnes Walker"
          src="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
        />
        <Avatar>J</Avatar>
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList cols={2} rowHeight={100} style={{ marginBottom: 20 }}>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">
        Sport
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Food
      </Link>
      <Divider flexItem />
      <Link
        href="#"
        className={classes.link}
        variant="body2"
        style={{ marginRight: 2 }}
      >
        Humbergosa
      </Link>
      <Link href="#" className={classes.link} variant="body2">
        Menu
      </Link>
    </Container>
  );
};

// #endregion

export default Rightbar;
