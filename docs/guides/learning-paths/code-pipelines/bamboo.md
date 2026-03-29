# Bamboo Data Center

## Introduction

> Bamboo Data Center is a continuous delivery pipeline that offers resilience, reliability, and scalibility for teams of any size.

[atlassian.com/software/bamboo](https://www.atlassian.com/software/bamboo)

## Setup

### Build the custom image

Create `.bamboo/server/Dockerfile` file:

```Dockerfile
# starts from the base image provided by Atlassian: https://hub.docker.com/r/atlassian/bamboo-server (7.2.2 based on Ubuntu 20.04.1 LTS, codename focal)
FROM atlassian/bamboo-server:7.2.2

# switches to root user for admin commands
USER root

# installs system requirements
RUN apt-get update
RUN apt-get install -y apt-transport-https \
    ca-certificates \
    wget \
    curl \
    gnupg-agent \
    software-properties-common
RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
RUN add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
RUN wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb \
    && dpkg -i packages-microsoft-prod.deb
RUN apt-get update

# installs Docker: https://docs.docker.com/engine/install/ubuntu/
RUN apt-get install -y docker-ce \
    docker-ce-cli \
    containerd.io
RUN usermod -a -G docker bamboo

# installs .NET SDK LTS: https://docs.microsoft.com/en-us/dotnet/core/install/linux-ubuntu
RUN apt-get install -y dotnet-sdk-3.1
RUN apt-get install -y dotnet-sdk-5.0

# switches back to bamboo user
USER bamboo

# updates image entrypoint with commands that can only be ran when the container starts
RUN echo "chown root:docker /var/run/docker.sock" >> /entrypoint.sh
```

```bash
# creates a new image
docker build . -t devprofr/bamboo-server -f .bamboo/server/Dockerfile --no-cache
```

### Run the custom image

```bash
docker volume create --name bambooVolume

# for Linux
docker run -v /var/run/docker.sock:/var/run/docker.sock -v bambooVolume:/var/atlassian/application-data/bamboo --name="bamboo" --init -d -p 54663:54663 -p 8085:8085 devprofr/bamboo-server

# for Windows
docker run -v //var/run/docker.sock:/var/run/docker.sock -v bambooVolume:/var/atlassian/application-data/bamboo --name="bamboo" --init -d -p 54663:54663 -p 8085:8085 devprofr/bamboo-server
```

### Configuration

Open [localhost:8085](http://localhost:8085/)

#### Set server capabilities

_Limitation 2021-02-28_: Unfortunately it is not possible to automate it through an API call

You have to manually go to this page ["Bamboo administration > Server capabilities"](http://localhost:8085/admin/agent/configureSharedLocalCapabilities.action) and set the server capabilities (if not present), it must be done only once/

Category   | Executable / Label | Path              | Bamboo key
-----------|--------------------|-------------------|--------------------------------
Executable | dotnet             | `/usr/bin/dotnet` | `system.builder.command.dotnet`
Docker     | Docker             | `/usr/bin/docker` | `system.docker.executable`

### Troubleshooting

```bash
docker exec -it bamboo sh
docker exec -u 0 -it bamboo bash
```

### Clean-up

```bash
docker stop bamboo
docker rm bamboo
```
