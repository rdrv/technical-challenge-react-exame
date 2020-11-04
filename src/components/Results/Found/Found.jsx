import User from "../cards/User";
import Repos from "../cards/Repos";
import { Typography } from "@material-ui/core";

function Found(props) {

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

      <User user={props.user} />

      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom={true}
      >
        Repositories ({props.repositories.length})
      </Typography>

      <Repos repositories={props.repositories} />

    </>
  );
}

export default Found;
