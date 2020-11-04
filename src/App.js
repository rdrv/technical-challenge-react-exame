import "./App.css";
import React, { Component } from "react";
import LogoGitHub from "./assets/img/logo.png";
import { Container, Typography } from "@material-ui/core";
import Form from "./components/Form";
import GitHubData from "./data/GitHub";
import User from "./components/User";
import Repos from "./components/Repos";

class App extends Component {
  constructor() {
    super();
    this.data = new GitHubData();
  }

  render() {
    return (
      <main className="App">
        <Container maxWidth="sm">
          <img className="logo" src={LogoGitHub} alt="Logo" />
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom={true}
            style={{ fontWeight: '700' }}
          >
            GitHub User's Finder
          </Typography>
          <Form search={this.data.getData.bind(this.data)} />
          <User
            user={this.data.user}
            subscribe={this.data.subscribeUser.bind(this.data)}
          />
          <Repos
            repositories={this.data.repositories}
            subscribe={this.data.subscribeRepositories.bind(this.data)}
          />
        </Container>
      </main>
    );
  }
}

export default App;
