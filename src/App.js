import "./App.css";
import LogoGitHub from "./assets/img/logo.png";
import { Container, Typography } from "@material-ui/core";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  return (
    <main className="App">
      <Container maxWidth="sm">
        <img className="logo" src={LogoGitHub} alt="Logo" />
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom={true}
        >
          GitHub User's Finder
        </Typography>
        <Form />
        <Results />
      </Container>
    </main>
  );
}

export default App;
