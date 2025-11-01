# Skopeo

> skopeo is a command line utility that performs various operations on container images and image repositories

🌐 [code](https://github.com/containers/skopeo)

## Examples

- Display container image size (without pulling the image)

```bash
skopeo inspect docker://cgr.dev/chainguard/mongodb:latest | jq '.LayersData[] | .Size' | awk '{
    size=$1;
    if (size >= 1073741824) {
        printf "%.2f GB\n", size/1073741824
    } else {
        printf "%.2f MB\n", size/1048576
    }
}'
```
