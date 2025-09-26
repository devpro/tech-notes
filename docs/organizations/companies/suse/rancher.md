# Rancher

> Rancher is a container management platform built for organizations that deploy containers in production. Rancher makes it easy to run Kubernetes everywhere, meet IT requirements, and empower DevOps teams.

→ [rancher.com](https://rancher.com/), [docs](https://rancher.com/docs/rancher/v2.6/en/)

## Presentation

![Rancher platform](https://rancher.com/docs/img/rancher/platform.png)

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

A. Yes, it’s a setting in global settings. It can also be set with the environment variable on rancher CATTLE_SHELL_IMAGE=my/customshell:tag
