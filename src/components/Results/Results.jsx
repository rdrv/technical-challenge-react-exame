import Found from "./Found";
import NotFound from "./NotFound";
import { useState } from "react";
import Empty from "./Empty";

// function fetchGitHub(user) {
    
//   const usuario = user;
//   const client_id = "6aff58b3d3b2f648bd13";
//   const client_secrets = "39ea98976336a0162f01edb94e59abd03df7152b";
//   const fetchUrl = `https://api.github.com/users/${usuario}?client_id=${client_id}&client_secrets=${client_secrets}`;

//   fetch(fetchUrl)
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res.login);
//       console.log(res.name);
//       console.log(res.avatar_url);
//       fetch(res.repos_url)
//         .then((r) => r.json())
//         .then((r) => {
//           r.map((e) => {
//             console.log("--");
//             console.log(e.language);
//             console.log(e.stargazers_count);
//             console.log(e.name);
//             console.log(e.description);
//             console.log(e.svn_url);
//             console.log("--");
//           });
//         });
//     });
// }

function Results() {
  // search state
  const [haveResults, setHaveResults] = useState(true);

  // user state
  const [user, setUser] = useState({
    fullName: "Renato Silva Diniz",
    name: "renatosilvadiniz",
    avatar: "https://avatars2.githubusercontent.com/u/3652932?v=4",
  });

  // repositories state
  const [repositories, setRepositories] = useState([
    {
      language: "CSS",
      stars: 2,
      name: "atomity.css",
      description:
        "[WIP] A small library of utility classes, that follows the Atomic CSS principles.",
      url: "https://github.com/jedrzejchalubek/atomity.css",
    },
  ]);

  // conditional rendering

  if (haveResults) return <Found user={user} repositories={repositories} />;
  if (haveResults === false) return <NotFound />;
  if (haveResults === "") return <Empty />;
}

export default Results;
