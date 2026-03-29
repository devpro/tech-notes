# CentOS Stream

> Continuously delivered distro that tracks just ahead of Red Hat Enterprise Linux (RHEL) development, positioned as a midstream between Fedora Linux and RHEL.

[centos.org/centos-stream](https://www.centos.org/centos-stream/)

## Overview

CentOS Stream is the current official CentOS platform — a rolling-release Linux distribution positioned between Fedora and RHEL.

Purpose: Public development space for future RHEL minor releases

Model: Continuous delivery (no point releases)

## Key facts

Topic              | Fact
-------------------|-------------------------------------------------
Status             | Active (CentOS Stream 9 & 10)
Support            | ~1–2 years per version (tied to RHEL minor)
Updates            | Daily/weekly packages
RHEL Compatibility | Binary identical to upcoming RHEL minor versions
Use Cases          | Cloud, CI/CD, containers, RHEL preview
EOL                | Stream 9 → May 2027 / Stream 10 → active

## Ecosystem position

Fedora → CentOS Stream → RHEL (next minor)

Not a beta - production-ready. Used in production by: AWS, Azure, GCP, Facebook, Verizon.

## Quick start

Migrate from CentOS Linux 8:

```bash
sudo dnf swap centos-linux-repos centos-stream-repos
sudo dnf distro-sync
```

Containers: [quay.io/centos/centos:stream10](https://quay.io/repository/centos/centos?tab=tags&tag=stream10)

## Source code

[Red Hat's project for CentOS Stream](https://gitlab.com/redhat/centos-stream)
