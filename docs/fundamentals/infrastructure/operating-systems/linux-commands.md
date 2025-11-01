# Linux terminal

## Additional packages

Name     | Details
---------|---------------------------------------------------------------------------------------------------------------------------------
**wget** | GNU Wget is a free software package for retrieving files using HTTP, HTTPS, FTP and FTPS the most widely-used Internet protocols

<!-- TODO: difference between cat/less/more -->

## Shortcuts

Shortcut   | Action
-----------|--------------------------------
`Ctrl`+`R` | Search a command in the history

## Commands

### Machine and OS

Display system information (e.g., kernel version, OS type):

```bash
uname
```

View memory information:

```bash
cat /proc/meminfo
```

View CPU information:

```bash
cat /proc/cpuinfo
```

Display kernel and distribution version information

```bash
cat /proc/version
```

Display kernel name and release:

```bash
uname -or
```

### System check

Monitor live system processes:

```bash
top
```

Look at drive disk space:

```bash
df -h
```

Display memory usage:

```bash
free
```

### Network

Configure and displays network interfaces:

```bash
ip
```

Display the network node hostname:

```bash
hostname
uname -n
```

Interact with the dynamic firewall management tool (when installed):

```bash
firewalld
```

### Services

Interact with services (like firewalld):

```bash
systemctl <stop|disable|start|status> <service_name>
```

Manage services, boot processes, and system states:

```bash
systemd
```

Display logging system events:

```bash
journald
```

### User managament

Review sudo config:

```bash
cat /etc/sudoers
```

Display user and group information for the current or specified user:

```bash
id
```

Add a new user (account is locked until a password is set):

```bash
useradd xxx
```

Updates a user's password:

```bash
passwd
```

### User settings

Extend or validate the sudo credentials timestamp (typically for 5 minutes):

```bash
sudo -v
```

Switch between keyboard layouts:

```bash
loadkeys fr
```

### Processes

Look for specific processes:

```bash
ps -ef | grep <process_name>
```

Kill a process and its children:

```bash
kill -TERM -- -<process_id>
```
