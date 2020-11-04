import './User.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { blueGrey } from "@material-ui/core/colors";


const useStyles = makeStyles(() => ({
  root: {
    margin: '30px auto',
  },
  avatar: {
    backgroundColor: blueGrey[500],
  },
}));

export default function User(props) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img className="avatar" src={props.user.avatar} alt="Avatar" />
          </Avatar>
        }
        title={props.user.fullName}
        subheader={props.user.name}
      />
    </Card>
  );
}