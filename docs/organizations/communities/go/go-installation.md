# Installation of Go

🌐 [Download and install](https://go.dev/doc/install)

## Installation on Ubuntu 20.04

Download and extract the latest version.

```bash
curl -OL https://golang.org/dl/go1.22.2.linux-amd64.tar.gz
sudo tar -C /usr/local -xvf go1.22.2.linux-amd64.tar.gz
rm go1.22.2.linux-amd64.tar.gz
```

Edit `~/.profile` to add the following line at the end.

```ini
export PATH=$PATH:/usr/local/go/bin
```

Apply the change to the current terminal.

```bash
source ~/.profile
```

Verify the installation

```bash
go version
```

If needed, uninstall:

```bash
sudo rm -rf /usr/local/go/
```

## Installation on Windows 10

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

## Tips

### Multipe Go versions

Once Go has been installed, you can install other versions with for example `go get golang.org/dl/go1.10.7` and specify it afterwards `go1.10.7 version`
