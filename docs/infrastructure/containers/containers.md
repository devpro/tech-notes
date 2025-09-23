# Containers

## History

- [A Brief History of Containers: From the 1970s Till Now](https://www.aquasec.com/blog/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016/) - Aqua Security (2020)
- [It's Here: Docker 1.0](https://web.archive.org/web/20160426102954/https://blog.docker.com/2014/06/its-here-docker-1-0/) - Julien Barbier (2014)
- Deployment ([source](https://kubernetes.io/docs/concepts/overview/)):

![Container evolution](https://d33wubrfki0l68.cloudfront.net/26a177ede4d7b032362289c6fccd448fc4a91174/eb693/images/docs/container_evolution.svg)

## Definitions

- Docker

> A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
> A container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.
>
> &mdash; _[docker.com/resources/what-container](https://www.docker.com/resources/what-container/)_

- Microsoft

> A container, or software container, is a standalone package of software that bundles together application code with the operating system libraries and dependencies required to run it.
> It can consistently run in any computing environment—whether on a developer’s laptop, a test server, or a production cloud service.
> Because it’s lightweight and portable, a container can be efficiently deployed, scaled, and managed on virtually any type of infrastructure, including hybrid and multicloud platforms.
>
> &mdash; _[Microsoft](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-a-container/)_

- Red Hat

> Containerization is the packaging together of software code with all it's necessary components like libraries, frameworks, and other dependencies so that they are isolated in their own container
>
> &mdash; _[redhat.com/topics/cloud-native-apps/what-is-containerization](https://www.redhat.com/en/topics/cloud-native-apps/what-is-containerization)_

## Image build practices

- chroot
- [Container Performance Analysis at DockerCon 2017, by Brendan Gregg](https://www.brendangregg.com/blog/2017-05-15/container-performance-analysis-dockercon-2017.html)
- [Best Practices on How to Build Container Images](https://sysdig.com/blog/dockerfile-best-practices/)
- [Top 20 Dockerfile Best Practices](https://learnk8s.io/blog/smaller-docker-images) - Álvaro Iradier (2021)
- [3 simple tricks for smaller Docker images](https://learnk8s.io/blog/smaller-docker-images) - Daniele Polencic (2019)
- [Best practices for building containers](https://cloud.google.com/architecture/best-practices-for-building-containers)
- [Buildpacks vs Jib vs Dockerfile: Comparing containerization methods](https://cloud.google.com/blog/topics/developers-practitioners/comparing-containerization-methods-buildpacks-jib-and-dockerfile) James Ward (2020)
- [GoogleContainerTools/distroless](https://github.com/GoogleContainerTools/distroless)

## Container runtimes

- Docker
- containerd
- cri-o
- podman

## Container registries

- [Docker Hub](https://hub.docker.com/)
- [Google Container Registry](https://cloud.google.com/container-registry/)
- [Red Hat Quay](https://www.redhat.com/en/technologies/cloud-computing/quay)

## Container GUI

- Docker Desktop
- Rancher Desktop
- Podman Desktop

## Readings

- [Containers vs. Pods - Taking a Deeper Look](https://iximiuz.com/en/posts/containers-vs-pods/) - October 28, 2021
