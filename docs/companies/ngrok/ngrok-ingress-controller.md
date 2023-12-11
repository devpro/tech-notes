# ngrok Ingress Controller for Kubernetes

🌐 [docs](https://ngrok.com/docs/using-ngrok-with/k8s/), [code](https://github.com/ngrok/kubernetes-ingress-controller)

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
