# Security in AWS

## Readings

* [Compliance](https://aws.amazon.com/compliance/)
* [Security](https://aws.amazon.com/security/)
* [Share responsibility model](https://aws.amazon.com/compliance/shared-responsibility-model/)
* [AWS Security Reference Architecture](https://docs.aws.amazon.com/prescriptive-guidance/latest/security-reference-architecture/welcome.html)

## Products

### CloudTrail

> AWS CloudTrail is an AWS service that helps you enable operational and risk auditing, governance, and compliance of your AWS account.
> Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail.
> Events include actions taken in the AWS Management Console, AWS Command Line Interface, and AWS SDKs and APIs.

🌐 [docs](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html)

### Control Tower

> AWS Control Tower offers a straightforward way to set up and govern an AWS multi-account environment, following prescriptive best practices.
> AWS Control Tower orchestrates the capabilities of several other AWS services, including AWS Organizations, AWS Service Catalog, and AWS IAM Identity Center, to build a landing zone in less than an hour.
> Resources are set up and managed on your behalf.

🌐 [docs](https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html)

### IAM

> AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources.
> With IAM, you can centrally manage permissions that control which AWS resources users can access.
> You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.

🌐 [docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)

Advices: user groups, policies, roles

### KMS

> AWS Key Management Service (AWS KMS) is a managed service that makes it easy for you to create and control the cryptographic keys that are used to protect your data.
> AWS KMS uses hardware security modules (HSM) to protect and validate your AWS KMS keys under the FIPS 140-2 Cryptographic Module Validation Program.

🌐 [docs](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html)

### Organizations

> AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.
> AWS Organizations includes account management and consolidated billing capabilities that enable you to better meet the budgetary, security, and compliance needs of your business.
> As an administrator of an organization, you can create accounts in your organization and invite existing accounts to join the organization.

🌐 [docs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)

### RAM

> AWS Resource Access Manager (AWS RAM) helps you securely share your resources across AWS accounts, within your organization or organizational units (OUs), and with AWS Identity and Access Management (IAM) roles and users for supported resource types.

🌐 [aws.amazon.com/ram](https://aws.amazon.com/ram/), [docs](https://docs.aws.amazon.com/ram/latest/userguide/what-is.html)
