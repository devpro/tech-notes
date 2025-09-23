#!/bin/bash
set -e

originorganization=$1
originproject=$2
originreponame=$3
destinationorganization=$4
destinationproject=$5
destinationreponame=$6
repoid=$7
tempdir=$8
basepath=`pwd`

az devops configure --defaults organization=https://dev.azure.com/$originorganization project=$originproject

az repos create --name $destinationreponame --org https://dev.azure.com/$destinationorganization --project $destinationproject

mkdir -p $tempdir/$originproject
cd $tempdir/$originproject
git clone git@ssh.dev.azure.com:v3/$originorganization/$originproject/$originreponame
cd $originreponame

git branch -a
for branch in $(git ls-remote --heads origin  | sed 's?.*refs/heads/??'); do
  git checkout $branch
done
git checkout develop || true
git checkout dev || true
git checkout master || true
git checkout main || true
git branch -a
git fetch --tags
git tag

git remote rm origin
git remote add origin git@ssh.dev.azure.com:v3/$destinationorganization/$destinationproject/$destinationreponame
git push origin --all
git push --tags

cd $basepath

az repos delete --id "${repoid}" --org https://dev.azure.com/$originorganization --project $originproject --yes
