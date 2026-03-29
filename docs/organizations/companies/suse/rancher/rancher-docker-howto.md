# How to run Rancher in a container

Setup a local environment with the following commands.

```bash
# start the container
docker run --privileged --restart=unless-stopped --name local_rancher -d -p 81:80 -p 444:443 rancher/rancher:latest

# retrieves the generated password
docker logs local_rancher 2>&1 | grep "Bootstrap Password:"

# retrieves the IP
hostname -I
```

Open [Rancher](https://localhost:444), set a new password and update the URL.
