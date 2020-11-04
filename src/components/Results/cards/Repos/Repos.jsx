import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import NotFound from "../../NotFound";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: "30px",
  },
  language: {
    fontWeight: '700'
  },
  stars: {
    display: "flex",
    fontWeight: '700'
  },
  starColor: {
    color: "#ffc100",
  },
  title: {
    wordBreak: "break-word",
  },
}));

export default function Repos(props) {
  const classes = useStyles();
  function Cards(props) {
    return props.repositories.map((r, index) => {
      return (
        <Card className={classes.card} key={index}>
          <CardContent>
            <Typography
              variant="subtitle2"
              component="h4"
              color="textSecondary"
              gutterBottom={true}
              className={classes.language}
            >
              {r.language}
            </Typography>

            <Typography
              color="textSecondary"
              variant="subtitle1"
              component="h3"
              className={classes.stars}
            >
              <StarIcon className={classes.starColor} /> {r.stars}
            </Typography>

            <Typography variant="h4" component="h2" className={classes.title}>
              {r.name}
            </Typography>

            <Typography
              color="textSecondary"
              variant="subtitle1"
              component="h3"
            >
              {r.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              href={r.url}
              target="_blank"
            >
              See Repository
            </Button>
          </CardActions>
        </Card>
      );
    });
  }

  console.log(props.haveRepository);

  if (props.haveRepository) {
    return (
      <>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom={true}
        >
          Repositories ({props.repositories.length})
        </Typography>
        <Cards repositories={props.repositories} />
      </>
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
          Repositories (0)
        </Typography>
        <NotFound />
      </>
    );
  }
}
