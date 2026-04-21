# Rancher

> Rancher is a container management platform built for organizations that deploy containers in production.
> Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams.

[rancher.com](https://rancher.com/), [code](https://github.com/rancher/rancher), [docs](https://ranchermanager.docs.rancher.com)

## Presentation

![Rancher platform](https://rancher.com/docs/img/rancher/platform.png)

[ranchermanager.docs.rancher.com](https://ranchermanager.docs.rancher.com/reference-guides/rancher-manager-architecture)

## Content

* [Applications](applications.md)
* [Architecture](architecture.md)
* [Authentication](authentication.md)
* [Automation](automation.md)
* [Extensions](extensions.md)
* [Getting started](gettingstarted.md)
* [Installation](installation.md)
* [Migrations](migrations.md)
* [Operations](operations.md)
* [Provisioning](provisioning.md)
* [Training](training.md)

## Releases

Version                                                             | Date       | Links
--------------------------------------------------------------------|------------|--------------------------------------------------------------------
[**2.7.5**](https://github.com/rancher/rancher/releases/tag/v2.7.6) | 2023-07-31 | [Annoucement](https://forums.rancher.com/t/rancher-release-v2-7-6/41410)
[**2.7.0**](https://github.com/rancher/rancher/releases/tag/v2.7.0) | 2022-11-16 | [Annoucement](https://forums.rancher.com/t/rancher-release-v2-7-0/39478)
[**2.6.0**](https://github.com/rancher/rancher/releases/tag/v2.6.0) | 2021-08-31 | [Annoucement](https://forums.rancher.com/t/rancher-release-v2-6-0/21048)

[See more](versions.md)

## Goodies

* [Rancher Best Practices](https://www.suse.com/support/kb/doc/?id=000020105)
* [Rancher Brand Guidelines & Resources](https://www.rancher.com/brand-guidelines)
* [Rancher Forums](https://forums.rancher.com/)
* [Rancher UI DevKit](https://rancher.github.io/dashboard/)
* [Support Matrix for Rancher](https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-7-5/)
* Non-official: [Rancher Barn](https://github.com/rancher/barn) (recipes)

## Alternatives

* [Kubermatic](https://github.com/kubermatic/kubermatic)

## Quick start

* [Get Started with SUSE Rancher in 2 Easy Steps](https://www.suse.com/products/suse-rancher/get-started/)
(see also [Installing Rancher on a Single Node Using Docker](https://rancher.com/docs/rancher/v2.6/en/installation/other-installation-methods/single-node-docker/))

```bash
# creates Rancher container
sudo docker run --privileged -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher

# manual: open http://localhost and follow instructions to login, at the end download the kubeconfig file

# sets kubectl to the Kubernetes cluster and displays the single node
export KUBECONFIG=local.yaml
kubectl get nodes
```

## Operations

* [Rancher Upgrade Checklist](https://www.suse.com/support/kb/doc/?id=000020061)

## Learning

* [Rancher Manager 2.8 for Rancher Prime Operations](https://www.suse.com/training/course/ran201v2.8)
* [Rancher Manager 2.7 for Rancher Prime Deployment](https://www.suse.com/training/course/ran211v2.7)

## Tips

Q. Is it possible to change the rancher/shell to another image?

A. Yes, it's a setting in global settings. It can also be set with the environment variable on rancher CATTLE_SHELL_IMAGE=my/customshell:tag
