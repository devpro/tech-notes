# Cloud Foundry CLI

## Commands

### Version & help

```bash
cf version

cf help

cf <command> help
```

### Login & logout

```bash
cf login -a <cf-api-endpoint>

cf logout
```

### Organizations

```bash
cf orgs

cf org <orgname>
```

### Space

```bash
cf create-space -o <orgname> <newspacename>

cf spaces

cf space <spacename>
```

### Quota

```bash
cf quotas
```

### Targets

```bash
cf target

cf target -s <newspacename>
```

### Applications

```bash
cf apps

cf app <appname>

cf push

cf restage <appname>

cf dev deploy-service <service-name>

cf services

cf marketplace -s elephantsql

cf create-service elephantsql turtle cf-demo-db

cf bind-service cf-demo cf-demo-db

cf push pal-tracker --random-route -p src/PalTracker/bin/Release/netcoreapp2.1/publish

cf set-env pal-tracker WELCOME_MESSAGE "Hello from Cloud Foundry"

cf restart pal-tracker

cf delete pal-tracker

cf map-route

cf marketplace

cf create-service cleardb spark tracker-database

cf bind-service pal-tracker tracker-database
```

### Scaling

```bash
# instance
cf scale <appname> -i 3

# disk size (causes a restart)
cf scale <appname> -k 512M

# memory limit (causes a restart)
cf scale <appname> -m 1G
```

### Logging & events

```bash
cf logs <appname>

cf logs <appname> --recent

cf events
```

### Access

```bash
cf ssh
```
