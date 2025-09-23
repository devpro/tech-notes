# Migrate git repositories

## Usage

### Azure Repo to Azure Repo (Azure DevOps)

* Make sure Azure CLI is installed and Azure DevOps extension has been added (ref. [Get started with Azure DevOps CLI](https://learn.microsoft.com/en-us/azure/devops/cli/))

```bash
az --version
az extension add --name azure-devops
```

* Configure git to avoid issues

```bash
git config --global pager.tag false
```

* Connect to Azure (ref. [Sign in with a personal access token](https://learn.microsoft.com/en-us/azure/devops/cli/log-in-via-pat))

```bash
az login
# or
export AZURE_DEVOPS_EXT_PAT=xxxxxxxxxx
```

* Run the migration script (ref. [az repos](https://learn.microsoft.com/en-us/cli/azure/repos))

```bash
scripts/migrate_azure_repos.sh <oldorg> <oldproject> <oldrepo> <neworg> <newproject> <newrepo> <repoid> <tempdirpath>
```

* Optionnally, migrate all repositories of a project

```bash
while read repository
do
  name=$(echo "$repository" | jq -r .name)
  id=$(echo "$repository" | jq -r .id)
  echo "Repository ${id}, ${name}"
  scripts/migrate_azure_repos.sh <oldorg> <oldproject> $name <neworg> <newproject> <someprefix>$name $id <tempdirpath>
done < <(echo `az repos list --organization https://dev.azure.com/<oldorg> --project <oldproject>` | jq -c '.[]')
```

## Behind the scenes

### General workflow

1. Clone origin repository
2. Checkout all branches
3. Create destination repository
4. Set destination remote
5. Push all branches with tags to destination
6. Check destination content
7. Delete origin repository
