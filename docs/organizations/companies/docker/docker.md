# Docker

> Docker helps developers bring their ideas to life by conquering the complexity of app development.
> Actively used by millions of developers around the world, Docker Desktop and Docker Hub provide unmatched simplicity, agility and choice
>
> &mdash; _[docker.com/company](https://www.docker.com/company/)_

🌐 [docker.com](https://www.docker.com/), [docs](https://docs.docker.com/)

## Getting to know

### Components

* [CLI](docker-cli.md)
* [Desktop](docker-desktop.md)
* [Hub](https://hub.docker.com/)

### Getting started

→ [Get Started](https://docs.docker.com/get-started/)

### Docker Desktop

* [Overview](https://docs.docker.com/desktop/)

### Docker on Windows

Go to [Get started with Docker for Windows](https://docs.docker.com/docker-for-windows/).

[Install Docker for Windows](https://docs.docker.com/docker-for-windows/install/#start-docker-for-windows)

[Docker Desktop](https://www.docker.com/products/docker-desktop)

See [WSL cheat sheet](https://github.com/devpro/everyday-cheatsheets/blob/master/docs/wsl.md).

### Installation on WSL 1 (Ubuntu)

[Installing the Docker client on Windows Subsystem for Linux (Ubuntu)](https://medium.com/@sebagomez/installing-the-docker-client-on-ubuntus-windows-subsystem-for-linux-612b392a44c4)

Once docker is installed on Ubuntu, configure Docker on Windows to expose port 2375 and run:

```bash
docker images
#Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

docker -H localhost:2375 images
#Cannot connect to the Docker daemon at tcp://localhost:2375. Is the docker daemon running?

docker -H localhost:2375 images
#REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
#ubuntu              latest              f975c5035748        4 weeks ago         112MB
```

### Installation on WSL2

* Docker tutorial: [How To Develop a Docker Application on Windows using WSL, Visual Studio Code, and Docker Desktop](https://www.digitalocean.com/community/tutorials/how-to-develop-a-docker-application-on-windows-using-wsl-visual-studio-code-and-docker-desktop) - July 28, 2021

### Installation on Ubuntu

[Get Docker CE for Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository)

### Playground

* [Play with Docker (PWD)](https://labs.play-with-docker.com/)
* [Play with Docker Classroom](https://training.play-with-docker.com/)

### Tutorials

* [Docker 101 Tutorial](https://www.docker.com/101-tutorial)

* Hello world (will display "Hello from Docker!")

```bash
docker run hello-world
```

* Ubuntu bash

```batch
docker run -it ubuntu bash
apt-get update
apt-get upgrade
apt-get install apt-utils
apt-get install traceroute
traceroute www.google.fr
apt-get install wget
wget --spider http://example.com
```

## Security

* [snykblog - Docker security scanning cheatsheet 2021](https://snyk.io/blog/docker-security-scanning-cheatsheet-2021/) - January 19, 2021

## Recipes

* [Intro Guide to Dockerfile Best Practices](https://blog.docker.com/2019/07/intro-guide-to-dockerfile-best-practices/) - July 02, 2019
* [Get Ready for the Tech Preview of Docker Desktop for WSL 2](https://blog.docker.com/2019/07/docker-wsl2-tech-preview/) - July 18, 2019
* [Debugging a weird 'file not found' error](https://jvns.ca/blog/2021/11/17/debugging-a-weird--file-not-found--error/)

## Samples

* [Hello world](https://docs.docker.com/samples/library/hello-world/)
