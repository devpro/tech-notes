# CIEM

Cloud Infrastructure Entitlement Management (CIEM) is responsible for modeling permissions and identity risks in cloud environments.

## Graph Model

- **Nodes:** users, roles, service accounts
- **Edges:** trust relationships, policy permissions

Effective permissions are computed transitively across the graph.

Example:

> User A → role X → EC2 instance → S3 bucket access

CIEM systems detect over-permissioned identities and potential escalation paths.

## Escalation Example

1. User A has `iam:PassRole` and `ec2:RunInstances`
2. Role B has administrator privileges
3. User A launches EC2 instance with Role B
4. User A queries instance metadata to retrieve temporary credentials
5. Result: full admin access

Detection requires **permission graph evaluation**.
