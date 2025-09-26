# Jenkins

🌐 [jenkins.io](https://www.jenkins.io/)

## Recipes

### How to add an node (formerly known as Jenkins slave)

#### Actions on the node server

- Check Java version

```bash
java -version
# openjdk version "1.8.0_144"
# OpenJDK Runtime Environment (build 1.8.0_144-b01)
# OpenJDK 64-Bit Server VM (build 25.144-b01, mixed mode)
```

- Add Jenkins user

```bash
sudo useradd jenkins -U -s /bin/bash
sudo usermod -a -G puppet jenkins
cat /etc/passwd
cat /etc/group
sudo mkdir /var/lib/jenkins-slave
sudo chown jenkins:jenkins /var/lib/jenkins-slave
sudo chmod 775 /var/lib/jenkins-slave
```

#### Actions in Jenkins web app

- Go to Manager Jenkins > Manage Nodes > New Node
- Fill Node Name

### Link a pipeline with Puppet

- [Jenkins Deployment Notification Plugin](https://wiki.jenkins.io/display/JENKINS/Deployment+Notification+Plugin)
- [Puppet Plugin](https://wiki.jenkins.io/display/JENKINS/Puppet+Plugin)
- [wwkimball/puppet-jenkinstracking](https://github.com/wwkimball/puppet-jenkinstracking)
