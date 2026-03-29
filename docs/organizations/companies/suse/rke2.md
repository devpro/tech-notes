# RKE2

> RKE2 (Rancher Kubernetes Engine v2), also known as RKE Government, is Rancher's next-generation Kubernetes distribution. It is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.

[docs](https://docs.rke2.io/)

## Architecture

![Architecture Overview](https://docs.rke2.io/assets/images/overview-06f8a098e271952bfe5db78b3a0e9b25.png)

[ADRs](https://github.com/rancher/rke2/blob/master/docs/adrs/README.md)

## Components

- containerd
- etcd
- NGINX Ingress Controller
- Canal

## Features

- [Cluster Autoscaler for Rancher with RKE2](https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/cloudprovider/rancher)

## Recipes

### Disable CoreDNS autoscaler

```yaml
apiVersion: helm.cattle.io/v1
kind: HelmChartConfig
metadata:
  name: rke2-coredns
  namespace: kube-system
spec:
  valuesContent: |-
    autoscaler:
      enabled: false
```

### Migration from RKE1 to RKE2

- [Issue #562](https://github.com/rancher/rke2/issues/562)
- [rancher/migration-agent](https://github.com/rancher/migration-agent)

### Windows Clusters support

- [Launching Kubernetes on Windows Clusters](https://docs.ranchermanager.rancher.io/pages-for-subheaders/use-windows-clusters)
- [Create a Windows HostProcess Pod](https://kubernetes.io/docs/tasks/configure-pod-container/create-hostprocess-pod/)

## Installation

### Ansible

- [rancherfederal/rke2-ansible](https://github.com/rancherfederal/rke2-ansible)

### Azure VM

- Review VM specifications (example)
  - Size: Standard_D2s_v3 (2 vcpus, 8 GiB memory)
  - Operating System: Linux (Ubuntu 20.04)
  - Location: West Europe

- Create the VMs
  - From the web UI
  - With Azure CLI: [quick start](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/quick-create-cli), [tutorial](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/tutorial-manage-vm), `samples/scripts/az-vm.sh`
  - With an IaC tool, such as Azure Resource Manager or Terraform

### RKE2 quickstart

- Connect with SSH: `ssh <username>@<ip_or_hostname>`

- Follow the [Quick Start](https://docs.rke2.io/install/quickstart/), see the `samples/scripts/az-rke2.sh`

- Once created and running fine, import the cluster in Rancher, execute the command line to register the cluster and make sure the agent is running fine and the cluster can be seen in Rancher

### Cluster API

- [Cluster API Provider RKE2](https://github.com/rancher-sandbox/cluster-api-provider-rke2)

### Helm chart installed

NAME                | NAMESPACE   | CHART                                        | APP VERSION
--------------------|-------------|----------------------------------------------|------------
rke2-canal          | kube-system | rke2-canal-v3.22.2-build2022050902           | v3.22.2
rke2-coredns        | kube-system | rke2-coredns-1.19.400                        | 1.9.3
rke2-ingress-nginx  | kube-system | rke2-ingress-nginx-4.1.004                   | 1.2.0
rke2-metrics-server | kube-system | rke2-metrics-server-2.11.100-build2021111904 | 0.5.0

### Processes running on a server node

- /usr/local/bin/rke2 server
- containerd -c /var/lib/rancher/rke2/agent/etc/containerd/config.toml -a /run/k3s/containerd/containerd.sock --state /run/k3s/containerd --root /var/lib/rancher/rke2/agent/containerd
- kubelet
- /var/lib/rancher/rke2/data/v1.23.9-rke2r1-eef53a0d1ec2/bin/containerd-shim-runc-v2 -namespace k8s.io -id container_id -address /run/k3s/containerd/containerd.sock
- kube-proxy --cluster-cidr=10.42.0.0/16 --conntrack-max-per-core=0 --conntrack-tcp-timeout-close-wait=0s --conntrack-tcp-timeout-established=0s --healthz-bind-address=127.0.0.1 --hostname-override=vm-bthomas-rke2server --kubeconfig=/var/lib/rancher/rke2/agent/kubeproxy.kubeconfig --proxy-mode=iptables
- kube-scheduler --permit-port-sharing=true --authentication-kubeconfig=/var/lib/rancher/rke2/server/cred/scheduler.kubeconfig --authorization-kubeconfig=/var/lib/rancher/rke2/server/cred/scheduler.kubeconfig --bind-address=127.0.0.1 --kubeconfig=/var/lib/rancher/rke2/server/cred/scheduler.kubeconfig --profiling=false --secure-port=10259
- kube-apiserver
- etcd --config-file=/var/lib/rancher/rke2/server/db/etcd/config
- cloud-controller-manager
- kube-controller-manager
- /cluster-proportional-autoscaler
- /nginx-ingress-controller

### Processes running on a worker node

- /usr/local/bin/rke2 agent
- containerd -c /var/lib/rancher/rke2/agent/etc/containerd/config.toml -a /run/k3s/containerd/containerd.sock --state /run/k3s/containerd --root /var/lib/rancher/rke2/agent/containerd
- kubelet
- /var/lib/rancher/rke2/data/v1.23.9-rke2r1-eef53a0d1ec2/bin/containerd-shim-runc-v2 -namespace k8s.io -id container_id -address /run/k3s/containerd/containerd.sock
- kube-proxy --cluster-cidr=10.42.0.0/16 --conntrack-max-per-core=0 --conntrack-tcp-timeout-close-wait=0s --conntrack-tcp-timeout-established=0s --healthz-bind-address=127.0.0.1 --hostname-override=vm-bthomas-rke2worker1 --kubeconfig=/var/lib/rancher/rke2/agent/kubeproxy.kubeconfig --proxy-mode=iptables
- /nginx-ingress-controller --election-id=ingress-controller-leader --controller-class=k8s.io/ingress-nginx --ingress-class=nginx --configmap=kube-system/rke2-ingress-nginx-controller --validating-webhook=:8443 --validating-webhook-certificate=/usr/local/certificates/cert --validating-webhook-key=/usr/local/certificates/key --watch-ingress-without-class=true
