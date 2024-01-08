# How to use ngrok with Azure Kubernetes Services (AKS)

Requirements: Azure account with Contributor role, kubectl, Helm

Open Azure Portal, then create a Kubernetes cluster.

Configure Kubernetes client.

```bash
# retrieves cluster credentials
az aks get-credentials --resource-group rg-xxx --name aks-xxx

# checks cluster query
kubectl get nodes
```

Install with Helm.

```bash
# adds repo
helm repo add ngrok https://ngrok.github.io/kubernetes-ingress-controller

# sets ngrok authentication (https://dashboard.ngrok.com/get-started/your-authtoken, https://dashboard.ngrok.com/api)
export NGROK_AUTHTOKEN=[AUTHTOKEN]
export NGROK_API_KEY=[API_KEY]

# installs with Helm
helm upgrade --install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
--namespace ngrok-ingress-controller \
--create-namespace \
--set credentials.apiKey=$NGROK_API_KEY \
--set credentials.authtoken=$NGROK_AUTHTOKEN
```

Create a demo workload in the cluster

```bash
# sets domain (https://dashboard.ngrok.com/cloud-edge/domains)
```
