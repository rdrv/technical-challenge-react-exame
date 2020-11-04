import "./App.css";
import LogoGitHub from "./assets/img/logo.png";
import { Container, Typography } from "@material-ui/core";
import Form from "./components/Form";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  // states
  const [haveUser, setHaveUser] = useState("");
  const [haveRepository, setHaveRepository] = useState(false);
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  // fetch github api

  function search(user) {

    const usuario = user;
    const client_id = "6aff58b3d3b2f648bd13";
    const client_secrets = "39ea98976336a0162f01edb94e59abd03df7152b";
    const fetchUrl = `https://api.github.com/users/${usuario}?client_id=${client_id}&client_secrets=${client_secrets}`;

    fetch(fetchUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setHaveUser(false);
        }
      })
      .then((res) => {
        setHaveUser(true);
        setUser({
          fullName: res.name,
          name: res.login,
          avatar: res.avatar_url,
        });
        return res;
      })
      .then((res) => {
        fetch(res.repos_url)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              setHaveRepository(false);
            }
          })
          .then((res) => {
            const repoWithStars = res.filter((r) => r.stargazers_count !== 0);
            if (repoWithStars.length !== 0) {
              setHaveRepository(true);
              setRepositories(
                repoWithStars.map((r) => {
                  return {
                    language: r.language,
                    stars: r.stargazers_count,
                    name: r.name,
                    description: r.description,
                    url: r.svn_url,
                  };
                })
              );
            } else {
              setHaveRepository(false);
            }
          });
      })
      .catch((err) => {
        setHaveUser(false);
        return;
      });
  }

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
        <Form search={search} />
        <Results
          haveUser={haveUser}
          user={user}
          haveRepository={haveRepository}
          repositories={repositories}
        />
      </Container>
    </main>
  );
}

export default App;
