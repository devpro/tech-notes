# GitLab platform architecture

🌐 [docs/development/architecture](https://docs.gitlab.com/ee/development/architecture.html)

📝 [handbook/engineering/infrastructure/production/architecture](https://handbook.gitlab.com/handbook/engineering/infrastructure/production/architecture/)

## Components

Name                 | Role
---------------------|---------------------------------------------------------------------------------------------------------------------------
**Gitaly**           | High-level RPC access to Git repositories
**GitLab Geo**       | Solution for widely distributed development teams and for providing a warm-standby as part of a disaster recovery strategy
**GitLab Shell**     | Handles Git SSH sessions for GitLab and modifies the list of authorized keys
**GitLab Workhorse** | Smart reverse proxy for GitLab intended to handle resource-intensive and long-running requests
**PostgreSQL**       | Database for persistent information (users, permissions, issues, or other metadata)
**Praefect**         | Traffic manager making Git data highly available
**Prometheus**       | Exposes metrics about the individual processes used to provide GitLab the service
**Puma**             | HTTP server that runs the core Rails application that provides the user-facing features of GitLab
**Redis**            | Stores session data, temporary cache information, background job queues
**Registry**         | Stores container images
**Sidekiq**          | Background job processor

### Gitaly

> Gitaly is a Git RPC service for handling all the Git calls made by GitLab.

🌐 [gitlab-org/gitaly](https://gitlab.com/gitlab-org/gitaly)

📝 [docs/development/gitaly](https://docs.gitlab.com/ee/development/gitaly.html),
[docs/administration/gitaly](https://docs.gitlab.com/ee/administration/gitaly/)

### Praefect

> Gitaly storage node traffic manager to provide a Gitaly Cluster.
> Praefect inspects the request and tries to route it to the right Gitaly backend, checks that Gitaly is up, makes sure the copies of your data are up to date, and so on.

🌐 [gitlab-org/gitaly/internal/praefect](https://gitlab.com/gitlab-org/gitaly/-/tree/master/internal/praefect)

📝 [blog/2021/01/21/high-availability-git-storage-with-praefect](https://about.gitlab.com/blog/2021/01/21/high-availability-git-storage-with-praefect/)

### Sidekiq

> Simple, efficient background jobs for Ruby.

🌐 [sidekiq/sidekiq](https://github.com/sidekiq/sidekiq)

📝 [docs/development/sidekiq](https://docs.gitlab.com/ee/development/sidekiq/)

### GitLab Geo

> Geo connects GitLab instances together.
> One GitLab instance is designated as a primary site and can be run with multiple secondary sites.

📝 [docs/development/geo](https://docs.gitlab.com/ee/development/geo.html)
[docs/administration/geo](https://docs.gitlab.com/ee/administration/geo/index.html),
[blog/2018/09/14/how-we-built-gitlab-geo](https://about.gitlab.com/blog/2018/09/14/how-we-built-gitlab-geo/)

### GitLab Shell

> GitLab Shell handles Git SSH sessions for GitLab and modifies the list of authorized keys.
> GitLab Shell is not a Unix shell nor a replacement for Bash or Zsh.

🌐 [gitlab-org/gitlab-shell](https://gitlab.com/gitlab-org/gitlab-shell/)

📝 [docs/development/gitlab_shell](https://docs.gitlab.com/ee/development/gitlab_shell/)

### GitLab Workhorse

> GitLab Workhorse is a smart reverse proxy for GitLab intended to handle resource-intensive and long-running requests.
> It sits in front of Puma and intercepts every HTTP request destined for and emitted from GitLab Rails.
> Rails delegates requests to Workhorse and it takes responsibility for resource intensive HTTP requests such as file downloads and uploads, git over HTTP push/pull and git over HTTP archive downloads, which optimizes resource utilization and improves request handling efficiency.

🌐 [gitlab-org/gitlab/workhorse](https://gitlab.com/gitlab-org/gitlab/tree/master/workhorse)

📝 [docs/development/workhorse](https://docs.gitlab.com/ee/development/workhorse/)

### Registry

> The registry is what users use to store their own container images.
> The bundled registry uses NGINX as a load balancer and GitLab as an authentication manager.

🌐 [gitlab-org/container-registry](https://gitlab.com/gitlab-org/container-registry)

### Puma

> Puma is a simple, fast, multi-threaded, and highly parallel HTTP 1.1 server for Ruby/Rack applications.

🌐 [puma/puma](https://github.com/puma/puma/)

📝 [docs/administration/operations/puma](https://docs.gitlab.com/ee/administration/operations/puma.html)

### PostgreSQL

> PostgreSQL is the only supported database and is bundled with the Linux package.
> You can also use an external PostgreSQL database which must be tuned for GitLab.

🌐 [postgresql.org](https://www.postgresql.org/)

📝 [docs/install/requirements](https://docs.gitlab.com/ee/install/requirements.html#postgresql)

### Redis

> GitLab uses Redis for the following distinct purposes:
>
> - Caching (mostly via Rails.cache)
> - As a job processing queue with Sidekiq
> - To manage the shared application state
> - To store CI trace chunks
> - As a Pub/Sub queue backend for ActionCable
> - Rate limiting state storage
> - Sessions

🌐 [redis/redis](https://github.com/redis/redis)

📝 [docs/development/redis](https://docs.gitlab.com/ee/development/redis.html),
[docs/administration/redis](https://docs.gitlab.com/ee/administration/redis/)

### Prometheus

🌐 [prometheus/prometheus](https://github.com/prometheus/prometheus)
