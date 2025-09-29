# Step 1

In this step, we are going to look at the environment and see how to view & update the configuration.

Display the git client version:

```bash
git version
```

Look at the available git commands:

```bash
git help
```

List all configuration:

```bash
git config -l
```

Set your identity (you can update it)

```bash
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

Set default branch name:

```bash
git config --global init.defaultBranch main
```

List at the updated configuration:

```bash
git config -l
```

You can also look at one configuration in particular:

```bash
git config user.name
```

Finally look at where it is stored

```bash
more $HOME/.gitconfig
```

References:

- [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
- [Getting Help](https://git-scm.com/book/en/v2/Getting-Started-Getting-Help)
