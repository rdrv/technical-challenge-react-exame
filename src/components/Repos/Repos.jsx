import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import Open from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  card: {
    marginBottom: "30px",
  },
  language: {
    fontWeight: "700",
  },
  stars: {
    display: "flex",
    fontWeight: "700",
  },
  starColor: {
    color: "#ffc100",
  },
  title: {
    wordBreak: "break-word",
  },
}));

export default function Repos(props) {
  useEffect(() => {
    const newRepo = (respos) => {
      setRepo(respos);
    };
    props.subscribe(newRepo);
  });

  const classes = useStyles();

  const [repo, setRepo] = useState(false);

  if (JSON.stringify(repo) === "false") {
    return <></>;
  } else if (JSON.stringify(repo) === "[]") {
    return (
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom={true}
      >
        No starred repositories
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
          Repositories ({repo.length})
        </Typography>
        {repo.map((r, index) => {
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

                <Typography
                  variant="h4"
                  component="h2"
                  className={classes.title}
                >
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
                  variant="outlined"
                  color="primary"
                  href={r.url}
                  target="_blank"
                  startIcon={<Open />}
                >
                  See Repository
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </>
    );
  }
}
