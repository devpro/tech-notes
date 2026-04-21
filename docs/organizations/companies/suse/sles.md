# SUSE Linux Enterprise Server (SLES)

## SUSE Linux Enterprise Desktop

> Designed for mixed environments and includes a complete suite of required business applications to support employees' productivity. SLE Desktop shares the core of SUSE Linux Enterprise Server and is equipped with enhanced security providing unparalleled protection of valuable enterprise data.

→ [suse.com/products/desktop](https://www.suse.com/products/desktop/)

## SUSE Linux Enterprise Micro

> SUSE Linux Enterprise (SLE) Micro is an ultra-reliable, lightweight operating system purpose built for containerized and virtualized workloads. It leverages the enterprise hardened security and compliance components of SUSE Linux Enterprise and merges them with a modern, immutable, developer-friendly OS platform.

→ [suse.com/products/micro](https://www.suse.com/products/micro/)

## SUSE Linux Enterprise Server

> SUSE Linux Enterprise Server (SLES) is an adaptable and easy-to-manage linux server platform that allows developers and administrators to deploy business-critical workloads on-premises, in the cloud and at the edge.

→ [suse.com/products/server](https://www.suse.com/products/server/)

## Cheat sheet

### Quickstart

* Basic commands

```bash
# displays system version
cat /etc/os-release

# gets network information
ip a

# displays date
date

# updates date
su -c 'date -s "11 DEC 2022 21:30:00"'

# shuts down the system
su -c 'shutdown now'
```

* Text editors

```bash
# installs vi
zypper install vi
```

* Time Synchronization with NTP (Network Time Protocol) ([docs](https://documentation.suse.com/sles/15-SP3/html/SLES-all/cha-ntp.html))

```bash
# installs chrony
zypper install chrony

# edits configuration
vi /etc/chrony.conf

# starts and enables chrony service
systemctl start chronyd.service
systemctl enable chronyd.service
```

* Hostname

```bash
# updates hostname
hostnamectl set-hostname <new_name>

# displays hostname (after logout/login)
hostname
```

* Static IP Address

```bash
# edits network interface configuration
vi /etc/sysconfig/network/ifcfg-eth0

# restarts network service
systemctl restart network

# displays routes configuration
more /etc/sysconfig/network/routes

# displays name resolution configuration
more /etc/resolv.conf
```

* Enable SSH

```bash
# switches to root account
su

# installs OpenSSH
zypper install openssh

# starts sshd service and checks status
systemctl start sshd

# checks sshd service status
systemctl status sshd

# enables sshd service
systemctl enable sshd

# adds sshd service in firewall
firewall-cmd --permanent --add-service=ssh

# reloads firewall
firewall-cmd --reload
```
