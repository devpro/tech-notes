# Puppet for dummies (Sébastien Arfort)

## Overview

At the end of this guide, you'll have a fully fonctionnal Puppet Server installation that can be used to automatize your applications servers installations (both infrastructural pre-requisites and home brewed applications).

Part I will be focusing on the setup stages (both operating system and Puppet itself).

Part II will explain how to hook-in a new application server within Puppet so that we can automatize delivery onto that box.

It is assumed the readers are comfortable with the following domains:

- linux / unix administration
- IP networks
- virtualisation
- software configuration management (git)
- software development (Ruby, DSC)

In this guide, we'll be focusing on the following versions:

- [Puppet 5](https://puppet.com/docs/puppet/5.3/index.html)
- [CentOS 7](https://www.centos.org/)

## Operating System Installation

### ISO

Download the ISO from one of these [mirrors](http://isoredirect.centos.org/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-1708.iso)

### Provision the new Virtual Machine

Create a brand new VM with the following specs (minimal, the more, the better...):

- 4 GB RAM
- 2 vCPU
- 40 GB HD
- Internet connectivity

Mount the DVD ISO image so that our new VM can boot off this media.

### Perform the installation

Kick-off the CentOS installation as per your tastes / needs.

> GNU/Linux installation details is out of scope for this document

### Post Installation tasks

#### Puppet Server hostname

Out of the box, Puppet Server package configuration assumes your Puppet Server will be named **puppet**.
It's possible to change this, but the install procedure will be more complicated (see below for this outstanding steps).

#### CMOS Clock synchronisation

It is absolutely vital that all application servers' clocks that are managed by Puppet are accurately synced otherwise the internal Puppet Certificate Authority might be acting weirdly.

If you're running on a bare metal server, you shall install NTP:

```shell
yum -y install ntpdate
ntpdate 0.centos.pool.ntp.org
```

Otherwise (case of the VM hosted on our ESX), one need to install the VmWare Tools and setup the clock sync from within the tool to prevent vCPU clock drift using this [procedure](http://wiki.nikoforge.org/VMWare_Tools_Installation_on_CentOS) :

```shell
echo -e "[vmware-tools]\n\
name=VMware Tools\n\
baseurl=http://packages.vmware.com/tools/esx/4.1latest/rhel6/x86_64\n\
enabled=1\n\
gpgcheck=1\n\
gpgkey=http://packages.vmware.com/tools/keys/VMWARE-PACKAGING-GPG-RSA-KEY.pub\n" \
> /etc/yum.repos.d/VMWare-Tools.repo
```

```shell
yum -y install vmware-tools
```

#### Names resolution

Puppet heavily relies on names resolutions.
More accurately all communications between the Puppet Server and its managed application servers use the CN (CommonName) property of the X.509 certificate.
The former MUST match the application server's FQDN (Fully Qualified Domain Name)

One need to ensure proper DNS resolution for both the Puppet Server and all the servers it's meant to manage.

> One can overcome poor corporate DNS configuration by populating the /etc/hosts files on:

- The Puppet server
- All application servers

## Puppet Installation

### Hook in the Puppet repository (both Puppet Server & Puppet Agents)

This shall be done on both the Puppet Server and all 'yum/rpm based' application servers.
For other GNU/Linux distributions, BSD and Windows, procedure might change depending on the plateforms.

```shell
rpm -Uvh https://yum.puppetlabs.com/puppet5/puppet5-release-el-7.noarch.rpm
```

### Puppet Server only

Install the Puppet Server package and dependencies using the following command:

```shell
yum install -y puppetserver
```

#### (Optional) Tweak the memory allocated to Puppet

Depending on the resources allocated to your Puppet Server and the amount of nodes you intend to manage, you might want / need to tweak a bit the RAM used by the JVM.

To achieve this optional steps, do the following:

```shell
vi /etc/sysconfig/puppetserver
```

Then change the values:

```shell
JAVA_ARGS="-Xms2g -Xmx2g
```

So that is reads:

```shell
JAVA_ARGS="-Xms512m -Xmx512m"
```

#### (Optional) Use non standard hostname for Puppet Server

In this example we'll be using **puppetdev** in lieu of the default **puppet** for our Puppet Server hostname:

Edit the main puppet configuration file:

```shell
vi /etc/puppetlabs/puppet/puppet.conf
```

Modify the example beneath so that it's suitable in your own context

```shell
[master]
dns_alt_names = puppetdev.arkadin.lan, puppetdev
[main]
certname = puppetdev.arkadin.lan
server = puppetdev.arkadin.lan
environment = production
runinterval = 1h
```

#### Enable and Start Puppet Server

```shell
systemctl start puppetserver
systemctl enable puppetserver
```

#### Open the Puppet Server's firewall

The Puppet Master listens on port 8140, so configure the firewall in such way that managed nodes can connect to the master.

```shell
firewall-cmd --permanent --zone=public --add-port=8140/tcp
firewall-cmd --reload
```

## Hooking-in a server within Puppet workflow

### Install Puppet Agent

A puppet client needs to be installed on every single box that shall be managed by Puppet.

#### CentOS / RHEL clients

```shell
yum install -y puppet-agent
```

#### Windows clients

Download either the 32 or 64 bits version of the Windows installer from [Puppet for Windows](https://downloads.puppetlabs.com/windows/puppet5/).

See [Windows install docs](https://puppet.com/docs/puppet/5.3/install_windows.html) for further details.

The following script has been used to deploy the agents on our production servers (Win2K8 R2):

```dos
REM ==> Installing puppet
msiexec /i \\puppetdev.mycompany.lan\cabs\tools\puppet\puppet-agent-1.10.1-x64.msi /l*v C:\msipuppetlog.txt /qn

REM ==> Giving the system a rest until the unattended puppet agent install completes
timeout 60

REM ==> Disabling Puppet Agent service automatic start
sc config "puppet" start= disabled

REM ==> Stopping Puppet Agent service
sc stop "puppet"
```

#### Ubuntu based clients

```shell
cd ~ && wget https://apt.puppetlabs.com/puppetlabs-release-pc1-trusty.deb
sudo dpkg -i puppetlabs-release-pc1-trusty.deb
sudo apt-get update
sudo apt-get install puppet-agent
```

#### Other clients (BSD, Mac, ...)

Agent installation procedure may differ a bit depending on your targeted plateform, it's very likely that you'll have a precompiled package available on the repository otherwise you'll have to compile it on your own.

Consult the Puppet Site and your operating system documentation.

### Configure Puppet Agent (all plateforms)

One needs to tweak the main Puppet configuration file to fit their needs.

Depending on your plateform, the configuration file location may differ:

Config file paths:

- `/etc/puppetlabs/puppet/puppet.conf`
- `/etc/puppet/puppet.conf`
- `/usr/local/etc/puppe/puppet.conf`
- `C:\ProgramData\PuppetLabs\puppet\etc`

Edit the `puppet.conf` file so that it ressemble something like that (adapt to your context).

In the example below:

- the puppet agent is installed on a box
- the puppet server is installed on a box named **puppetdev**
- the box belongs to production environment
- puppet agent'll be kicked of on an hourly basis

```shell
[main]
certname = mybox.mycompany.lan
server = puppetdev.mycompany.lan
environment = production
runinterval = 1h
```

> Don't forget to ensure you have proper name resolution for both the client machine and the puppet server.
> This is preferably achieved by adding A or CNAME records within your corporate DNS (reverse DNS might also be usefull in some scenari) or eventualy amending etc/hosts files on every single box involved.

The following command shall be issued on each puppet agent, same syntax on every plateform (linux, unix, mac, windows ...).

> Warning  On Windows, you have to run the Puppet console as an administrator otherwise, if you run it as a standard user, puppet agent will read its configuration file off your home directory rather than from c:\programdata\puppet and it'll fail...

### Issue the Certificat Signing Request (on the client)

Kicks off agent from and admin shell and wait for its X.509 cert to be signed off by internal puppet CA:

```shell
puppet agent --test --waitforcert 60
```

### Sign-off the CSR (on the puppet server)

```shell
/opt/puppetlabs/bin/puppet cert sign "mybox.mycompany.lan"
```

### Check the X.509 Certificate (on the puppet server)

```shell
/opt/puppetlabs/bin/puppet cert list -a
```

Which should give you something like that (your puppet server name may differ)

```shell
+ "mybox.mycompany.lan" (SHA256) AB:45:25:8E:80:14:A8:33:18:84:EB:6F:1E:98:53:74:3C:74:D8:D4:13:5A:41:59:1D:17:13:70:EF:43:D1:D6
+ "puppetdev.mycompany.lan"    (SHA256) 6F:FE:83:A8:42:6E:5D:C5:49:BC:22:04:98:E9:3E:BA:D7:F0:0B:A5:5D:91:FC:F4:BB:91:86:06:E4:74:D0:14 (alt names: "DNS:puppet", "DNS:puppetdev.mycompany.lan")
```

> The plus sign (+) at the beginning of the lines tells you that the corresponding certificate has been properly signed-off by the Puppet Certification Authority, for further details, consult the official Puppet documentation.

## A simple 'hello world' manifest

In order to assess proper end-to-end connectivity between the Puppet Server and your application server we'll be assigning some tasks to do on the machine which hosts the Puppet Agent we've setup in earlier stages.

To figure out what shall be done one which server Puppet reads the site's manifest.

The site.pp is located in the manifests folder. Each environment has the same layout.

Because we told the agent it belongs to the **production** environment, we'll be amending the manifest as follows on the puppet server box:

```shell
vi /etc/puppetlabs/code/environments/production/manifests/site.pp
```

```javascript
node "mybox.mycompany.lan" {
  notify { "Hello world": }
}
```

On the puppet agent side, run the following from within an **_administrative_** shell:

```shell
C:\Windows\system32>puppet agent --test
```

If all went fine, you should be getting something like that:

```shell
Info: Using configured environment 'production'
Info: Retrieving pluginfacts
Info: Retrieving plugin
Info: Caching catalog for mybox.mycompany.lan
Info: Applying configuration version '1516116668'
Notice: Hello world
Notice: /Stage[main]/Main/Node[mybox.mycompany.lan]/Notify[Hello world]/message: defined 'message' as 'Hello world'
Notice: Applied catalog in 0.07 seconds
```

## Infra as Code

### Puppet modules

Coding under Puppet is not that different from other open source stacks, there is:

- the code you write yourself which is very specific and addresses your company needs
- the code created by third party that one can reuse to address needs that every single company encounters (deploy X.509 certificate, setup with Web Servers, install Windows Roles & Features...)

Puppet has a rich open source eco system which contains a lot of production ready code to deal with those recurrent devops patterns.

> Puppet Forge can be found at [forge.puppet.com](https://forge.puppet.com/)

From a technical standpoint, modules are installed on the Puppet Server only, and will be sent through the secured channel (TCP/8140) up to the agents, this is done automagically by Puppet when the agent starts.

### See installed Puppet modules

To check which Puppet packages are installed on your PuppetServer, issue the following command:

```shell
puppet module list
```

This should give you the following items which are all used by Puppet to deploy BlueSky infrastructural pre-reqs and devops compliant modules:

> Your version numbers might be greater or equal, but not lower than the figures below

```shell
/usr/local/etc/puppet/modules
├── badgerious-windows_env (v999.999.999)
├── liamjbennett-win_facts (v0.0.2)
├── puppet-dotnet (v1.1.0)
├── puppet-download_file (v2.1.0)
├── puppet-sslcertificate (v2.2.0)
├── puppet-windowsfeature (v2.1.0)
├── puppetlabs-acl (v2.0.0)
├── puppetlabs-dism (v1.2.0)
├── puppetlabs-iis (v4.0.0)
├── puppetlabs-powershell (v2.1.0)
├── puppetlabs-registry (v1.1.4)
├── puppetlabs-stdlib (v4.16.0)
└── sanoma-winsnmp (v1.0.1)
```

### Install new puppet modules

The following command will install a Puppet module which deals with X.509 certificates installation on Windows plateforms, it's aptly named 'puppet-sslcertificate'.

Replace this name by the name of the module you need to install.

```sh
puppet module install puppet-sslcertificate
```

In order to update modules,use the command

```sh
puppet module update
```
