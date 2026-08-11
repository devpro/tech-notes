# OpenJDK

## Installation

### Linux

Install the JDK:

```bash
sudo apt install default-jdk
```

Get current version:

```bash
sudo update-alternatives --config java
```

Update `/etc/environment` accordingly:

```ini
JAVA_HOME="/usr/lib/jvm/java-21-openjdk-amd64"
```

Apply the change:

```bash
source /etc/environment
```

Check the installation with:

```bash
java -version
```
