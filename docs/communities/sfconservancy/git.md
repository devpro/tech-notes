# Git

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

🌐 [git-scm.com](https://git-scm.com/)

## Content

* [Git CLI](git-cli.md)

## Learn

* [GitHub Guides > GitFlow](https://guides.github.com/introduction/flow/)
* [GitKraken > Learn Git](https://www.gitkraken.com/learn/git)

## Recipes

* Rename your `master` branch to `main` (original idea from [hanselman.com](https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx))

```bash
git branch -m master main
git push -u origin main
```

* SVN (Subversion) to git migration

  * [GitKraken - Migrating to Git from SVN](https://www.gitkraken.com/blog/migrating-git-svn)
  * [Azure DevOps - Learn how to migrate from Subversion (SVN) to Git, including history](https://docs.microsoft.com/en-us/azure/devops/repos/git/perform-migration-from-svn-to-git)

* Self-update git on Windows

```msdos
git update-git-for-windows
```

## Tools

* [GitKraken](https://www.gitkraken.com/): legendary Git GUI client for Windows, Mac & Linux
* [pre-commit](https://pre-commit.com/): a framework for managing and maintaining multi-language pre-commit hooks
