# Windows Subsystem for Linux (WSL)

This is a Windows feature that is not enabled by default.

## Ubuntu 24.04

Open a dos window as Administrator to install the default Linux system:

```dos
wsl --install
```

Ubuntu is now available in Windows Terminal.

Make sure systemd is enabled:

```bash
cat /etc/wsl.conf
stat /sbin/init
```

To restrict the use of resources by WSL2 (all distros), create a text file `%UserProfile%\.wslconfig` in the current user’s profile and restart wsl (`wsl --shutdown`):

```ini
[wsl2]
memory=8GB
processors=4
swap=2GB
```

For performance issues, store container files inside WSL directory (Windows files are in /mnt/c).

For old kernels, one can enable compatibility with iptables:

```bash
sudo update-alternatives --config iptables
```

[Install Docker](../ubuntu/containerization.md#docker).

Docker can be ran from Windows command prompt by adding wsl before:

```docs
wsl docker images
```
