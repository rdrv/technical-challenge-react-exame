import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: "30px",
  },
  stars: {
    display: "flex",
  },
}));

export default function Repos(props) {
  const classes = useStyles();

  return(
    props.repositories.map((r, index) => {
      return (
        <Card className={classes.card} key={index}>
          <CardContent>
            <Typography
              variant="subtitle2"
              component="h4"
              color="textSecondary"
              gutterBottom={true}
            >
              {r.language}
            </Typography>
  
            <Typography
              color="textSecondary"
              variant="subtitle1"
              component="h3"
              className={classes.stars}
            >
              <StarBorderIcon /> {r.stars}
            </Typography>
  
            <Typography variant="h4" component="h2">
              {r.name}
            </Typography>
  
            <Typography color="textSecondary" variant="subtitle1" component="h3">
              {r.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              href={r.url}
              target="_blank"
            >
              Go to Repo
            </Button>
          </CardActions>
        </Card>
      );
    })
  )

}
