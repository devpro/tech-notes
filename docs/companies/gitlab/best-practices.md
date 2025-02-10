# Best practices for GitLab

## Pipelines

🌐 [CI/CD development guidelines](https://docs.gitlab.com/ee/development/cicd/)

### Software programming principles

Acronym | Meaning
--------|-----------------------------------------------------------------------------------------------------
DRY     | Don't repeat yourself
KISS    | Keep it simple stupid
SOLID   | Single responsibility, open–closed, Liskov substitution, interface segregation, dependency inversion
YAGNI   | You aren't gonna need it

### Pipeline code quality

* [Optimize configuration files](https://docs.gitlab.com/ee/ci/yaml/yaml_optimization.html)
  * Anchors
  * `extends`
  * `!reference`
* [Use configuration from other files](https://docs.gitlab.com/ee/ci/yaml/includes.html)
  * [`include`](https://docs.gitlab.com/ee/ci/yaml/#include)

See also [10 préconisations pour une CI/CD efficace](https://www.linkedin.com/pulse/gitlab-ci-10-pr%C3%A9conisations-pour-une-cicd-efficace-benoit-couetil/)

### Performance

* [Caching](https://docs.gitlab.com/ee/ci/caching/)
