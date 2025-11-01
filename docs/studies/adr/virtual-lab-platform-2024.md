# Virtual lab platforms (2024)

ADR started in June 2024, last updated October 2025.

## Context and problem statement

As a technical writer, I would like to have a platform (similar to what was Katacoda) to create content so that I can provide workshops and exercises.

## Requirements

* Scenarios are written is Markdown files, stored in a git repository
* A CLI makes possible to automate the content lifecycle
* A web interface gives access to the instructions and multiple terminals (similar to what Katacoda was providing, with instructions on a side and a terminal on the other side)
* Labs can be executed in Virtual Machines, that are created when a user starts and automatically destroyed when the user completes or after a given period
* A web application, running in the labs, can be accessed from the user browser

## Considered options

Name                                      | GitHub                                             | Deployment | Free tier
------------------------------------------|----------------------------------------------------|------------|----------------------------------------------------------
[CloudShare](https://www.cloudshare.com/) | 🟡 [cloudshare](https://github.com/cloudshare)     | SaaS       | None
[Heropa](https://www.heropa.com/)         | 🚫                                                 | SaaS       | Free trial
[HobbyFarm](https://github.com/hobbyfarm) | 🟢 [hobbyfarm](https://github.com/hobbyfarm)       | Kubernetes | No restriction/limitation
[instruqt](https://instruqt.com/)         | 🟡 [instruqt](https://github.com/instruqt)         | SaaS       | No self-registering but quick replies on contact messages
[iximiuz Labs](https://labs.iximiuz.com/) | 🟡 [iximiuz](https://github.com/iximiuz)           | SaaS       | 2h/day w/ limitations
[Killercoda](https://killercoda.com/)     | 🟡 [killercoda](https://github.com/killercoda)     | SaaS       | Free membership but slow performance
[KodeKloud](https://kodekloud.com/)       | 🟡 [kodekloudhub](https://github.com/kodekloudhub) | SaaS       | None (but some content is open to everyone)
[LabEx](https://labex.io/)                | 🟡 [labex-labs](https://github.com/labex-labs)     | SaaS       | Free hands-on labs & 3 VMs/day
[Strigo](https://www.strigo.io/)          | 🟡 [strigo](https://github.com/strigo)             | SaaS       | None

## Decision outcome

⛵ Experimentation in progress!

* 🟠 **HobbyFarm** is the only open-source solution but the attempt to install it failed and small project with unclear governance, poor documentation & unverified code quality
* 🟢 **Instruqt** works well, is used by most IT companies (_de facto_ industry standard), follows IT standard, fair pricing, excellent collaboration but no self-hosted option
* 🟡 **iximiuz Labs** is a great initiative of knowledge sharing, very nice UI but the templates are not working (cannot create content) and managed by one individual
* 🟡 **Killercoda** is used by the community (Kubernetes project in particular) but is only for public content
* 🔴 **KodeKloud** is an excellent e-learning platform but not opened for contribution
