# ngrok Ingress Controller for Kubernetes

> The ngrok Ingress Controller for Kubernetes is our official open-source controller for adding public and secure ingress traffic to your k8s services. You can think of the ngrok Ingress Controller as ngrok packaged as an idiomatic k8s controller — deployed via a simple helm chart, configurable via standard k8s Ingress object (using the kind: Ingress construct), and compatible with k8s best practices.
>
> &mdash; _[ngrok.com/docs/using-ngrok-with/k8s](https://ngrok.com/docs/using-ngrok-with/k8s/)_

🌐 [docs](https://ngrok.com/docs/using-ngrok-with/k8s/), [code](https://github.com/ngrok/kubernetes-ingress-controller)

## Introduction

ngrok Ingress Controller was announced in June of 2023, read the [blog post](https://ngrok.com/blog-post/ngrok-k8s) to know more about it.

## Installation

We can install ngrok Ingress Controller with the official [Helm chart](https://ngrok.github.io/kubernetes-ingress-controller/) ([code](https://github.com/ngrok/kubernetes-ingress-controller/tree/main/helm/ingress-controller)).

```bash
# adds ngrok's Helm repository
helm repo add ngrok https://ngrok.github.io/kubernetes-ingress-controller

# installs ngrok's chart
helm install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
  --namespace $NAMESPACE \
  --create-namespace \
  --set credentials.apiKey=$NGROK_API_KEY \
  --set credentials.authtoken=$NGROK_AUTHTOKEN
```

## Integrations

* [Rancher](https://ngrok.com/docs/integrations/rancher/k8s/)
