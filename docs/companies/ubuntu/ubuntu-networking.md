# Networking on Ubuntu

## Debugging

```bash
# installs packages
sudo apt update
sudo apt install traceroute

# displays current network settings
ip a
ip route

# looks for existing configuration
ls etc/netplan

# traces the root to a specific hostname
traceroute google.com
```
