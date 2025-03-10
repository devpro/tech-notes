# GitLab installation

> You can install GitLab on most GNU/Linux distributions, on several cloud providers, and in Kubernetes clusters.
> To get the best experience, you should balance performance, reliability, ease of administration (backups, upgrades, and troubleshooting) with the cost of hosting.

🌐 [Install GitLab](https://docs.gitlab.com/ee/install/)

📝 [GitLab Self-Managed subscription](https://docs.gitlab.com/ee/subscriptions/self_managed/)

## Design

* [Reference architectures](https://docs.gitlab.com/ee/administration/reference_architectures/)
* [Installation requirements](https://docs.gitlab.com/ee/install/requirements.html)

## Install

### Linux package (Omnibus)

🌐 [docs/omnibus](https://docs.gitlab.com/omnibus/)

Omnibus GitLab is a customized fork of the Omnibus project from Chef.

### Container

🌐 [docs/install/docker](https://docs.gitlab.com/ee/install/docker/index.html)

Images (on Docker Hub):

* [gitlab/gitlab-ee](https://hub.docker.com/r/gitlab/gitlab-ee/)
* [gitlab/gitlab-ce](https://hub.docker.com/r/gitlab/gitlab-ce/)

### Kubernetes

#### Helm chart

🌐 [docs/charts](https://docs.gitlab.com/charts/)

#### Kubernetes Operator

🌐 [docs/operator](https://docs.gitlab.com/operator/)

## Infrastruction automation

### GitLab Environment Toolkit

> The GitLab Environment Toolkit (GET) is a set of opinionated Terraform and Ansible scripts to assist with deploying scaled self-managed GitLab environments following the Reference Architectures

🌐 [gitlab-org/gitlab-environment-toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit)

📝 [GET Deployment Workshop](https://gitlab.com/gitlab-org/professional-services-automation/tools/implementation/get-deployment-workshop), [GitLab Deployment Workshop](https://gitlab.com/gitlab-org/professional-services-automation/tools/implementation/gitlab-deployment-workshop/)

### Chef Cookbooks

🌐 [gitlab-cookbooks](https://gitlab.com/gitlab-cookbooks)

## Configure

🌐 [docs/administration/configure](https://docs.gitlab.com/ee/administration/configure.html)

## Maintain

🌐 [docs/administration/operations](https://docs.gitlab.com/ee/administration/operations/)

📝 [Upgrading GitLab](https://docs.gitlab.com/ee/update/)

### Backup & restore

🌐 [docs/administration/backup_restore](https://docs.gitlab.com/ee/administration/backup_restore/index.html)

📝 [docs/development/backup_and_restore](https://docs.gitlab.com/ee/development/backup_and_restore/backup_gitlab.html)

Tools:

* `gitlab-backup` for Linux package and Docker installation methods
* `backup-utility` for Kubernetes installations

## Monitor

🌐 [docs/administration/monitoring](https://docs.gitlab.com/ee/administration/monitoring/)

📝 [Performance bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html)

## Secure

🌐 [docs/security](https://docs.gitlab.com/ee/security/)
