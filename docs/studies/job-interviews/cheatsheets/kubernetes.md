# Kubernetes

## Practice setup

Use Minikube to spin up a local Kubernetes cluster for hands-on drills.

## Troubleshooting scenarios
  
Break things intentionally by killing pods or spiking CPU usage to simulate failures.

Fix quickly:

```bash
kubectl get pods
kubectl describe pod <pod-name>
kubectl get pod <pod-name> -o yaml
kubectl apply -f <config.yaml>
```

## Monitoring Tools

Brush up on Prometheus and Grafana.
Simulate alerts by creating high-load scenarios and tuning dashboards.
