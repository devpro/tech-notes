# Step 3

So, now we have a local repository but it's not easily accessible to others and all data can be easily lost with a simple "rm -r".

At some point, we'll use a git repository system, such as [GitHub](https://github.com/), [Azure DevOps](https://dev.azure.com/), GitLab, BitBucket.

:::danger Important

if you create a repository afterwards, make sure it's completely empty otherwise you won't be able to push

:::

Let's assume we created a new repository whose git URL is `https://github.com/myusername/my-repo.git`.

You can now push your local repository to a central place (called `remote`):

```bash
git remote add origin https://github.com/myusername/my-repo.git
```

You can look at the remotes:

```bash
git remote -v
```

Now we can push the local branches:

```bash
git push -u origin main
```

You can also pull even if there shouldn't be any changes:

```bash
git pull
```
