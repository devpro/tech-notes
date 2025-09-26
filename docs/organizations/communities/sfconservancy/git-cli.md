# Git CLI (Command Line Interface)

## Usual commands

```bash
# displays Git client version
git version

# opens the help for a given message (in the browser)
git help <command>

# displays the current status of the local repository
git status

# displays the reporistory origin URL
git config --get remote.origin.url
git remote -v

# updates the origin URL
git remote set-url origin ssh://my.git.url

# resets to previous commit if already pushed
git reset --hard HEAD~1
git push origin HEAD --force

# resets to previous commit if not pushed
git reset HEAD~1

# matches exactly the local repository with the remote branch
git reset --hard origin/main

# lists all local and remote branches
git branch -a

# fetches data from remotes
git fetch origin

# deletes locally dev branch (on wrong remotes for instance)
git branch -d dev

# switches remotes (if branch has been deleted first)
git branch dev -t origin/dev
git checkout dev

# switches upstream on an existing branch
git branch --set-upstream-to=origin/dev dev

# pushes a branch (master) on a specific remote (other) by setting upstream to this remote
git push -u other master

# navigates through the tags and branches
git log --graph --decorate --oneline --all

# pushes on all remotes
git remote | xargs -L1 git push --all

# sets file as executable
git update-index --chmod=+x scripts/my_script.sh
```
