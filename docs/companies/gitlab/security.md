# Security

🌐 [docs/user/application_security/secure_your_application](https://docs.gitlab.com/ee/user/application_security/secure_your_application.html)

📝 [docs/development/sec](https://docs.gitlab.com/ee/development/sec/)

## Features

### Detection

📝 [gitlab-org/gitlab/templates/Jobs](https://gitlab.com/gitlab-org/gitlab/-/tree/master/lib/gitlab/ci/templates/Jobs)

#### GitLab Advisory Database

> The GitLab Advisory Database serves as a repository for security advisories related to software dependencies.
> It is updated on an hourly basis with the latest security advisories.

🌐 [docs/user/application_security/gitlab_advisory_database](https://docs.gitlab.com/ee/user/application_security/gitlab_advisory_database/)

#### Container scanning

🌐 [docs/user/application_security/container_scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)

#### Dependency scanning

🌐 [docs/user/application_security/dependency_scanning/](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)

#### Secret detection

🌐 [docs/user/application_security/secret_detection](https://docs.gitlab.com/ee/user/application_security/secret_detection/)

📝 [How to implement secret management best practices with GitLab](https://about.gitlab.com/the-source/security/how-to-implement-secret-management-best-practices-with-gitlab/)

#### Static Application Security Testing (SAST)

🌐 [docs/user/application_security/sast](https://docs.gitlab.com/ee/user/application_security/sast/)

#### Dynamic Application Security Testing (DAST)

🌐 [docs/user/application_security/dast](https://docs.gitlab.com/ee/user/application_security/dast/)

#### Infrastructure as Code scanning

🌐 [docs/user/application_security/iac_scanning](https://docs.gitlab.com/ee/user/application_security/iac_scanning/)

### Compliance

🌐 [docs/user/compliance](https://docs.gitlab.com/ee/user/compliance/)

#### Audit events

🌐 [docs/user/compliance/audit_events](https://docs.gitlab.com/ee/user/compliance/audit_events.html)

#### Compliance framework

🌐 [docs/user/group/compliance_frameworks](https://docs.gitlab.com/ee/user/group/compliance_frameworks.html)

#### Compliance center

> The compliance center is the central location for compliance teams to manage their compliance standards adherence reporting, violations reporting, and compliance frameworks for their group.

🌐 [docs/user/compliance/compliance_center](https://docs.gitlab.com/ee/user/compliance/compliance_center/)

- Compliance standards adherence dashboard
- Compliance violations report
- Compliance frameworks report
- Compliance projects report

### Policies

> Policies provide security and compliance teams with a way to enforce controls globally in their organization

🌐 [docs/user/application_security/policies](https://docs.gitlab.com/ee/user/application_security/policies/)

Name                                                                                                 | Action
-----------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------
Scan execution policy                                                                                | Enforce security scans, either as part of the pipeline or on a specified schedule
Merge request approval policy                                                                        | Enforce project-level settings and approval rules based on scan results
Pipeline execution policy                                                                            | Enforce CI/CD jobs as part of project pipelines
Vulnerability management policy                                                                      | Automatically resolve vulnerabilities that are no longer detected in the default branch
[License approval policy](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html) | Specify criteria that determines when approval is required before a merge request can be merged

### Monitoring

#### Security dashboard

🌐 [docs/user/application_security/security_dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/)

#### Vulnerability report

🌐 [docs/user/application_security/vulnerability_report](https://docs.gitlab.com/ee/user/application_security/vulnerability_report/)

#### Vulnerability page

🌐 [docs/user/application_security/vulnerabilities](https://docs.gitlab.com/ee/user/application_security/vulnerabilities/)

### Generation

- [SBOM](sbom.md)

## Learning

### Getting started

🌐 [docs/user/application_security/get-started-security](https://docs.gitlab.com/ee/user/application_security/get-started-security.html)

### Delivery Kits

- [gitlab-org/professional-services-automation/security-delivery-kits](https://gitlab.com/gitlab-org/professional-services-automation/delivery-kits/security-delivery-kits/security-delivery-kit)

### Tutorials

- [ ] [Set up a scan execution policy](https://docs.gitlab.com/ee/tutorials/scan_execution_policy/)
- [ ] [Set up a merge request approval policy](https://docs.gitlab.com/ee/tutorials/scan_result_policy/)
- [ ] [Scan a full commit history to detect sensitive secrets](https://about.gitlab.com/blog/2025/02/06/how-to-scan-a-full-commit-history-to-detect-sensitive-secrets/) - February 6, 2025
- [ ] [Setup security scanning in air-gapped environments](https://about.gitlab.com/blog/2025/02/05/tutorial-security-scanning-in-air-gapped-environments/) - February 5, 2025
