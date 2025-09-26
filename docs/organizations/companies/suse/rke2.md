# RKE2

Disable CoreDNS autoscaler

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
