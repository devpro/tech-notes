# Security Graph Model

CNAPP platforms often represent cloud environments as **graphs**:

- **Nodes:** IAM identities, compute instances, containers, Kubernetes clusters, storage, databases
- **Edges:** IAM trust relationships, network connections, ownership, deployment relations

## Attack Path Computation

Example path:

> Internet → public EC2 → vulnerable container → cluster admin → database

This enables CNAPP to prioritize alerts that contribute to **full compromise** instead of individual low-risk findings.
