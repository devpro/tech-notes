# Step 1

In this step, we are going to look at the environment and see how to view & update the configuration.

* Display the git client version:

`git version`

* Look at the available git commands:

`git help`

* List all configuration:

`git config -l`

* Set your identity (you can update it):

`git config --global user.name "John Doe"`

`git config --global user.email johndoe@example.com`

* Set default branch name:

`git config --global init.defaultBranch main`

* List at the updated configuration:

`git config -l`

* You can also look at one configuration in particular:

`git config user.name`

* Finally look at where it is stored

`more $HOME/.gitconfig`

References: [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup), [Getting Help](https://git-scm.com/book/en/v2/Getting-Started-Getting-Help)
