# Epinio samples

Samples of usage of [Epinio](epinio.md) to deploy workload with a command.

## Angular

Run the following command to deploy the Angular application:

```bash
epinio push --name ngsample --path ngsample --env BP_WEB_SERVER=nginx --env BP_WEB_SERVER_ROOT=dist/ngsample --env BP_NODE_RUN_SCRIPTS=build --env BP_WEB_SERVER_ENABLE_PUSH_STATE=true
# NODE_ENV=development
```

References:

- [paketo-buildpacks/samples/web-servers/angular-nginx-sample](https://github.com/paketo-buildpacks/samples/tree/main/web-servers/angular-nginx-sample)
- [Paketo Buildpacks > Build and Serve a Frontend Framework App](https://paketo.io/docs/howto/web-servers/#build-and-serve-a-frontend-framework-app)

## .NET

Run the following command to deploy an ASP.NET application:

```bash
epinio push --name aspnetapisample --path src/WebApi --env ASPNETCORE_ENVIRONMENT=Development
```

For Paketo Buildpacks to be able to create artifacts that run, the file `Procfile` must be added (see [Override the Start Process Set by the Buildpack](https://paketo.io/docs/howto/dotnet-core/#override-the-start-process-set-by-the-buildpack)).

For example `samples/dotnet/src/WebApi/Procfile`:

```Procfile
web: dotnet EpinioDotnetSamples.WebApi.dll
```

## React

Run the following command to deploy the application:

```bash
epinio push --name reactsample --path sample-app --env BP_WEB_SERVER=nginx --env BP_WEB_SERVER_ROOT=build --env BP_NODE_RUN_SCRIPTS=build --env BP_WEB_SERVER_ENABLE_PUSH_STATE=true
```

References:

- [paketo-buildpacks/samples/web-servers/react-frontend-sample](https://github.com/paketo-buildpacks/samples/tree/main/web-servers/react-frontend-sample)
- [Paketo Buildpacks > Build and Serve a Frontend Framework App](https://paketo.io/docs/howto/web-servers/#build-and-serve-a-frontend-framework-app)
- [react.dev](https://react.dev/)
- [create-react-app.dev](https://create-react-app.dev/)
