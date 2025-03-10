# GitLab Flow

> GitLab Flow prevents the overhead of releasing, tagging, and merging to streamline development
>
> &mdash; _[about/version-control/what-is-gitlab-flow](https://about.gitlab.com/topics/version-control/what-is-gitlab-flow/)_

## Comparison

* [What is the best Git branch strategy?](https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy) by GitKraken

## Best practices

1. Use feature branches rather than direct commits on the main branch
2. Test all commits, not only ones on the main branch
3. Run every test on all commits
4. Perform code reviews before merging into the main branch
5. Deployments are automatic based on branches or tags
6. Tags are set by the user, not by CI
7. Releases are based on tags
8. Pushed commits are never rebased
9. Everyone starts from main and targets main
10. Fix bugs in main first and release branches second
11. Commit messages reflect intent

Source: [about.gitlab.com/version-control/what-are-gitlab-flow-best-practices](https://about.gitlab.com/topics/version-control/what-are-gitlab-flow-best-practices/)
