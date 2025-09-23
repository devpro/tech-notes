# Odroid

[Wikipedia](https://en.wikipedia.org/wiki/ODROID)

## Quick start

### Ubuntu 18.04

#### SD card preparation

- Download and install a flash program: [Etcher](https://www.balena.io/etcher/) (for example `balenaEtcher-Setup-1.5.101.exe` on Windows 10)
- Download an image of Ubuntu minimal: [20190910-minimal](https://wiki.odroid.com/odroid-xu4/os_images/linux/ubuntu_4.14/20190910-minimal) (for example `ubuntu-18.04.3-4.14-minimal-odroid-xu4-20190910.img`)
- Plug the SD card in your computer and flash it by selecting the downloaded image

#### Initial boot

- Insert the SD card in the board, plug a keyboard (USB) and a monitor (HDMI) then plug the power cable
- After few seconds a login input will be needed (`root`/`odroid`)
- If needed, update the keyboard layout

```bash
sudo vi /etc/default/keyboard
# update XKBLAYOUT to "fr" for a French keyboard
sudo reboot
```

- Change server name (and add other server name resolution with their future IP 10.0.0.X)

```bash
sudo vi /etc/hostname
sudo vi /etc/hosts
sudo reboot
```

- Installing a Wifi adapter can be tricky, in case of issue you can first plug an ethernet connection on USB (by sharing for example the internet connection from a mobile phone with an USB cable)

```bash
# Make sure the USB element is recognized
lsusb

# Update Ubuntu packages and distribution
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
sudo reboot
```

- Plug the Widi adapter, make sure it's up (light on?)

- Create `/etc/netplan/config.yaml` (Ubuntu now uses [Netplan](https://netplan.io/), see [odroid forum topic](https://forum.odroid.com/viewtopic.php?t=30766) and [configserverfirewall post](https://www.configserverfirewall.com/ubuntu-linux/configure-ubuntu-server-static-ip-address/))
  
```ini
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      optional: true
      dhcp4: no
      addresses: [10.0.0.1/24]
  wifis:
    wlan0:
      optional: true
      dhcp4: no
      dhcp6: no
      addresses: [192.168.86.139/24]
      gateway4: 192.168.86.1
      nameservers:
      addresses: [8.8.8.8, 4.4.4.4]
      access-points:
        "mywifiname":
          password: "mypassword"
```
  
- Check internet connection and enable SSH (see [2daygeek post](https://www.2daygeek.com/enable-disable-up-down-nic-network-interface-port-linux-using-ifconfig-ifdown-ifup-ip-nmcli-nmtui/))

```bash
# Review Wifi configuration
iwconfig

# Look at available wifi networks
iwlist scan

# Enable network (multiple solutions)
ip link set wlan0 up # doesn't work on my config
nmtui

# Apply configuration change
sudo netplan apply

# Check IP
ip a
ping google.com

# If there are any issues, enable DHCP and disable it afterwards

# Look at services
systemctl list-unit-files | grep enabled

# Allow SSH in firewall
sudo apt install openssh-server
sudo apt install ufw
sudo ufw enable
sudo ufw allow ssh

# Check service status
sudo systemctl status ssh
sudo service ssh status

# Check opened ports
sudo netstat -plnt
````
