import { Typography } from "@material-ui/core";

function NotFound() {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom={true}
      >
        No matches found. Try again!
      </Typography>
    </>
  );
}

export default NotFound;
