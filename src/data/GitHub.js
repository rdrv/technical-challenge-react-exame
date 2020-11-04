class GitHubData {
  constructor() {
    this.user = {};
    this.repositories = [];
    this.client_id = "6aff58b3d3b2f648bd13";
    this.client_secrets = "39ea98976336a0162f01edb94e59abd03df7152b";
    this._subscribersUser = [];
    this._subscribersRepositories = [];
  }

  // user methods

  subscribeUser(func) {
    this._subscribersUser.push(func);
  }

  notifyUser() {
    this._subscribersUser.forEach((func) => func(this.user));
  }

  setUser(data) {
    if (data !== undefined) {
      this.user = {
        fullName: data.name,
        name: data.login,
        avatar: data.avatar_url,
        url: data.html_url
      };
    } else {
      this.user = {};
    }
    this.notifyUser();
  }

  // repository methods

  subscribeRepositories(func) {
    this._subscribersRepositories.push(func);
  }

  notifyRepositories() {
    this._subscribersRepositories.forEach((func) => func(this.repositories));
  }

  setRepo(data) {
    if (data !== undefined) {
      const repoWithStars = data.filter((r) => r.stargazers_count !== 0);
      if (repoWithStars) {
        this.repositories = repoWithStars.map((r) => {
          return {
            language: r.language,
            stars: r.stargazers_count,
            name: r.name,
            description: r.description,
            url: r.svn_url,
          };
        });
      } else {
        this.repositories = [];
      }
    } else {
      this.repositories = false;
    }
    this.notifyRepositories();
  }

  // fetch github data

  getData(user) {
    const fetchUrl = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrets=${this.client_secrets}`;

    fetch(fetchUrl)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => {
        this.setUser(res);
        return res;
      })
      .then((res) => {
        fetch(res.repos_url)
          .then((res) => {
            if (res.ok) return res.json();
          })
          .then((res) => {
            this.setRepo(res);
          });
      })
      .catch((err) => {
        this.setRepo(undefined);
        return;
      });
  }
}

export default GitHubData;
