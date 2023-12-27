# HOWTO Install Ubuntu Server on a laptop

_This tutorial has been made on December 2021 on a MSI gaming laptop with Ubuntu Server 20.04._

## Requirements

### Hard drive

* Make sure there is a FAT partition created or a complete hard drive available

### Windows settings

* If Windows is installed on the laptop, make sure fast startup is turned off (see [How To Disable Fast Startup in Windows 10](https://help.uaudio.com/hc/en-us/articles/213195423-How-To-Disable-Fast-Startup-in-Windows-10))

### BIOS settings

* Review boot order to ensure the bootable drive will run first (USB for instance)

## Installation steps

### Download required files

* Download Rufus portable
* Download Ubuntu Server LTS ISO

### Create bootable drive

* Use Rufus to create a bootable drive

### Plug the drive and boot the machine

* Do not configure network (may cause the installation to fail after a long time)
* Define machine name, username and password

### Reboot and login

* Configure Wifi network

```bash
# lists the available networks (copy the wl one that you want)
ls /sys/class/net

# lists available configuration
ls /etc/netplan/

# creates a new configuration
sudo vi /etc/netplan/50-cloud-init.yaml

# network:
#     version: 2
#     renderer: networkd
#     ethernets:
#         eth0:
#             optional: true
#             dhcp4: no
#             dhcp6: no
#             addresses: [192.168.xxx.xxx/24]
#             gateway4: 192.168.xxx.xxx
#             nameservers:
#                 addresses: [8.8.8.8, 4.4.4.4]
#     wifis:
#         wlp3s0:
#             optional: true
#             access-points:
#                 "SSID-NAME-HERE":
#                     password: "PASSWORD-HERE"
#             dhcp4: no
#             dhcp6: no
#             addresses: [192.168.xxx.xxx/24]
#             gateway4: 192.168.xxx.xxx
#             nameservers:
#                 addresses: [8.8.8.8, 4.4.4.4]

# applies the change
sudo netplan apply

# makes sure an IP has been assigned
ip a
```

* Updates packages and reboot

```bash
sudo apt update
sudo apt upgrade
sudo reboot
```

### Additional configuration

* Disable action when lid is closing

```bash
sudo vi /etc/systemd/logind.conf

# find out the line #HandleLidSwitch=suspend and change it to one of following
# HandleLidSwitch=ignore

systemctl restart systemd-logind.service
```

### Enable remote access through SSH from the remote computer

* Copy the SSH public key from the remote computer to be able to login without password

```bash
# creates SSH key (if not already done)
ssh-keygen

ssh-copy-id <username>@<serverip_or_dnsname>
```
