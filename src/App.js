import "./App.css";
import LogoGitHub from "./assets/img/logo.png";
import User from "./components/Card";
import Repos from "./components/Repos";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

function App() {
  return (
    <main className="App">
      <Container maxWidth="sm">
        <img className="logo" src={LogoGitHub} />

        <Typography variant="h3" component="h1" align="center" gutterBottom={true}>
          GitHub User's Finder
        </Typography>

        <form className="Form">
          <TextField
            id="user"
            label="User's name"
            variant="outlined"
            autoComplete="off"
            margin="normal"
            fullWidth
          />
          <Button
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<SearchIcon />}
          >
            Find User
          </Button>
        </form>

        <Typography variant="h4" component="h2" align="center" gutterBottom={true}>
          User
        </Typography>

        <User />

        <Typography variant="h4" component="h2" align="center" gutterBottom={true}>
          Repositories (10)
        </Typography>

        <Repos />

      </Container>
    </main>
  );
}

export default App;
