# Ubuntu

The following instructions target **Ubuntu 24.04**.
For previous instructions: [Ubuntu 20.04](archive/ubuntu-20_04.md).

📝 [Ubuntu company](../../../organizations/companies/ubuntu/ubuntu.md)

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

- [Docker](../../../organizations/companies/docker/docker-engine.md#ubuntu)
- [Helm](https://helm.sh/docs/intro/install/)
- [Node.js & NPM](../../../organizations/foundations/openjs-foundation/nodejs.md#nvvm)
- [Terraform](https://developer.hashicorp.com/terraform/install)
- [.NET](https://learn.microsoft.com/en-us/dotnet/core/install/linux-ubuntu-install) ([workaround](https://github.com/dotnet/runtime/issues/121829#issuecomment-3614687693))
- [PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/install-ubuntu)
