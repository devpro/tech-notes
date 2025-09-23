# Virtual lab platform ADR - June, 2024

## Context and problem statement

As a technical writer, I would like to have a platform (similar to what was Katacoda) to create content so that I can provide workshops and exercises.

## Requirements

* Scenarios are written is Markdown files, stored in a git repository
* A CLI makes possible to automate the content lifecycle
* A web interface gives access to the instructions and multiple terminals (similar to what Katacoda was providing, with instructions on a side and a terminal on the other side)
* Labs can be executed in Virtual Machines, that are created when a user starts and automatically destroyed when the user completes or after a given period
* A web application, running in the labs, can be accessed from the user browser

## Considered options

Name                                       | Sources                                   | Deployment | Free tier
-------------------------------------------|-------------------------------------------|------------|--------------------------------------------
[HobbyFarm](https://github.com/hobbyfarm)  | [:octocat:](https://github.com/hobbyfarm) | Kubernetes | No restriction/limitation
[instruqt](https://instruqt.com/)          | 🚫                                        | SaaS       | None
[iximiuz Labs](https://labs.iximiuz.com/)  | 🚫                                        | SaaS       | 2h/day w/ limitations
[Killercoda](https://killercoda.com/learn) | 🚫                                        | SaaS       | Free membership but slow performance
[KodeKloud](https://kodekloud.com/)        | 🚫                                        | SaaS       | None (but some content is open to everyone)

## Decision outcome

⛵ Experimentation in progress!

* 🟠 **HobbyFarm** is the only open-source solution but the attempt to install it failed and small project with unclear governance, poor documentation & unsure about code quality
* 🟢 **Instruqt** works well, is used by most IT companies (_de facto_ industry standard), follows IT standard, fair pricing but no free tier nor self-hosted option
* 🟡 **iximiuz Labs** is a great initiative of knowledge sharing, very nice UI but the templates are not working (cannot create content)
* 🟡 **Killercoda** is used by the community (Kubernetes project) but is only for public content
* 🔴 **KodeKloud** is an excellent e-learning platform but not opened for contribution
