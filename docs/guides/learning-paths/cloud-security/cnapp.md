# CNAPP

Cloud Native Application Protection Platforms (CNAPP) unify multiple cloud security domains into a single solution.

The key domains include:

- CSPM (Cloud Security Posture Management)
- CWPP (Cloud Workload Protection Platform)
- CIEM (Cloud Infrastructure Entitlement Management)
- DSPM (Data Security Posture Management)
- Runtime security & detection

## Why CNAPP exists

Organizations traditionally deployed separate tools for each domain:

- CSPM checks misconfigurations (open S3 buckets, overly permissive security groups)
- CWPP scans containers/VMs for vulnerabilities
- CIEM monitors identity permissions for over-privileged users
- DSPM identifies sensitive data exposure
- Runtime security monitors live workloads

Challenges of separate tools:

1. Fragmented visibility  
2. Alert fatigue (many separate low-priority alerts)  
3. No cross-domain correlation

CNAPP solves this by building a **centralized asset graph** linking identities, workloads, storage, and network.  

## Core Capabilities

1. **Asset Inventory** – discover all cloud resources
2. **Configuration Assessment** – detect misconfigurations across IaaS, PaaS, SaaS
3. **Vulnerability Analysis** – container images, OS patches, libraries
4. **Identity Risk Assessment** – detect privilege escalation paths
5. **Runtime Threat Detection** – monitor container/VM processes, network traffic
6. **Attack Path Analysis** – correlate multiple issues to prioritize risk

## Definitions

[datadoghq.com/knowledge-center/cnapp](https://www.datadoghq.com/knowledge-center/cnapp/)
