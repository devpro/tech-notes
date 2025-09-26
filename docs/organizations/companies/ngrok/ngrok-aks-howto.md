# How to use ngrok with Azure Kubernetes Services (AKS)

## Requirements

Have an azure account with Contributor role + the applications `az` (Azure CLI), `kubectl`, `Helm`

Create a Kubernetes cluster (from Azure Portal for example).

Configure Kubernetes client.

```bash
# retrieves cluster credentials
az aks get-credentials --resource-group rg-xxx --name aks-xxx

# checks cluster query
kubectl get nodes
```

## Setup

Install ngrok Ingress Controller with Helm.

```bash
# adds repo
helm repo add ngrok https://ngrok.github.io/kubernetes-ingress-controller

# creates secret (see https://dashboard.ngrok.com/get-started/your-authtoken and https://dashboard.ngrok.com/api)
kubectl create secret generic --namespace ngrok-ingress-controller ngrok-credentials \
--from-literal=AUTHTOKEN=[AUTHTOKEN] \
--from-literal=API_KEY=[APIKEY]

# installs with Helm (see https://github.com/ngrok/kubernetes-ingress-controller/tree/main/helm/ingress-controller)
helm upgrade --install ngrok-ingress-controller ngrok/kubernetes-ingress-controller \
--namespace ngrok-ingress-controller \
--create-namespace \
--set credentials.secret.name=ngrok-credentials
```

## 2048 game

Add the game workload to the cluster.

```bash
# sets domain (see https://dashboard.ngrok.com/cloud-edge/domains)
export NGROK_DOMAIN=[NGROK_DOMAIN]

# creates demo namespace
kubectl create ns demo

# creates game application
wget -O- -q https://raw.githubusercontent.com/devpro/tech-notes/main/samples/kubernetes/manifests/game-2048.yml \
| sed -e 's/XXX_INGRESS_CLASS/ngrok/g' \
| sed -e "s/XXX_DOMAIN/$NGROK_DOMAIN/g" \
| kubectl apply -n demo -f -
```

Open the web application ("https://$NGROK_DOMAIN") and enjoy the game!

## Rancher

Add Rancher to the cluster.

```bash
# adds Helm repository
helm repo add rancher-latest https://releases.rancher.com/server-charts/latest

# creates the namespace
kubectl create namespace cattle-system

# installs with Rancher
helm install rancher rancher-latest/rancher \
--namespace cattle-system \
--set hostname=$RANCHER_DOMAIN \
--set ingress.ingressClassName=ngrok \
--set tls=external \
--version "2.8.0"

# retrieves the generated password
 kubectl get secret --namespace cattle-system bootstrap-secret -o go-template='{{.data.bootstrapPassword|base64decode}}{{ "\n" }}'
```

Open the web application ("https://$RANCHER_DOMAIN") and enjoy the game!

## Cleanup

Delete the resources.

```bash
# deletes with Helm
helm delete ngrok-ingress-controller --namespace ngrok-ingress-controller
```
