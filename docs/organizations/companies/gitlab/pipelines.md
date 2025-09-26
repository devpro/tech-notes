# GitLab pipelines

> CI/CD pipelines are the fundamental component of GitLab CI/CD.
> Pipelines are configured in a `.gitlab-ci.yml` file by using YAML keywords.

🌐 [CI/CD pipelines](https://docs.gitlab.com/ci/pipelines/)

## Pipeline code

🌐 [CI/CD YAML syntax reference](https://docs.gitlab.com/ci/yaml/)

### Features

* [Components](pipeline-components.md)
* [Services](https://docs.gitlab.com/ci/services/)

## Pipeline types

* [Basic pipelines](https://docs.gitlab.com/ci/pipelines/pipeline_architectures/#basic-pipelines)
* [Merge request pipelines](https://docs.gitlab.com/ci/pipelines/merge_request_pipelines/)
* [Merged results pipelines](https://docs.gitlab.com/ci/pipelines/merged_results_pipelines/)
* [Merge trains](https://docs.gitlab.com/ci/pipelines/merge_trains/)
* [Parent-child pipelines](https://docs.gitlab.com/ci/pipelines/downstream_pipelines/#parent-child-pipelines)
* [Multi-project pipelines](https://docs.gitlab.com/ci/pipelines/downstream_pipelines/#multi-project-pipelines)

## Best practices

🌐 [CI/CD development guidelines](https://docs.gitlab.com/development/cicd/)

### Pipeline code quality

* [Principles (DRY, KISS SOLID, YAGNI)](developers.md#software-programming-principles)
* [Optimize configuration files](https://docs.gitlab.com/ci/yaml/yaml_optimization/)
  * Anchors
  * `extends`
  * `!reference`
* [Use configuration from other files](https://docs.gitlab.com/ci/yaml/includes/)
  * [`include`](https://docs.gitlab.com/ci/yaml/#include)

<!-- See also [10 préconisations pour une CI/CD efficace](https://www.linkedin.com/pulse/gitlab-ci-10-pr%C3%A9conisations-pour-une-cicd-efficace-benoit-couetil/) -->

### Performance

* [Caching](https://docs.gitlab.com/ci/caching/)

## Support

* [Debugging CI/CD pipelines](https://docs.gitlab.com/ci/debugging/)
* [Run a pipeline locally](runner-container.md#debug-pipeline-with-local-execution)

## Examples

* [GitLab pipeline](https://gitlab.com/gitlab-org/gitlab/-/pipelines)
([`.gitlab-ci.yml`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab-ci.yml), [`.gitlab/ci`](https://gitlab.com/gitlab-org/gitlab/-/tree/master/.gitlab/ci))
