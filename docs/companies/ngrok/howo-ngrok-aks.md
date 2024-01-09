# How to use ngrok with Azure Kubernetes Services (AKS)

Requirements: an Azure account with Contributor role + the applications `az` (Azure CLI), `kubectl`, `Helm`

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

# sets ngrok authentication (see https://dashboard.ngrok.com/get-started/your-authtoken, https://dashboard.ngrok.com/api)
export NGROK_AUTHTOKEN=[AUTHTOKEN]
export NGROK_APIKEY=[APIKEY]

# installs with Helm (see https://github.com/ngrok/kubernetes-ingress-controller/tree/main/helm/ingress-controller)
helm upgrade --install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
--namespace ngrok-ingress-controller \
--create-namespace \
--set credentials.apiKey=$NGROK_APIKEY \
--set credentials.authtoken=$NGROK_AUTHTOKEN
```

Create a demo workload in the cluster

```bash
# sets domain (see https://dashboard.ngrok.com/cloud-edge/domains)
export NGROK_DOMAIN=[NGROK_DOMAIN]

# creates demo namespace
kubectl create ns demo

# creates game application
wget -O- -q https://raw.githubusercontent.com/devpro/information-technology-guide/main/samples/kubernetes/manifests/game-2048.yml \
| sed -e 's/XXX_INGRESS_CLASS/ngrok/g' \
| sed -e "s/XXX_DOMAIN/$NGROK_DOMAIN/g" \
| kubectl apply -n demo -f -
```

Open the web application ("https://$NGROK_DOMAIN") and enjoy the game!
