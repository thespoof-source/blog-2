import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 125,
    },
  },
  Card: {
    marginBottom: theme.spacing(5),
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1664454217818-11e5baf60205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post"
          </Typography>
          <Typography gutterBottom variant="body2">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <Button>Share</Button>
        <Button>More</Button>
      </CardActionArea>
    </Card>
  );
};

// #endregion

export default Post;
