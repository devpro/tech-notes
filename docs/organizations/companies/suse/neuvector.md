# NeuVector

## Scanner in CI pipelines

### GitLab

Updates from [plugin](https://gitlab.com/neuvector/gitlab-plugin) (MR are not looked at...):

* Scan a private registry

```yaml
# GitLab Project > Settings > CI/CD > Variables > CONTAINER_REGISTRY_USER & IMAGE_REGISTRY_PASSWORD

include:
  - remote: 'https://gitlab.com/neuvector/gitlab-plugin/-/raw/master/scan.yml'

stages:
  - scan

neuvector_scan:
  stage: scan
  variables:
    image_registry_url: "https://registry-1.docker.io"
    image_registry_user: $CONTAINER_REGISTRY_USER
    image_registry_password: $IMAGE_REGISTRY_PASSWORD
    image_repo: "library/alpine"
    image_tag: "3.6"
    nv_registry_user: $CONTAINER_REGISTRY_USER
    nv_registry_password: $IMAGE_REGISTRY_PASSWORD
    scan_layers: "false"
    high_vul_to_fail: 5
    medium_vul_to_fail: 9
    vul_names_to_fail: "CVE-2020-1971, CVE-2020-1972"
```
