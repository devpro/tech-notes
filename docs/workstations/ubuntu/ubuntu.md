# Ubuntu

The following instructions target **Ubuntu 24.04**.
For previous instructions: [Ubuntu 20.04](ubuntu-20_04.md).

## System updates

```bash
sudo apt update
sudo apt -y upgrade
```

## Packages

- Common dependencies:

```bash
sudo apt -y install ca-certificates curl gnupg lsb-release apt-transport-https software-properties-common git wget nano libarchive-tools sshpass zip unzip jq
```

- [Docker](containerization.md#docker)
- [Node.js & NPM](software-development.md#nodejs-with-npm)
