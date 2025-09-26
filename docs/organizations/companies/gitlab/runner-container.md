# GitLab Runner executed in a container

## Use cases

### Debug pipeline with local execution

Workaround found on [gitlab-runner issue#4275](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/4275)

Use Docker image:

```bash
# creates local folder
mkdir -p .gitlab/runner/local

# displays help on a command
docker run --rm --name gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/.gitlab/runner/local/config:/etc/gitlab-runner -v $PWD:$PWD --workdir $PWD gitlab/gitlab-runner exec help

# executes shell on "build" job
docker run --rm --name gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock -v $PWD/.gitlab/runner/local/config:/etc/gitlab-runner -v $PWD:$PWD --workdir $PWD gitlab/gitlab-runner exec shell build
```

Warning: Includes are not supported unfortunately ([Issue #2797](https://gitlab.com/gitlab-org/gitlab-runner/-/issues/2797), alternative with [firecow/gitlab-ci-local](https://github.com/firecow/gitlab-ci-local))
