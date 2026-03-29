# K3s

> K3s is a CNCF sandbox project that delivers a lightweight yet powerful certified Kubernetes distribution

[k3s.io](https://k3s.io/), [docs](https://rancher.com/docs/k3s/latest/en/), [code](https://github.com/k3s-io/k3s),
[suse.com/products/k3s](https://www.suse.com/products/k3s/)

## Architecture

![How K3s works](https://k3s.io/img/how-it-works-k3s-revised.svg)

Single binary:

* [containerd](https://containerd.io/)
* [flannel](https://github.com/flannel-io/flannel)
* [CoreDNS](https://coredns.io/)
* iptables
* [SQLite](https://www.sqlite.org/)
* [klipper-lb](https://github.com/k3s-io/klipper-lb)
* [Helm](https://helm.sh/)
* [traefik](https://traefik.io/) Ingress Controller

## Quick start

[Quick-Start Guide](https://rancher.com/docs/k3s/latest/en/quick-start/)

```bash
# runs installation script
wget -q -O - https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash

# creates a cluster
k3d cluster create firstcluster

# displays nodes
kubectl get nodes

# deletes a cluster
k3d cluster delete firstcluster
```

## Knowledge

* [Advanced Options and Configuration](https://rancher.com/docs/k3s/latest/en/advanced/)
  * Auto-deploying manifests

## Cluster API

* [zawachte/cluster-api-k3s](https://github.com/zawachte/cluster-api-k3s)

## Infrastructure automation (IaC)

* [rlex/ansible-role-k3s](https://github.com/rlex/ansible-role-k3s)
