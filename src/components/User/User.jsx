import "./User.css";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Open from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles(() => ({
  root: {
    margin: "30px auto",
  },
  avatar: {
    boxShadow: "2px 2px 2px rgba(0,0,0,.5)",
  },
}));

export default function User(props) {
  useEffect(() => {
    const newUser = (user) => {
      setUser(user);
    };
    props.subscribe(newUser);
  });

  const [user, setUser] = useState(false);

  const classes = useStyles();

  if (JSON.stringify(user) === "false") {
    return <></>;
  } else if (JSON.stringify(user) === "{}") {
    return (
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom={true}
      >
        User not found.
      </Typography>
    );
  } else {
    return (
      <>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom={true}
        >
          User
        </Typography>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img className="avatar" src={user.avatar} alt="Avatar" />
              </Avatar>
            }
            title={user.fullName}
            subheader={user.name}
            action={
              <IconButton
                aria-label="settings"
                href={user.url}
                target="_blank"
                color="primary"
              >
                <Open />
              </IconButton>
            }
          />
        </Card>
      </>
    );
  }
}
