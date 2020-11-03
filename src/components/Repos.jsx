import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

export default function SimpleCard() {

  return (
    <Card>
      <CardContent>
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <Typography variant="h5" component="h2">
          Repo name
        </Typography>
        <Typography color="textSecondary">
          Repo description
        </Typography>
      </CardContent>
      <CardActions>
      <Button
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Go to Repo
          </Button>
      </CardActions>
    </Card>
  );
}
