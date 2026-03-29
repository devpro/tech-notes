# The CentOS Project

> Community-driven free software effort focused on delivering a robust open source ecosystem around a Linux platform.

[centos.org](https://www.centos.org/)

## Introduction

**CentOS** (Community Enterprise Operating System) is a free, open-source Linux distribution derived from the source code of **Red Hat Enterprise Linux (RHEL)**.
It aims to provide enterprise-class stability and compatibility with RHEL without the commercial licensing costs.

The classic CentOS Linux ended in 2021; today, **CentOS Stream** is the official continuation — a rolling-release platform *upstream* of RHEL.
Community forks like **AlmaLinux** and **Rocky Linux** now carry the original "stable RHEL clone" mission.

## Project Structure & Governance

Aspect                | Details
----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------
**Lead Organization** | Red Hat (IBM subsidiary) – primary sponsor [since January 2014](https://www.redhat.com/en/about/press-releases/red-hat-and-centos-join-forces)
**Governance**        | CentOS Governing Board (CGB) with community and Red Hat representatives
**Development Model** | Open source; code hosted on [git.centos.org](https://git.centos.org/)
**Trademark Owner**   | Red Hat

## Timeline (Key milestones)

- **2004**: Launched as community rebuild of RHEL
- **Jan 2014**: Red Hat becomes primary sponsor
- **Dec 2020**: CentOS Linux is EOL; pivot to **CentOS Stream**
- **2021–2025**: Community forks emerge

## Variants & Timeline

Variant                           | Status          | Release Model                    | Notes
----------------------------------|-----------------|----------------------------------|------------------------------------------------------------------------
**CentOS Linux** (version 1 to 8) | **End of Life** | Point releases (10-year support) | Rebuilt 1:1 from RHEL sources; last stable version: CentOS 8 (EOL 2021)
**CentOS Stream**                 | **Active**      | Continuous delivery (rolling)    | Positioned *between* Fedora and RHEL; used for RHEL development testing

## Ecosystem & Community

- **Package Manager**: `dnf` / `yum`

## Relationship with Other Entities

Entity               | Relationship
---------------------|-------------------------------------------------------------------------------
**Red Hat**          | Primary sponsor, employer of core developers, trademark holder
**Linux Foundation** | No formal affiliation; CentOS participates in events and collaborates on tools
**Fedora Project**   | Upstream influence; CentOS Stream sits downstream of Fedora
**Community Forks**  | AlmaLinux, Rocky Linux (independent RHEL-compatible alternatives)

## Alternatives (RHEL-Compatible)

Distribution    | Governance                           | Support Model   | Website
----------------|--------------------------------------|-----------------|------------------------------------------
**AlmaLinux**   | AlmaLinux OS Foundation (non-profit) | 10-year support | [almalinux.org](https://almalinux.org/)
**Rocky Linux** | Rocky Enterprise Software Foundation | 10-year support | [rockylinux.org](https://rockylinux.org/)
