const ORG = 'pocket-software';

export const getRepos = async () => {
  return fetch(`https://api.github.com/orgs/${ORG}/repos`).then((res) =>
    res.json(),
  );
};
