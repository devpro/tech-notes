# WSL

📝 [organizations/companies/microsoft/wsl](../../../organizations/companies/microsoft/wsl.md)

## Windows features

The following features must be enabled:

- `Containers`
- `Windows Subsystem for Linux`

## Linux distributions

### Ubuntu 24.04

Open a dos window as Administrator to install the default Linux system:

```batch
wsl --install
```

Ubuntu is now available in Windows Terminal. Make sure systemd is enabled:

```bash
cat /etc/wsl.conf
stat /sbin/init
```

## Linux applications

- [GitKraken Desktop](../../../organizations/companies/gitkraken/gitkraken-desktop.md#wsl)
- [Visual Studio Code](../../../organizations/companies/microsoft/vscode-installation.md#wsl)

## Containers

- [Docker](../../../organizations/companies/docker/docker-engine.md#ubuntu)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#install-kubectl-binary-with-curl-on-linux)
- [Helm](https://github.com/devpro/kubernetes-essentials/blob/main/docs/tools/helm.md#installation)
- [k3d](https://github.com/devpro/kubernetes-essentials/blob/main/docs/tools/k3d.md)
- [ngrok](../../../organizations/companies/ngrok/ngrok.md)
