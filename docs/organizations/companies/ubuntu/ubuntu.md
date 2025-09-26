# Ubuntu

🌐 [ubuntu.com](https://ubuntu.com/)

Debian, pure open source project, is the upstream of Ubuntu distributions.

Ubuntu aims at providing a good compromise between long term stability and ease of use.

Ubuntu is PKG-based and uses apt-get.

## Installation

- [Download](https://www.ubuntu.com/download)

## Commands

### General

```bash
# displays the OS version
lsb_release -a

# get information on running Ubuntu
more /etc/lsb-release

# add myuser in sudo group (sudo permissions)
sudo usermod -a -G sudo myuser

# see status of firewall
sudo ufw status verbose

# list services
sudo systemctl list-units | grep mongo
systemctl list-units --type service

# look at current network ressource allocation
netstat -atun

# look at installed packages
dpkg --get-selections

# look for files or directories matching a pattern
sudo updatedb
locate mongod

# go back to previous directory
cd -

# search in command history: Ctrl+R

# display network config (ip)
ip addr show

# update packages and distribution
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
sudo reboot

# check processor information (Intel, AMD or ARM for instance)
lscpu
```

See [Debian Cheat Sheet](https://wiki.debian.org/systemd/CheatSheet)

### Nautilus

`Ctrl+L` to open the address bar.

## On Windows 10

### VM Creation

With `Hyper-V Quick Create`, select Ubuntu 18.04. DO NOT SET AUTO SIGN IN!

### VM setup

```bash
# update package manager
sudo apt-get update

# install samba for network sharing
sudo apt install samba
sudo apt install cifs-utils

# install git
sudo apt install git

# install web front tools: NodeJS (including NPM)
sudo apt install nodejs npm
npm -v

# and yarn: see https://yarnpkg.com/lang/en/docs/install/#debian-stable
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
yarn --version

# shutdown (to read a new value from hosts file for example)
wsl -t ubuntu
```

## Snap applications

- JetBrains PhpStorm
- Visual Studio Code

### Shared drives

In Nautilus, you can access a Windows shared drive: `smb://172.X.X.X/d/Projects`.

From Windows, open directly the shared drive: `\\172.Y.Y.Y\Public`.

For more details, read [Mount samba shares with utf8 encoding using cifs](https://ubuntuforums.org/showthread.php?t=288534).

```bash
sudo mount -t cifs -o username=myuser,password=*****,iocharset=utf8,file_mode=0777,dir_mode=0777 //172.X.X.X/d/Projects /home/myuser/Host/Projects
```

[PulseAudio/HOW-TO: Disable PulseAudio and use ALSA (without removing PulseAudio) for Ubuntu](https://kodi.wiki/view/PulseAudio/HOW-TO:_Disable_PulseAudio_and_use_ALSA_(without_removing_PulseAudio)_for_Ubuntu)

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

## Recipes

### Execute an action on startup

- Create a script file `/home/<username>/run_vagrant_k8s.sh`

```shell
#!/bin/bash

cd /home/<username>/Vagrant/k8s-cluster/
vagrant up
```

- Create a service file `/etc/systemd/system/vagrant-k8s-cluster.service`

```ini
[Unit]
Description=Run Vagrant to start Kubernetes cluster
After=network.service

[Service]
Type=simple
User=<username>
Group=<username>
ExecStart=/home/<username>/run_vagrant_k8s.sh
TimeoutStartSec=0
RemainAfterExit=yes

[Install]
WantedBy=default.target
```

- Update permissions and enable system

```bash
sudo chmod 755 /home/<username>/run_vagrant_k8s.sh
sudo chmod 664 /etc/systemd/system/vagrant-k8s-cluster.service
sudo systemctl daemon-reload
sudo systemctl status vagrant-k8s-cluster.service
```
