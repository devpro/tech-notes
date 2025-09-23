# Linux commands

## Usual commands

```bash
# switches between keyboard layouts
loadkeys fr
# looks at drive disk space
df -h
# interacts with services (like firewalld)
systemctl <stop|disable|start|status> <service_name>
# review sudo config
cat /etc/sudoers
# manages services, boot processes, and system states
systemd
# displays logging system events
journald
# interacts with the dynamic firewall management tool (when installed)
firewalld
# configures and displays network interfaces
ip
# displays system information (e.g., kernel version, OS type)
uname
# displays memory usage
free
# views memory information
less /proc/meminfo
# views CPU information
more /proc/cpuinfo
# displays kernel and distribution version information
cat /proc/version
# displays kernel name and release
uname -or
# displays the network node hostname
hostname
uname -n
# displays user and group information for the current or specified user
id
# updates a user’s password
passwd
# adds a new user (account is locked until a password is set)
useradd xxx
# extends or validates the sudo credentials timestamp (typically for 5 minutes)
sudo -v
# monitors live system processes
top
```

## Common packages

Name     | Details
---------|---------------------------------------------------------------------------------------------------------------------------------
**wget** | GNU Wget is a free software package for retrieving files using HTTP, HTTPS, FTP and FTPS the most widely-used Internet protocols

## Shell shortcuts

Shortcut     | Action
-------------|--------------------------------
`Ctrl` + `R` | Search a command in the history
