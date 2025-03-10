# GitLab pipelines

> CI/CD pipelines are the fundamental component of GitLab CI/CD.
> Pipelines are configured in a `.gitlab-ci.yml` file by using YAML keywords.

🌐 [CI/CD pipelines](https://docs.gitlab.com/ee/ci/pipelines/)

## Pipeline code

🌐 [CI/CD YAML syntax reference](https://docs.gitlab.com/ee/ci/yaml/)

### Features

* [Components](pipeline-components.md)
* [Services](https://docs.gitlab.com/ee/ci/services/)

## Pipeline types

* [Basic pipelines](https://docs.gitlab.com/ee/ci/pipelines/pipeline_architectures.html#basic-pipelines)
* [Merge request pipelines](https://docs.gitlab.com/ee/ci/pipelines/merge_request_pipelines.html)
* [Merged results pipelines](https://docs.gitlab.com/ee/ci/pipelines/merged_results_pipelines.html)
* [Merge trains](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html)
* [Parent-child pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#parent-child-pipelines)
* [Multi-project pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)

## Best practices

🌐 [CI/CD development guidelines](https://docs.gitlab.com/ee/development/cicd/)

### Pipeline code quality

* [Principles (DRY, KISS SOLID, YAGNI)](developers.md#software-programming-principles)
* [Optimize configuration files](https://docs.gitlab.com/ee/ci/yaml/yaml_optimization.html)
  * Anchors
  * `extends`
  * `!reference`
* [Use configuration from other files](https://docs.gitlab.com/ee/ci/yaml/includes.html)
  * [`include`](https://docs.gitlab.com/ee/ci/yaml/#include)

<!-- See also [10 préconisations pour une CI/CD efficace](https://www.linkedin.com/pulse/gitlab-ci-10-pr%C3%A9conisations-pour-une-cicd-efficace-benoit-couetil/) -->

### Performance

* [Caching](https://docs.gitlab.com/ee/ci/caching/)

## Support

* [Debugging CI/CD pipelines](https://docs.gitlab.com/ee/ci/debugging.html)
* [Run a pipeline locally](runner-container.md#debug-pipeline-with-local-execution)

## Examples

* [GitLab pipeline](https://gitlab.com/gitlab-org/gitlab/-/pipelines)
([`.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab-ci.yml), [`.gitlab/ci`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/ci))
