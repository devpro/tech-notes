# Bitbucket (Cloud)

## Introduction

> Bitbucket is more than just Git code management.
> Bitbucket gives teams one place to plan projects, collaborate on code, test, and deploy.

[bitbucket.org/product](https://bitbucket.org/product/)

## Setup

Create a file `bitbucket-pipelines.yml`:

```yml
image: mcr.microsoft.com/dotnet/sdk:5.0

pipelines:
  default:
    - parallel:
        - step:
            name: Build and Test
            caches:
              - dotnetcore
            script:
              - REPORTS_PATH=./test-reports/build_${BITBUCKET_BUILD_NUMBER}
              - cd samples/dotnet
              - dotnet restore
              - dotnet build --no-restore --configuration Release
              - dotnet test --no-build --configuration Release --test-adapter-path:. --logger:"junit;LogFilePath=$REPORTS_PATH/junit.xml"
        - step:
            name: Lint the code
            caches:
              - dotnetcore
            script:
              - export SOLUTION_NAME=Devpro.CIToolsDemo
              - export REPORTS_PATH=linter-reports
              - cd samples/dotnet
              - dotnet new tool-manifest
              - dotnet tool install JetBrains.ReSharper.GlobalTools --version 2021.1.0-eap02
              - dotnet tool restore
              - dotnet jb inspectcode ${SOLUTION_NAME}.sln --output="${REPORTS_PATH}/jb-${BITBUCKET_BUILD_NUMBER}.xml"
            artifacts:
              - linter-reports/**
```
