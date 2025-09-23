# Markdown code execution ADR - September, 2024

## Context and problem statement

As a technical writer, I want to be able to execute the code blocks included in a Markdown page so that I can improve the user experience of the person that will be following the documentation.

## Requirements

* Execute in one click the code in a terminal that would have been opened and selected before
* Must work in Visual Studio Code or integrated in a solution to provide the HTML from the Markdown
* Technical solution must be free of charge

## Considered options

Name                                                                                         | Sources                                                                    | IDE
---------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|-------------------
[Runme](https://docs.runme.dev/)                                                             | [:octocat:](https://github.com/coder/code-server) _★ 1.1k_                 | Visual Studio Code
[Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) | [:octocat:](https://github.com/formulahendry/vscode-code-runner)  _★ 2.2k_ | Visual Studio Code

## Decision outcome

⛵ Experimentation in progress!

* 🟠 **Runme** looks cool and brings the concept of Notebook, but is limited and has some bugs
* 🔴 **Code Runner**  is only for code in a sandbox, not on an actual terminal
