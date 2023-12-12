# Trivy

> **Trivy** is (...) open source security scanner, reliable, fast, and easy to use. Use **Trivy** to find vulnerabilities & IaC misconfigurations, SBOM discovery, Cloud scanning, Kubernetes security risks, and more.
> 
> &mdash; _[trivy.dev](https://trivy.dev/)_

🌐 [trivy.dev](https://trivy.dev/), [docs](https://aquasecurity.github.io/trivy), [code](https://github.com/aquasecurity/trivy)

## CLI cheat sheet

Command                              | Action
-------------------------------------|---------------------------
`trivy version`                      | Displays version
`trivy k8s --report=summary cluster` | Scans a Kubernetes cluster

## Tips

### Run trivy in a container

Set an alias then use trivy as it was installed locally.

```bash
alias trivy="docker run -it --rm -v trivy-cache:/root/.cache/ -v /var/run/docker.sock:/var/run/docker.sock:ro -v $HOME/.kube/config:/root/.kube/config aquasec/trivy:latest"
```
