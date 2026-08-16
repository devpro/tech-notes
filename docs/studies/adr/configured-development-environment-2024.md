# Cloud Development Environments (2024)

This study is strongly related to the subject of Cloud Development Environment (CDE), started in September 2024.

## Context and problem statement

As a trainer, I need to provide a configured development environment to the trainees so the training sessions can be efficient.

As a manager, I want to enforce recommended code & security practices so the developer's time is optimized and the risk of losing sensitive information is minimized.

## Requirements

- Development dependencies can be configured (SDK, runtimes)
- Container can be executed with a managed lifecycle
- IDE (Integrated Development Environment), such as Visual Studio Code can be used in the web or locally

## Considered options

Name                                                        | Sources                                                     | Deployment              | Free tier
------------------------------------------------------------|-------------------------------------------------------------|-------------------------|----------
[Coder](https://coder.com/)                                 | [:octocat:](https://github.com/coder/code-server) _★ 67.6k_ | Kubernetes              | Community version
[CodeSandbox](https://codesandbox.io/)                      | 🚫                                                          | SaaS                    | 40 hours/month
[Devbox](https://www.jetify.com/devbox)                     | [:octocat:](https://github.com/jetify-com/devbox) _★ 8.3k_  | Shell script            | No restriction/limitation
[devenv](https://devenv.sh/)                                | [:octocat:](https://github.com/cachix/devenv) _★ 4k_        | Shell script            | No restriction/limitation
[DevPod](https://devpod.sh/)                                | [:octocat:](https://github.com/loft-sh/devpod) _★ 8.6k_     | Desktop & CLI apps      | No restriction/limitation
[GitHub Codespaces](https://github.com/features/codespaces) | 🚫                                                          | SaaS                    | 30 hours/month (4 cores)
[Gitpod](https://www.gitpod.io/)                            | [:octocat:](https://github.com/gitpod-io/gitpod) _★ 12.7k_  | SaaS / AWS (Enterprise) | 50 hours/month
[Strong Network](https://strong.network/)                   | 🚫                                                          | SaaS / Kubenertes       | 5 users (free community edition)

## Decision outcome

⛵ Experimentation in progress!

- 🔴 **DevPod** doesn't work with Docker on Windows 10 + Ubuntu 20.04 (WSL)
- 🟠 **GitHub Codespaces** can quickly be expensive with a limited featureset
- 🟢 **Strong Network** works well and offers the most advanced professional features (security, user management, collaboration)
