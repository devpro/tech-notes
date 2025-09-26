# Contributing

This website is built using [Docusaurus](https://docusaurus.io/) ([facebook/docusaurus](https://github.com/facebook/docusaurus)), a modern static website generator.

## Run locally

Make sure [Node.js](https://nodejs.org/en/download/) (version 18.0 or above) is installed.

Install the dependencies:

```bash
npm install
```

Start the local development server (by default it opens a window in the browser on [localhost:3000](http://localhost:3000/)):

```bash
npm start
```

From there, you can edit the files and see changes in live in the browser.

To see the search in action, build and use the results to run the website:

```bash
npm run build
npm run serve
```

## Lint before committing

Reproduce locally GitLab jobs:

```bash
mkdir -p .gitlab/runner/local
docker run --rm --name gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/.gitlab/runner/local/config:/etc/gitlab-runner -v $PWD:$PWD --workdir $PWD gitlab/gitlab-runner exec docker lint-markdown
docker run --rm --name gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/.gitlab/runner/local/config:/etc/gitlab-runner -v $PWD:$PWD --workdir $PWD gitlab/gitlab-runner exec docker lint-yaml
```
