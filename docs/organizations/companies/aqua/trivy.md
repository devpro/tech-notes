# Trivy

> Use Trivy to find vulnerabilities (CVE) & misconfigurations (IaC) across code repositories, binary artifacts, container images, Kubernetes clusters, and more

🌐 [trivy.dev](https://trivy.dev/), [code](https://github.com/aquasecurity/trivy), [docs](https://aquasecurity.github.io/trivy)

## CLI cheat sheet

Command                                              | Action
-----------------------------------------------------|---------------------------
`trivy version`                                      | Displays version
`trivy image --severity HIGH,CRITICAL alpine:3.13.4` | Scans image alpine:3.13.4 and only displays severity HIGH and CRITICAL
`trivy k8s --report=summary cluster`                 | Scans a Kubernetes cluster

## Getting started

### Run trivy in a container

Set an alias then use trivy as it was installed locally.

```bash
alias trivy="docker run -it --rm -v trivy-cache:/root/.cache/ -v /var/run/docker.sock:/var/run/docker.sock:ro -v $HOME/.kube/config:/root/.kube/config aquasec/trivy:latest"
```
