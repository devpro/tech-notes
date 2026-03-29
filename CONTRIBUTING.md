# Contributing

[![GitLab Pipeline Status](https://gitlab.com/devpro-labs/enablement/tech-notes/badges/main/pipeline.svg)](https://gitlab.com/devpro-labs/enablement/tech-notes/-/pipelines)

This website is built using [Docusaurus](https://docusaurus.io/) ([facebook/docusaurus](https://github.com/facebook/docusaurus)), a modern static website generator.

## Run locally

Make sure [Node.js](https://nodejs.org/en/download/) (LTS or above) is installed.

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

## Customization

> [!IMPORTANT]
> Make sure to review this customizations when doing upgrades

### Table of contents width

Idea found on [discussion #8799](https://github.com/facebook/docusaurus/discussions/8799):

```bash
npm run swizzle @docusaurus/theme-classic -- DocItem/Layout
```

Files are in `src/theme/DocItem/Layout`.

> [!TIP]
> Run the command to see what is possible to swizzle:
>
> ```bash
> npm run swizzle @docusaurus/theme-classic -- --list
> ```

## Lint before committing

Check YAML files:

```bash
docker run --rm -v "$(pwd)":/data cytopia/yamllint .
```

Check Markdown files:

```bash
docker run --rm -v "$(pwd)":/workdir davidanson/markdownlint-cli2 "**/*.md"
```

Reproduce locally GitLab jobs:

```bash
mkdir -p .gitlab/runner/local
docker run --rm --name gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/.gitlab/runner/local/config:/etc/gitlab-runner -v $PWD:$PWD --workdir $PWD gitlab/gitlab-runner exec docker lint-markdown
docker run --rm --name gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/.gitlab/runner/local/config:/etc/gitlab-runner -v $PWD:$PWD --workdir $PWD gitlab/gitlab-runner exec docker lint-yaml
```
