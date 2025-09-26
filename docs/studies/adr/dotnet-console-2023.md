# .NET Console design ADR - August, 2023

## Context and Problem Statement

What is the best way to create a nice console application in .NET?

## Requirements

* Interactive console
* Read HTTP stream (read file content in GitHub)
* Deserialize YAML file

## Considered Options

* **.NET framework classes**
  * `System.Diagnostics.Process`
* **NuGet Packages**
  * `CommandLineParser` ([code](https://github.com/commandlineparser/commandline) _★ 4.1k_))
  * `KubernetesClient` ([code](https://github.com/kubernetes-client/csharp) _★ 0.9k_)
  * `Sharprompt` ([code](https://github.com/shibayan/Sharprompt) _★ 0.6k_)
  * `Spectre.Console` ([docs](https://spectreconsole.net/), [code](https://github.com/spectreconsole/spectre.console) _★ 7.3k_)
  * `Terminal.Gui` ([code](https://github.com/gui-cs/Terminal.Gui) _★ 8.4k_)

## Decision Outcome

TODO
