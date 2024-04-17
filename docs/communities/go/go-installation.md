# Installation of Go

[Download and install](https://go.dev/doc/install)

## On Windows 10

Download `go1.xx.y.windows-amd64.msi` from [go.dev/dl](https://go.dev/dl/) and run it.

The installer will update the environment variables (need to restart any open command prompts for the change to take effect):

Variable Name | Variable Value                                                            | Variable Type
--------------|---------------------------------------------------------------------------|--------------
`GOPATH`      | `%USERPROFILE%\go`                                                        | User
`Path`        | `%USERPROFILE%\go\bin`                                                    | User
`Path`        | Go installation directory + "\bin" (by default "C:\Program Files\Go\bin") | System

To uninstall:

- Remove remove an existing Go installation from your system delete the go directory ("C:\Program Files\Go" by default in Windows).
- Remove Go bin directory from the `Path` System and User environment variable and the `GOPATH` User environment variable.
