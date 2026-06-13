# gcloud

> Create and manage Google Cloud resources and services directly on the command line or via scripts using `gcloud`, the Google Cloud CLI (Command Line Interface).

🌐 [cloud.google.com/cli](https://cloud.google.com/cli), [docs](https://cloud.google.com/sdk/gcloud)

## Installation

🌐 [Install the gcloud CLI](https://cloud.google.com/sdk/docs/install)

## Commands

Command                                  | Action
-----------------------------------------|---------------------------------------------------------
`gcloud init`                            | Initialize, authorize, and configure the gcloud tool
`gcloud cheat-sheet`                     | See a roster of go-to `gcloud` commands
`gcloud config list`                     | Display all the properties for the current configuration
`gcloud projects describe`               | Display metadata for a project (including its ID)
`gcloud --help`                          | See the Cloud Platform services you can interact with
`gcloud help <command>`                  | Get help on any gcloud command
`gcloud projects list`                   | View projects
`gcloud config set project [PROJECT_ID]` | Set a Cloud Platform project in the CLI session

## Examples

```bash
gcloud projects list --filter="projectId:clgcporg110-p*" --format="value(projectNumber,projectId)"
````
